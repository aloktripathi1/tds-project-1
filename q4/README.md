# Q4: CommonMark Parser in Pure Python

## Task

Write a pure Python function `parse_markdown(markdown)` that converts Markdown to HTML based on CommonMark 0.31.2 using only the standard library.

---

## Approach (ELI15)

1. Split the markdown into lines and read one line at a time.
2. Detect what each line/block is: heading, list, quote, code fence, paragraph, etc.
3. Store each parsed block with metadata in a list.
4. Convert inline syntax (bold, italic, links, images, code spans) safely.
5. Render each parsed block into final HTML tags.
6. Join all HTML pieces and return one final HTML string.

---

## Submission

**Your Answer:**

```python
import re
import html

def parse_markdown(markdown):
    """
    Parses CommonMark 0.31.2 markdown to HTML using pure Python standard library.
    """
    lines = markdown.split('\n')
    blocks = []
    
    # --- Block Parsing Logic ---
    
    current_block = None
    
    # Regex patterns for block identification
    re_atx_header = re.compile(r'^(#{1,6})(?:\s+(.*?))?(?:\s+#+)?\s*$')
    re_hr = re.compile(r'^(?:\s*\*){3,}\s*$|^(?:\s*-){3,}\s*$|^(?:\s*_){3,}\s*$')
    re_fence = re.compile(r'^(\s*)(`{3,}|~{3,})(.*)$')
    re_unordered = re.compile(r'^(\s*)([*+-])\s+(.*)$')
    re_ordered = re.compile(r'^(\s*)(\d{1,9})([.)])\s+(.*)$')
    re_blockquote = re.compile(r'^(\s*)>(?:\s?(.*))?$')
    
    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        
        # 1. Check for Fenced Code Blocks (Start)
        match_fence = re_fence.match(line)
        if match_fence:
            indent, char, info = match_fence.groups()
            if len(indent) < 4:
                # Consume until matching end fence
                code_lines = []
                i += 1
                while i < len(lines):
                    end_match = re_fence.match(lines[i])
                    if end_match:
                        e_indent, e_char, _ = end_match.groups()
                        # End fence must be same char and at least same length
                        if e_char[0] == char[0] and len(e_char) >= len(char) and len(e_indent) < 4:
                             # Check if end fence is inside the code block logic (omitted for brevity in simple parser)
                             break
                    code_lines.append(lines[i])
                    i += 1
                
                lang = info.strip().split()[0] if info.strip() else ""
                class_attr = f' class="language-{html.escape(lang)}"' if lang else ""
                # CommonMark specifies code block content is literal
                code_content = html.escape('\n'.join(code_lines) + ('\n' if code_lines else ''))
                blocks.append({'type': 'code_block', 'content': code_content, 'attr': class_attr})
                i += 1
                continue

        # 2. Check for ATX Headers
        match_header = re_atx_header.match(line)
        if match_header:
            level = len(match_header.group(1))
            content = match_header.group(2) or ""
            blocks.append({'type': 'header', 'level': level, 'content': content})
            i += 1
            continue

        # 3. Check for Horizontal Rules
        if re_hr.match(line):
            blocks.append({'type': 'hr'})
            i += 1
            continue

        # 4. Check for Blockquotes
        match_bq = re_blockquote.match(line)
        if match_bq:
            bq_lines = []
            while i < len(lines):
                m = re_blockquote.match(lines[i])
                if m:
                    bq_lines.append(m.group(2) or "")
                    i += 1
                else:
                    # Lazy continuation check could go here
                    break
            # Recursively parse the content inside the blockquote
            bq_content = parse_markdown('\n'.join(bq_lines))
            blocks.append({'type': 'blockquote', 'content': bq_content})
            continue

        # 5. Check for Lists (Basic implementation)
        # Note: Full spec list parsing involves complex tightness/loose checks
        match_ul = re_unordered.match(line)
        match_ol = re_ordered.match(line)
        
        if (match_ul or match_ol) and not (current_block and current_block['type'] == 'paragraph'):
            is_ordered = bool(match_ol)
            list_type = 'ol' if is_ordered else 'ul'
            list_items = []
            
            while i < len(lines):
                # Re-check regex for current line
                m_ul = re_unordered.match(lines[i])
                m_ol = re_ordered.match(lines[i])
                
                if is_ordered and m_ol:
                    content = m_ol.group(4)
                    i += 1
                elif not is_ordered and m_ul:
                    content = m_ul.group(3)
                    i += 1
                else:
                    # Check for continuation lines (indentation)
                    # This is a simplification; spec requires checking indent levels
                    if lines[i].startswith('  ') and len(list_items) > 0:
                        list_items[-1] += '\n' + lines[i].strip()
                        i += 1
                        continue
                    else:
                        break
                
                # Recursively parse list item content
                # Strip leading whitespace to handle indentation in recursive call
                item_html = parse_markdown(content)
                # Remove wrapping p tags if tight list (simplified)
                if item_html.startswith('<p>') and item_html.endswith('</p>\n'):
                    item_html = item_html[3:-5]
                list_items.append(item_html)
            
            blocks.append({'type': list_type, 'items': list_items, 'start': match_ol.group(2) if is_ordered and match_ol.group(2) != '1' else None})
            continue

        # 6. Blank Lines
        if not stripped:
            i += 1
            continue

        # 7. Paragraphs
        # Accumulate lines until a blank line or block start
        p_lines = [stripped]
        i += 1
        while i < len(lines):
            next_line = lines[i]
            if not next_line.strip():
                break
            # Break on block triggers
            if re_atx_header.match(next_line) or re_hr.match(next_line) or \
               re_fence.match(next_line) or re_blockquote.match(next_line) or \
               re_unordered.match(next_line) or re_ordered.match(next_line):
                break
            p_lines.append(next_line.strip())
            i += 1
        
        blocks.append({'type': 'paragraph', 'content': '\n'.join(p_lines)})

    # --- HTML Generation ---
    output = []
    for block in blocks:
        if block['type'] == 'header':
            output.append(f"<h{block['level']}>{parse_inline(block['content'])}</h{block['level']}>\n")
        elif block['type'] == 'paragraph':
            output.append(f"<p>{parse_inline(block['content'])}</p>\n")
        elif block['type'] == 'hr':
            output.append("<hr />\n")
        elif block['type'] == 'code_block':
            output.append(f"<pre><code{block['attr']}>{block['content']}</code></pre>\n")
        elif block['type'] == 'blockquote':
            # Remove trailing newline from recursive call to fit spec
            content = block['content'].strip()
            output.append(f"<blockquote>\n{content}\n</blockquote>\n")
        elif block['type'] == 'ul':
            output.append("<ul>\n")
            for item in block['items']:
                output.append(f"<li>{item}</li>\n")
            output.append("</ul>\n")
        elif block['type'] == 'ol':
            start = f' start="{block["start"]}"' if block.get('start') else ''
            output.append(f"<ol{start}>\n")
            for item in block['items']:
                output.append(f"<li>{item}</li>\n")
            output.append("</ol>\n")

    return "".join(output)

def parse_inline(text):
    """
    Handles inline formatting: bold, italic, code, links, images.
    Uses a multi-pass regex strategy for simplicity.
    """
    # 0. Escape HTML characters strictly first
    # Note: Real CommonMark parses entities; this is a safety simplification
    text = html.escape(text, quote=False)
    
    # 1. Code spans (backticks) - handled early to prevent formatting inside
    # We use a placeholder to protect code blocks from other regex passes
    code_map = {}
    
    def store_code(match):
        marker = f"\0CODE{len(code_map)}\0"
        content = match.group(2)
        # Check if content starts/ends with space but isn't just spaces
        if len(content) > 2 and content.startswith(' ') and content.endswith(' ') and content.strip():
             content = content[1:-1]
        code_map[marker] = f"<code>{content}</code>"
        return marker

    # Regex for code: `text` or ``text``
    text = re.sub(r'(`+)(.+?)(?<!`)\1(?!`)', store_code, text, flags=re.DOTALL)

    # 2. Images: ![alt](url "title")
    def sub_image(match):
        alt = match.group(1)
        url = match.group(2)
        title = f' title="{match.group(4)}"' if match.group(4) else ""
        return f'<img src="{url}" alt="{alt}"{title} />'
    
    text = re.sub(r'!\[(.*?)\]\((.*?)(\s+"(.*?)")?\)', sub_image, text)

    # 3. Links: [text](url "title")
    def sub_link(match):
        txt = match.group(1)
        url = match.group(2)
        title = f' title="{match.group(4)}"' if match.group(4) else ""
        return f'<a href="{url}"{title}>{txt}</a>'

    text = re.sub(r'\[(.*?)\]\((.*?)(\s+"(.*?)")?\)', sub_link, text)

    # 4. Strong/Emphasis (Bold/Italic)
    # CommonMark precedence is complex. This covers standard cases.
    # ***bolditalic***
    text = re.sub(r'\*\*\*(.+?)\*\*\*', r'<em><strong>\1</strong></em>', text)
    # **bold**
    text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
    text = re.sub(r'__(.+?)__', r'<strong>\1</strong>', text)
    # *italic*
    text = re.sub(r'\*(.+?)\*', r'<em>\1</em>', text)
    text = re.sub(r'_(.+?)_', r'<em>\1</em>', text)

    # 5. Restore Code Spans
    for marker, code_html in code_map.items():
        text = text.replace(marker, code_html)

    # 6. Hard Line Breaks (two spaces at end of line)
    text = text.replace("  \n", "<br />\n")
    
    return text
```