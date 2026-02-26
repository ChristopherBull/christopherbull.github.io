---
layout: single
title: <i class="fas fa-project-diagram fa-fw headingIcon" aria-hidden="true"></i>Research Themes
permalink: /research/themes/
sidebar:
  nav: research
toc: true
mermaid: true
---

<!-- markdownlint-disable MD033 -->

I work in human-centred computing, with a particular focus on digital health. My research examines how interactive and intelligent systems behave in real-world settings and how they can be designed and evaluated to support patients, clinicians, and communities. My work spans platforms, immersive experiences, and socio-technical systems, always with an eye on practical impact.

I also explore human factors in computing education and software engineering practice. This includes looking at how new tools and studio-inspired teaching approaches shape learning, collaboration, and professional development.

```mermaid
flowchart LR
    accTitle: Research Themes and Domains of Practice Overview
    accDescr: This diagram shows the foundations, core research themes, and domains of practice of Christopher Bull's human-centred computing research. Foundational areas include Human-Computer Interaction and Software Engineering. All foundational topics inform the core research themes. Core themes include Digital Mental Health, Digital Measures of Health & Wellbeing, Health Informatics & Clinical Workflows, and Human Factors in Computing Education. Domains of practice are Digital Health and Computing Education.

    %% --- CORE RESEARCH THEMES ---
    subgraph T["Core Research Themes"]
        direction TB
        MH[<i class="fas fa-brain fa-fw" aria-hidden="true"></i><br>Digital Mental Health] ~~~
        HI[<i class="fas fa-hospital-user fa-fw" aria-hidden="true"></i><br>Health Informatics & Clinical Workflows] ~~~
        M[<i class="fas fa-chart-line fa-fw" aria-hidden="true"></i><br>Digital Measures of Health & Wellbeing] ~~~
        E[<i class="fas fa-laptop-code fa-fw" aria-hidden="true"></i><br>Human Factors in Computing Education]
    end

    %% --- DOMAINS OF PRACTICE (to the top-right) ---
    subgraph C["Domains of Practice"]
        direction TB
        DH[Digital Health] ~~~
        CE[Computing Education]
    end

    %% --- FOUNDATIONS (to the bottom-right) ---
    subgraph F["Foundations"]
        direction TB
        HCI[Human-Computer Interaction] ~~~
        SE[Software Engineering]
    end

    %% --- STRUCTURAL RELATIONSHIPS ---
    T <--- C
    T <--- F
```

## Research Themes

### <i class="fas fa-brain fa-fw headingIcon" aria-hidden="true"></i>Digital Mental Health

This theme explicitly focuses on the design, evaluation, and deployment of digital technologies for mental health and wellbeing. Work in this area includes conversational agents for dementia care, passive monitoring systems for depression and anxiety, therapeutic interventions using immersive technologies, and digital tools supporting maternal mental health.

Research examines how digital systems can provide monitoring, intervention, and support for mental health conditions across the lifespan, with attention to the distinct ethical, privacy, and engagement challenges inherent in mental health contexts. This includes understanding how people with lived experience, carers, and clinicians interact with mental health technologies in everyday and clinical settings.

### <i class="fas fa-chart-line fa-fw headingIcon" aria-hidden="true"></i>Digital Measures of Health &amp; Wellbeing

Research in this theme explores how complex health-related behaviours and experiences can be captured and interpreted using digital technologies. This includes multimodal sensing, behavioural monitoring, and the development of digital endpoints for both physical and mental health--including digital biomarkers with clinical or research validity.

The goal is to translate data into meaningful insights that support decision-making by patients, clinicians, and communities, while maintaining trust, transparency, and ethical data use.

### <i class="fas fa-hospital-user fa-fw headingIcon" aria-hidden="true"></i>Health Informatics &amp; Clinical Workflows

This theme focuses on the design, implementation, and evaluation of digital health systems within clinical practice and healthcare organisations. Research examines health informatics systems including electronic health records, clinical decision support tools, care coordination platforms, and imaging workflows.

Work explores the socio-technical challenges of integrating digital technologies into clinical settings, focusing on how healthcare professionals experience and adapt to these systems. Studies address organisational change, professional practice, infrastructure requirements, and governance considerations that shape sustainable adoption in real-world healthcare contexts.

### <i class="fas fa-laptop-code fa-fw headingIcon" aria-hidden="true"></i>Human Factors in Computing Education

This strand focuses on how people learn to design and develop software, and how they collaborate and engage with development tools in educational settings. It explores the integration of emerging technologies, such as generative AI, into computing pedagogy, as well as studio-inspired and reflective teaching approaches.

The aim is to better understand what supports effective learning, professional development, and responsible software engineering practice in educational contexts.

## Supporting Focus

A small set of interests that have informed or complemented my core themes over time.

### <i class="fas fa-laptop-code fa-fw headingIcon" aria-hidden="true"></i>Human Factors of Software Engineering

This supporting focus explores human and organisational factors in software engineering practice, particularly in professional and industrial contexts. Research in this area examines requirements engineering, design practice, and decision-making processes, often investigating how engineers understand user needs, manage uncertainty, and respond to real-world constraints.

While much of this work has been grounded in digital health applications, the insights contribute to broader understanding of how software engineering methods and practices can be better designed to support cognition, collaboration, and professional judgement.

### <i class="fas fa-hands-helping fa-fw headingIcon" aria-hidden="true"></i>Community Health &amp; Civic Participation

This supporting focus reflects occasional and historical work on participatory approaches to digital health that engage citizens, communities, and public health stakeholders. Research in this area has included co-designing technologies and interventions with communities for health promotion, wellbeing, social inclusion, and civic engagement.

Work here explores how digital platforms can support community-based health initiatives, enable citizen participation in health decision-making, and address social determinants of health. Studies consider local contexts, community infrastructure, and participatory methods that ensure technologies are culturally appropriate, accessible, and workable for diverse populations.
