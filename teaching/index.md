---
layout: single
title: <i class="fas fa-chalkboard-teacher fa-fw headingIcon" aria-hidden="true"></i>Teaching
permalink: /teaching/
sidebar:
  nav: teaching
mermaid: true
page_css:
  - /assets/style/research.css
---

<!-- markdownlint-disable MD033 -->

I teach computing as a hands-on, studio-based practice, and I research how generative AI is reshaping the way students learn to build software. My teaching and my research feed each other: insights from working with student teams flow into published findings, and those findings shape how I run my modules.

## Teaching Values

<div class="values-row">
  <div>
    <i class="fas fa-drafting-compass fa-1.5x" aria-hidden="true"></i>
    <strong>Studio-Based Learning</strong><br>
    Architecture-studio-inspired teaching: coaching, peer learning, reflective practice, and project-led work in multi-disciplinary teams.
  </div>
  <div>
    <i class="fas fa-layer-group fa-1.5x" aria-hidden="true"></i>
    <strong>Scaffolding &amp; Fading</strong><br>
    Providing scaffolded support and progressively reducing it as students grow in independence.
  </div>
  <div>
    <i class="fas fa-compass fa-1.5x" aria-hidden="true"></i>
    <strong>Critical, Adaptive Practice</strong><br>
    Graduates who can critically evaluate the tools reshaping their profession, not just use them.
  </div>
</div>

> "Knowing what questions to ask (or how to iterate on a question) is a skill."<br>
> <small>&mdash; <a href="https://doi.org/10.1109/MS.2023.3300574">Bull &amp; Kharrufa, <em>IEEE Software</em> (2024)</a></small>
{: .notice--info}

## Two Pillars of My Teaching

I teach software engineering as a project-based practice, integrating Human-Computer Interaction to ground students' thinking about users and systems. Two pedagogical commitments shape how I approach it:

### <i class="fas fa-drafting-compass fa-fw headingIcon" aria-hidden="true"></i>Studio-Based Learning

I am committed to **Studio-Based Learning (SBL)** — a hands-on, project- and problem-based teaching method inspired by architecture, design, and art studios. Studio teaching centres on coaching rather than lecturing, peer learning, reflective practice, and multi-disciplinary teamwork. It is particularly well-suited to software engineering, where collaboration, judgement, and adapting to real-world constraints matter at least as much as technical knowledge.

I [researched and helped to successfully implement](http://www.research.lancs.ac.uk/portal/en/publications/studios-in-software-engineering-education(a6a4d34e-cb6e-4eba-b558-03a8a10d2831).html) the studio approach throughout Software Engineering at Lancaster University, and I continue to engage with it both as an educator and a researcher. My work in this area was recognised with a **Best Paper award at [CSEE&amp;T 2014](https://conferences.computer.org/cseet/)**.

<a href="/research/studio-education/" class="btn btn--primary">Studio-Based Learning research <i class="fas fa-arrow-right" aria-hidden="true"></i></a>

### <i class="fas fa-robot fa-fw headingIcon" aria-hidden="true"></i>Teaching with Generative AI in Computing Education

Generative AI is changing what it means to learn to program. In an [IEEE Software article](https://doi.org/10.1109/MS.2023.3300574) with [Ahmed Kharrufa](https://openlab.ncl.ac.uk/people/ahmed-kharrufa/), I argued that the right pedagogical response is **integration with critical judgement**, not avoidance. Treating GenAI as a forbidden tool misses the chance to teach the harder, more durable skill: *how* and *when* to use these tools well.

In a [follow-up study](https://doi.org/10.1145/3779296) with my colleagues, we found that GenAI in a 2nd-year software engineering team project plays three distinct **roles** for students: as an *educator* (explanations, worked examples, mentor), as a *peer* (brainstorming, reviewing code and documents, bridging the skills gap within teams), and as an *assistant* (boilerplate, tests, bug fixing). We proposed a **design space** (roles &times; support-ability patterns &times; transparency) to help educators and tool-builders maximise the learning benefits while mitigating the risks. These ideas directly shape how I run my software engineering team-project modules.

<a href="/research/gen-ai-comp-education/" class="btn btn--primary">Generative AI in Computing Education research <i class="fas fa-arrow-right" aria-hidden="true"></i></a>

## How My Teaching and Research Connect

```mermaid
---
title: Teaching Foundations, Practice, and Outcomes
config:
    flowchart:
        curve: cardinal
        useMaxWidth: true
        htmlLabels: true
        nodeSpacing: 25
        rankSpacing: 50
---
flowchart LR
    accTitle: Teaching foundations, practice, and outcomes
    accDescr: Diagram showing how pedagogical foundations (Studio-Based Learning, Scaffolding and Fading, Reflective Practice) and research-informed lenses (Roles of AI, Support-Ability Patterns, Transparency) feed into teaching practice (coaching, project-led modules, peer reviews), which graduates critical, adaptive, future-ready problem solvers.

    subgraph F["Pedagogical Foundations"]
        direction TB
        SBL[Studio-Based Learning] ~~~
        SF[Scaffolding & Fading] ~~~
        RP[Reflective Practice]
    end

    subgraph R["Informed by My Research"]
        direction TB
        PD[Pedagogical Design for AI Tools] ~~~
        HF[Human Factors in Computing Education] ~~~
        SBR[Studio-Based Learning research]
    end

    subgraph P["In Practice"]
        direction TB
        C[Coaching, not Lecturing] ~~~
        PJ[Project-Led Modules] ~~~
        PV[Peer Code & Design Reviews] ~~~
        PA[Process-Focused Assessment] ~~~
        ASP[Authentic Software Practices]
    end

    subgraph O["Graduates Who Are…"]
        direction TB
        TC[Tool-Critical Engineers] ~~~
        MD[Multi-Disciplinary Collaborators] ~~~
        REF[Reflective Practitioners] ~~~
        FR[Future-Ready Problem Solvers]
    end

    F e1@--> P
    R e2@--> P
    P e3@--> O

    classDef foundation fill:#f3e5f5,stroke:#7b1fa2,stroke-width:0.08em,color:#1a1a1a,font-size:1em,rx:0.65em,ry:0.65em;
    classDef research fill:#fff3e0,stroke:#f57c00,stroke-width:0.08em,color:#1a1a1a,font-size:1em,rx:0.65em,ry:0.65em;
    classDef practice fill:#e3f2fd,stroke:#1976d2,stroke-width:0.08em,color:#1a1a1a,font-size:1em,rx:0.65em,ry:0.65em;
    classDef outcome fill:#e8f5e9,stroke:#388e3c,stroke-width:0.08em,color:#1a1a1a,font-size:1em,rx:0.65em,ry:0.65em;
    classDef subgraphStyle fill:#fafafa,stroke:#bbb,stroke-width:0.125em,font-size:1.1em,font-weight:bold,rx:0.75em,ry:0.75em;

    class SBL,SF,RP foundation;
    class PD,HF,SBR research;
    class C,PJ,PV,PA,ASP practice;
    class TC,MD,REF,FR outcome;
    class F,R,P,O subgraphStyle;

    classDef animate stroke-dasharray: 9,5,stroke-dashoffset: 900,animation: dash 60s linear infinite;
    class e1,e2,e3 animate;
```

<i class="fas fa-award fa-fw" aria-hidden="true"></i> Active in the wider computing education research community as a regular program committee member and peer reviewer, recognised with a **Distinguished Reviewer Award at CSEE&amp;T 2020**.
{: .notice}

## Equality, Equity &amp; Diversity

I take equality, equity, and diversity seriously in my teaching and supervision. I set out my position and the actions I am taking [on a dedicated page](/equality.html), and I am happy to be [contacted](/profile/#contacting-me) about it.
{: .notice}

## Explore Further

<div class="btn-group">
  <a href="/research/themes/#human-factors-in-computing-education" class="btn btn--primary"><i class="fas fa-laptop-code fa-fw headingIcon" aria-hidden="true"></i>Computing Education Research</a>
  <a href="/research/gen-ai-comp-education/" class="btn btn--primary"><i class="fas fa-robot fa-fw headingIcon" aria-hidden="true"></i>Generative AI Project</a>
  <a href="/teaching/courses/" class="btn btn--primary"><i class="fas fa-chalkboard fa-fw headingIcon" aria-hidden="true"></i>Modules & Approaches</a>
</div>
