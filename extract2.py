import pymupdf as fitz, re
doc = fitz.open("理财圣经CLEC版-v3.4.1.pdf")
full = []
for i in range(doc.page_count):
    full.append(doc[i].get_text())
text = "\n".join(full)
with open("lsjs_dump.txt","w",encoding="utf-8") as f:
    f.write(text)
print("total chars:", len(text))
print("\n--- Possible headings ---")
for line in text.splitlines():
    s=line.strip()
    if re.search(r"第[一二三四五六七八九十\d]+[章讲节篇]|PART|Part|讲座|Lesson|LESSON", s) and len(s)<40:
        print(s)
