
## Markdown Syntax Cheatsheet

### Basic Formatting
- **Bold**: `**Bold**`
- *Emphasized*: `*Emphasized*`
- ~~Strikethrough~~: `~~Strikethrough~~`
- Horizontal rules: Use `---`, `***`, or `___` (three hyphens, asterisks, or underscores).

### Headings
Use `#` to `######` at the beginning of a line for different heading levels:
- `# Heading 1`
- `## Heading 2`
- `### Heading 3`
- Continue with `######` up to Heading 6.

### Links
- Inline: `[inline link](https://example.com)`
- Inline with title: `[link with title](https://example.com "Title")`
- Reference-style links:
  ```markdown
  Here is a [reference link][example].
  [example]: https://example.com
  ```
- URLs in angle brackets automatically turn into links: <https://example.com>.

### Images
Images work like links, with an exclamation mark (`!`) before the brackets:
- Inline image: `![alt text](https://example.com/image.jpg)`
- Reference-style image:
  ```markdown
  ![alt text][image]
  [image]: https://example.com/image.jpg
  ```

### Lists
#### Unordered Lists
Use `*`, `+`, or `-` for items:
- `* Item 1`
- `+ Item 2`
- `- Item 3`
  - Nested lists by indenting:
    - Sub-item
    - Another sub-item

#### Ordered Lists
Start lines with numbers. Numbers auto-adjust:
1. First item
1. Second item
   - You can also nest lists:
     * Nested item
     * Another nested item

### Code and Syntax Highlighting
- **Inline code**: `` `code` ``
- **Code blocks**: Use triple backticks:
  ```markdown
  ```
  code example
  ```
  ```

### Blockquotes
To create blockquotes, use `>`:
```markdown
> This is a blockquote.
> It can span multiple lines.
```

### Summary
This cheatsheet covers the basics of Markdown syntax to help format text easily. For more details, check the official Markdown documentation.
