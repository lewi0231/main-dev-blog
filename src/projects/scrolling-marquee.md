---
title: Create Shopify Dawn Theme Scrolling Marquee
slug: shopify-marquee
tags: ['Shopify', 'Dawn', 'Marquee']
summary: I add a scrolling marquee feature to the Dawn Shopify theme.
date: 2021-01-04T00:00:00+00:00
---

### TLDR
Feel free to jump straight to the code below.  Note this has not been tested in themes other than the Dawn theme.

### Introduction
I recently came across a fascinating YouTube [video](https://www.youtube.com/watch?v=ygPq5nMErdg) showcasing a trending design feature – the Marquee scroller, prominently featured on sites like [MrBeast](https://mrbeast.store/). Inspired, I decided to implement a similar feature for the Shopify Dawn theme.

### Why a Marquee.
Marquees add a touch of nostalgic charm and can be quite engaging. Here’s why you might consider one:

- **Attention-Grabbing**: Perfect for highlighting important information.
- **Adds Fun**: Adds Fun: Introduces a playful element to your site.

### Step-by-Step Guide

1. #### Accessing the Code Editor:
* Go to your Shopify store's admin page.
* Navigate to Online Store -> Themes.
* Click on the three dots next to 'Customize', and select 'Edit code'.

2. #### Creating the Marquee:
* In the 'Sections' folder, create a new file named marquee.liquid.
* Copy and paste the following code:

```jsx file=marquee.liquid
{% assign font_size_class = "text-medium" %}

{% if section.settings.font_size == "small" %}
    {% assign font_size_class = "text-small" %}
{% elsif section.settings.font_size == "medium" %}
    {% assign font_size_class = "text-medium" %}
{% elsif section.settings.font_size == "large" %}
    {% assign font_size_class = "text-large" %}
{% endif  %}

<div class="color-{{ section.settings.color_scheme }} gradient">
    <div class="marquee-wrapper">
        <div class="marquee-content {{font_size_class}}">{{section.settings.text}}</div>
        <div class="marquee-content {{font_size_class}}">{{section.settings.text}}</div>
    </div>
</div>



{%- style -%}
   

    .marquee-wrapper {
        border-top: {{section.settings.border_color}} solid {{section.settings.border_thickness}}px;
        border-bottom: {{section.settings.border_color}} solid {{section.settings.border_thickness}}px;
        overflow: hidden;
        padding-top: {{section.settings.padding}}px;
        padding-bottom: {{section.settings.padding}}px;
        white-space: nowrap;
    }
    
    .marquee-content {
        display: inline-block;
        animation: marquee-animation {{section.settings.speed}}s linear infinite;
    }

    .marquee-content.text-small {
        font-size: 1.1rem;
    }

    .marquee-content.text-medium {
        font-size: 1.3rem;
    }

    .marquee-content.text-large {
        font-size: 1.7rem;
    }


    @keyframes marquee-animation {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }


{%- endstyle -%}

{% schema %}
{
  "name": "marquee",
  "tag": "section",
  "class": "section",
  "disabled_on": {
    "groups": ["header", "footer"]
  },
  "settings": [
    {
      "type": "select",
      "id": "direction",
      "options": [
        {
          "value": "left",
          "label": "Left"
        },
        {
          "value": "right",
          "label": "Right"
        }
      ],
      "default": "left",
      "label": "Direction"
    },
    {
      "type": "text",
      "id": "text",
      "label": "Text"
    },
    {
      "type": "color_scheme",
      "id": "color_scheme",
      "label": "t:sections.all.colors.label",
      "default": "background-1"
    },
    {
      "type": "range",
      "id": "speed",
      "min": 1,
      "max": 50,
      "step": 1,
      "unit": "s",
      "label": "Speed",
      "default": 8
    },
    {
      "type": "range",
      "id": "padding",
      "min": 0,
      "max": 40,
      "step": 1,
      "unit": "px",
      "label": "Padding",
      "default": 4
    },
    {
      "type": "header",
      "content": "Border"
    },
    {
      "type": "range",
      "id": "border_thickness",
      "min": 0,
      "max": 5,
      "step": 0.5,
      "unit": "px",
      "label": "Border Thickness",
      "default": 2
    },
    {
        "type": "select",
        "id": "font_size",
        "label": "Font Size",
        "options": [
            {
                "value": "small",
                "label": "Small"
            },
            {
                "value": "medium",
                "label": "Medium"
            },
            {
                "value": "large",
                "label": "Large"
            }
        ], 
        "default": "medium"
    },
    {
      "type": "text",
      "id": "border_color",
      "label": "Border Color",
      "default": "#000000"
    }
  ],
  "presets": [
    {
      "name": "marquee",
      "category": "custom"
    }
  ]
}
{% endschema %}
```

### Tailoring the Marquee
This basic marquee setup offers customization options like direction, speed, and padding. For advanced customizations (such as incorporating SVGs or unique fonts), feel free to reach out for personalized coding assistance.


