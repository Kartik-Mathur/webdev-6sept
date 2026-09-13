## **Types of CSS Units**
CSS units can be of two categories:
1. **Absolute Units** – Fixed and do not change based on the viewport.
2. **Relative Units** – Adapt based on the parent element or viewport size.

---

## **1. Absolute Units**
Absolute units are fixed in size and do not scale relative to any other elements.

| Unit | Description | Example |
|------|-------------|---------|
| `px` | Pixels – Most commonly used unit | `width: 100px;` |
| `cm` | Centimeters | `width: 5cm;` |
| `mm` | Millimeters | `margin: 10mm;` |
| `in` | Inches (1in = 96px) | `font-size: 0.5in;` |
| `pt` | Points (1pt = 1/72 of an inch) | `font-size: 12pt;` |
| `pc` | Picas (1pc = 12pt) | `margin-left: 2pc;` |

Absolute units are best suited for print styles and not recommended for responsive designs.

---

## **2. Relative Units**
Relative units adjust based on the parent element, font size, or viewport, making them ideal for responsive designs.

### **Font-relative Units**
These units change based on the font size of an element or its parent.

| Unit | Description | Example |
|------|-------------|---------|
| `em` | Relative to the parent element's font size | `font-size: 2em;` (Twice the size of the parent) |
| `rem` | Relative to the root element (`html` tag) | `font-size: 1.5rem;` (1.5 times the root font size) |
| `%` | Relative to the parent element’s size | `width: 50%;` (Half the parent’s width) |

`rem` is preferred over `em` for consistency, as it is unaffected by nested elements.

### **Viewport-relative Units**
These units depend on the viewport size (browser window size).

| Unit | Description | Example |
|------|-------------|---------|
| `vw` | 1% of the viewport width | `width: 50vw;` (50% of the viewport width) |
| `vh` | 1% of the viewport height | `height: 100vh;` (Full viewport height) |


## **Choosing the Units**
- **Use `px` for fine control over small elements like borders.**
- **Use `em` and `rem` for scalable typography.**
- **Use `%` for fluid layouts inside flexible containers.**
- **Use `vw` and `vh` for full-screen elements.**

---