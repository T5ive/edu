---
sidebar_position: 2.00
title: 🦹ผู้ช่วยพัฒนา
image: https://th.bing.com/th/id/OIG2.JkyXPysFsrcbPXGovPpt
description: สำหรับเพื่อนๆที่สนใจอยากช่วยพัฒนาให้ตัวเว็บสลัดผักมีความสามารถแจ่มๆ หรือ ช่วยจัดการ Issues ต่างๆ ก็สามารถเข้ามาร่วมขบวนกันอุ๊งๆได้เยย 😽
tags: [contribution, tutorial, contributor]
---

# {frontMatter.title}

<p>{frontMatter.description}</p>

![banner](assets/contributor.jpg)

<blockquote>ภาพจาก <a href={frontMatter.image} target="_blank">Microsoft Copilot</a></blockquote>

---

## 😅ให้ช่วยไยหร๋า {#mission}
ประเด็นต่างๆที่ผองเพื่อนแมวน้ำส่งมาทั้งหมดนั้นจะเข้ามาจาก [<Icon icon="fa-brands fa-github" size="lg" /> `Github Issues`](https://github.com/saladpuk/edu/issues) เพียงช่องทางเดียวเยย เช่น เสนอไอเดียใหม่ๆ ขอความช่วยเหลือ ติดปัญหา บลาๆ ซึ่งกระป๋มขอสารภาพว่าตัวป๋มเพียงลำพังคงจะไม่สามารถทำทั้งหมดได้เองครับ ซึ่งหากเพื่อนๆคนไหนพอมีเวลาที่จะช่วยผลักดันสังคมแห่งการแบ่งปันที่ชื่อว่าสลัดผักนี้ได้ **ดช.แมวน้ำ** ก็ขอขอบพระคุณเป็นอย่างสูงครับ 🙇🙇‍♂️🙇‍♀️

> รายละเอียดการรันโปรเจคอยู่ใน README.md

:::note
การติดตามงานและรายละเอียดต่างๆทั้งหมดจะใช้ <Icon icon="fa-brands fa-github" size="lg" /> Github เป็นหลักนะครับ
:::

## 📦การสร้าง React Components {#component}
เว็บสลัดผักถูกสร้างมาจาก [Docusaurus](https://docusaurus.io) ซึ่งสามารถนำไฟล์ Markdown มา render แสดงผลได้เลย แถมยังสามารถผสม React component ร่วมเข้ามาได้ด้วย โดยเวทมนต์เบื้องหลังนี้คือ [MDX](https://mdxjs.com) เช่น การสร้าง custom component เพื่อทำไฮไลท์สี ตามโค้ดตัวอย่างด้านล่าง

```jsx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">Green</Highlight> and <Highlight color="#1877F2">Blue</Highlight>
```

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`);
    }}>
    {children}
  </span>
);

> **ผลลัพท์**
>
> <Highlight color="#25c2a0">Green</Highlight>
> and <Highlight color="#1877F2">Blue</Highlight>

<Comment />