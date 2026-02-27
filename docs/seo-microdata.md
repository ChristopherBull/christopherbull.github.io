# SEO & Microdata Guidelines

This site uses **Schema.org microdata** to enhance search engine visibility and provide semantic meaning to structured content. Microdata is embedded directly in HTML using `itemscope`, `itemtype`, and `itemprop` attributes.

## Why Microdata?

- **Search engine optimisation**: Common search engines recognise and index microdata
- **No performance overhead**: Unlike JSON-LD blocks, microdata uses existing HTML
- **Maintainability**: Markup lives alongside content in templates
- **Semantic clarity**: Helps define relationships between content and metadata

## Current Implementations

### PhD Researchers (research/research-pgr.md)

Each PhD researcher in the list is marked with [`Person`](https://schema.org/Person) schema:

**Properties used:**

- `name` - Researcher's full name
- `jobTitle` - "PhD Researcher" or "PhD Researcher (Graduated)"
- `affiliation` - Current institutional affiliation — *current researchers only*
- `alumniOf` - Alma mater — *graduated researchers only*
- `honorificSuffix` - "PhD" — *graduated researchers only*
- `description` - Research topic
- `url` - Link to external profile

**Format:**

```html
<details class="phdCard" itemscope itemtype="https://schema.org/Person">
  <summary class="phdSummary">
    <strong itemprop="name">Jane Doe</strong>
    <meta itemprop="jobTitle" content="PhD Researcher">
    <meta itemprop="affiliation" content="[The Institution]">
    <span class="phdTopic" itemprop="description">Example Research Topic</span>
    <!-- rest of content -->
  </summary>
  <div class="phdDetails">
    <a itemprop="url" href="https://example.com/profile/">Profile</a>
    <!-- rest of details -->
  </div>
</details>
```

## Implementation Notes

### Affiliation Data

Institutional affiliation is tracked for **current researchers only** using the `affiliation` property. For **graduated researchers**, `alumniOf` indicates where they completed their PhD, but current employment is not tracked. This avoids the maintenance burden of tracking alumni across institutions where data quickly becomes out of date. Instead, profile links serve as the source of truth for current positions.

### Using `meta` for Non-Display Properties

When marking up data that doesn't display visually, use `<meta>` tags:

```html
<strong itemprop="name">Jane Doe</strong>
<meta itemprop="jobTitle" content="PhD Researcher">
<!-- jobTitle is hidden but indexed by search engines -->
```

This keeps the markup clean while providing search engines with structured metadata.
