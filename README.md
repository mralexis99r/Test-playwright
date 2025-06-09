# 🛒 Amazon Automation Tests - Playwright + TypeScript

This project contains automation test cases for Amazon.com using [Playwright](https://playwright.dev/) with **TypeScript**.

It simulates a real user journey for browsing products, applying filters, and validating product data — all **without login**.

---

## 🧪 Test Cases Covered

- ✅ Search for product and validate results
- ✅ Apply price filter and verify price range
- ✅ Validate product detail elements (name, price, add-to-cart)
- ✅ Add product to cart and confirm it was added

---

## 💻 Tech Stack

- 🧩 Playwright
- ⚙️ TypeScript
- 📦 Data-Driven Testing using `.json` files
- ☁️ GitHub Actions (CI/CD)
- 🧠 Page Object Model (POM) *(to be implemented)*

---

## 🚀 Getting Started

```bash
npm install
npx playwright install
npx playwright test
```

📸 Screenshots will be stored in `Evidence/Captures/`.

---

## 📊 Data-Driven Testing (DDT)

This project uses external `.json` files for test data (like search terms, price ranges, expected results) to keep tests modular and scalable.

📂 Example:  
```
test-data/
└── products.json
```

You can loop through multiple data sets for broader coverage.

---

## 📂 Folder Structure

```
tests/
├── search.spec.ts
├── filters.spec.ts
├── productDetails.spec.ts
├── cart.spec.ts
test-data/
├── products.json
Evidence/
├── Captures/
```

---

## 📫 Contact

- [LinkedIn - Alexis Roman](https://www.linkedin.com/in/alexis-roman-santiago/)
