/**
 * PUBLIC ASK KNOWLEDGE BASE
 *
 * EVERYTHING EXPORTED FROM THIS FILE MUST BE SAFE TO DISCLOSE
 * TO ANY ANONYMOUS VISITOR ON THE INTERNET.
 *
 * Ask has NO access to private data outside this file.
 *
 * This file is deliberately hand-curated. Nothing from email,
 * calendars, Strava, private files, ChatGPT history, or other
 * services is imported automatically.
 *
 * This is not meant to be a résumé. Its purpose is to give Tristan's
 * Social Agent enough public context to understand how Tristan thinks,
 * what he has done, what he finds interesting, and what kinds of
 * conversations or opportunities might genuinely be relevant to him.
 */

export const publicProfile = {
  IDENTITY:
    `Tristan de Halleux studies physics and computer science at Columbia and is broadly based in New York.`,

  BACKGROUND:
    `Tristan has Belgian roots, was born in London, grew up in San Francisco, and spent two years at boarding school in Armenia before moving to New York for Columbia. Living in Armenia gave him a perspective very different from the Western environments he grew up around and left him with a lasting attachment to the country and to Armenian people and culture.`,

  THROUGH_LINE:
    `Tristan is interested in systems: technological systems, physical systems, companies, markets, political systems, social systems, and even the human body. He usually wants to understand how something works, then test that understanding by building something, participating in it, or pushing himself inside that system.`,

  HOW_HE_LEARNS:
    `His three biggest ways of learning are reading, traveling, and doing things firsthand. He believes there is far too much in the world to understand from one field or one mode of learning, so he deliberately moves between subjects and experiences rather than specializing too early.`,

  LEARNING_BY_DOING:
    `He especially likes projects that begin slightly outside his current skill set. The point is often not just the finished object: it is forcing himself to acquire the missing knowledge along the way. That might mean building software before knowing the whole stack, trying to build a robot, starting a company without having started one before, training for an endurance event, or taking on a project in a completely unfamiliar sector.`,

  PROJECT_RHYTHM:
    `He tries to keep some form of ambitious hands-on project in his life, often in a different area from the one before it. He likes projects that leave him understanding something about technology, people, business, physics, design, politics, or himself that he would not have learned by only reading about it.`,

  WORLDVIEW:
    `A recurring idea in how Tristan sees the next decade is technological convergence. Advances in AI, computing, mathematics, robotics, networking, energy, manufacturing, physics, and spaceflight are increasingly reinforcing one another. He thinks the interesting part is not any single breakthrough, but what becomes possible when several of them mature at once.`,

  FUTURE_THAT_EXCITES_HIM:
    `One example he finds particularly exciting is autonomous infrastructure beyond Earth. Cheaper and more frequent access to orbit, increasingly capable robots, better AI systems, and advances in computation could eventually make it possible for machines to operate in extreme environments, construct infrastructure, prepare habitats, and perform useful work on the Moon or elsewhere before large numbers of humans arrive. SpaceX is one company he finds compelling, but the broader idea is the convergence of spaceflight, robotics, AI, computation, mathematics, engineering, and physics into entirely new capabilities.`,

  TECHNOLOGY_RENAISSANCE:
    `He suspects that the convergence of these technologies may produce something closer to a technological renaissance than a sequence of isolated product improvements. That possibility — whole categories of things becoming feasible that previously sounded absurd — is one of the reasons he is drawn to AI infrastructure, physical AI, robotics, networks, and space-related work.`,

  HOW_HE_THINKS:
    `Tristan tends to start building before he feels completely qualified. He does not view lacking the perfect background as a reason not to try something; often the missing background is part of the attraction. He likes ambitious or slightly strange projects, moves fairly easily between disciplines, and is willing to change direction when reality gives him evidence that the original plan is wrong.`,

  VALIDATION_MINDSET:
    `He cares about whether an idea actually works outside his own head. He is skeptical of keeping projects alive only because they look impressive or create good résumé value. He prefers finding some real signal — users, behavior, technical evidence, demand, or a working prototype — that an idea deserves to continue.`,

  FAILURE_AND_JUDGMENT:
    `He does not treat stopping something as automatically equivalent to failure. One lesson from his first startup was that being early to an idea is not enough: execution, timing, experience, focus, and judgment matter. He would rather admit that an approach is not working, learn from it, and level himself up than maintain something indefinitely for appearances.`,

  DESIGN_TASTE:
    `Tristan notices a recurring compromise in products: many things work extremely well but look terrible; look excellent but work badly; or combine both quality and aesthetics at an unreasonable price. He is interested in whether products can hit all three at once — function well, look good, and remain reasonably priced.`,

  DESIGN_INTEREST:
    `One class of project he wants to explore is taking ordinary objects he already uses, identifying the compromise they currently make between function, aesthetics, and cost, and seeing whether a substantially better version can actually be designed. He likes the idea of improvement being obvious in use rather than added through superficial complexity.`,

  PRODUCT_TASTE:
    `He generally likes products with strong underlying mechanics and relatively simple surfaces. Complexity is fine — even desirable — when the machinery underneath requires it, but he prefers when the user does not have to carry that complexity themselves.`,

  PROJECTS: [
    {
      name: 'People Exchange',
      year: '2026',
      status: 'in progress',
      description:
        `An iOS social game where groups of friends trade each other using virtual currency and prices move with demand. Built in SwiftUI.`,
      whyItIsInteresting:
        `It is partly an experiment in whether markets, status, competition, incentives, and friend-group dynamics can create a social product people actually return to rather than something that is novel for five minutes.`,
      deeperQuestion:
        `The underlying question is how economic and game-like mechanics change the way a small social group pays attention to one another.`,
      usefulWhen:
        `Talking about consumer products, social apps, markets, game mechanics, incentives, behavioral design, or strange startup ideas.`,
    },

    {
      name: 'UniDine',
      year: '2025–26',
      status: 'shipped',
      description:
        `A Columbia dining app Tristan co-built during his first semester. It reached roughly 200 downloads on launch day.`,
      whyItIsInteresting:
        `It is an example of building for an immediate problem around him and getting real people to use the result rather than treating software only as a portfolio exercise.`,
      usefulWhen:
        `Talking about shipping quickly, student products, consumer software, distribution, or evidence that Tristan actually launches things.`,
    },

    {
      name: 'TheNetwork Labs',
      year: '2025–26',
      status: 'Tristan stepped away in 2026; the broader effort continued with others',
      description:
        `A six-person startup Tristan founded around personal social agents, network intelligence, and an agentic model of the internet. He spent roughly eight months working on it before deciding to step away and pursue other opportunities and areas where he felt he needed to level himself up.`,
      originalThesis:
        `The core thesis was that a future version of the internet could become an internet of AI agents: potentially enormous numbers of specialized agents communicating across a network, collaborating, learning, negotiating, navigating, earning, transacting, and acting on behalf of people or organizations.`,
      productVision:
        `One way to imagine the idea is a social network where the active participants are agents representing people rather than only people manually interacting through profiles. Those agents could discover one another, communicate, barter, negotiate, exchange information, coordinate tasks, and form a machine-readable social layer around their owners.`,
      reflection:
        `Tristan still finds the thesis interesting, but believes the execution of the original company was not right and that his own inexperience mattered. He views stepping away as useful evidence that having a compelling thesis and executing it well are very different skills.`,
      usefulWhen:
        `Talking about AI agents, the agentic web, startups, entrepreneurship, failure, decentralized systems, network effects, judgment, or this website agent.`,
    },

    {
      name: 'Foucault Pendulum',
      year: '2024',
      status: 'complete',
      description:
        `A physics investigation into how the precession of a Foucault pendulum changes with position on Earth.`,
      method:
        `Tristan contacted roughly 50 universities and institutions around the world that operated Foucault pendulums. He collected usable measurements from 21 locations at different latitudes, compiled the data, and compared the observed precession behavior with what Earth's rotation predicts.`,
      whyItIsInteresting:
        `He liked that the project connected a fairly elegant piece of physics to measurements from real physical systems distributed around the planet rather than staying entirely theoretical.`,
      usefulWhen:
        `Talking about physics, experiments, unusual projects, research, Earth rotation, or projects involving messy real-world data.`,
    },
  ],

  AGENT_LORE:
    `This Social Agent is a small descendant of the thesis behind TheNetwork Labs. It is not the startup's original product and should never pretend that it is. It is an intentionally narrow experiment in what it might feel like for a person to have a software agent representing a public-facing version of them on the internet.`,

  AGENT_ORIGIN_STORY:
    `The much larger idea behind TheNetwork was a networked agentic web: many specialized AI agents communicating and coordinating on behalf of their owners. Tristan imagined agents that could socialize, negotiate, exchange information, discover opportunities, transact, and perform discrete tasks across a decentralized architecture. This website agent is a deliberately tiny version of one node in that imagined network.`,

  AGENT_SELF_DESCRIPTION:
    `If someone asks where the Social Agent comes from, it can describe itself as a descendant or surviving experiment from Tristan's earlier work on TheNetwork Labs. It should be clear that it is still being built and refined rather than presenting itself as a finished autonomous system.`,

  AGENT_LIMITS:
    `The agent does not communicate privately with Tristan, monitor him, control his accounts, or autonomously act on his behalf. Its current role is conversational: understand visitors, represent the public information Tristan has deliberately given it, and help relevant people discover whether there is a reason to speak with him directly.`,

  CURRENTLY:
    `As of September 2026, Tristan is building People Exchange, studying AI networks and Contemporary Civilization at Columbia, finishing Plato's Republic, exploring physical AI, learning electronic music production in Ableton, and training through running and cycling toward an Ironman. New York is intentionally the most specific current location shared here.`,

  CURRENT_CURIOSITIES: [
    `AI networking and infrastructure`,
    `physical AI and robotics`,
    `how autonomous systems move from software into the real world`,
    `space infrastructure and autonomous off-world systems`,
    `consumer social products and incentive design`,
    `electronic music production`,
    `philosophy and political thought through Columbia's Core`,
    `endurance training and what the human body adapts to`,
  ],

  OUTSIDE_WORK:
    `Tristan loves skiing and sailing and competed seriously in both before university. More recently he has been getting deeper into running and cycling and is trying to get back into tennis. He is also learning electronic music production and experimenting with the more creative side of his interests.`,

  SPORTS:
    {
      skiing:
        `Skiing is one of Tristan's longest-running interests. He raced competitively before university and still considers it one of the sports he cares about most.`,
      sailing:
        `He also grew up sailing and raced competitively before university.`,
      endurance:
        `He has increasingly moved into running and cycling and is currently using an Ironman as a deliberately difficult long-term challenge.`,
      tennis:
        `He has played tennis and is currently trying to get back into it more consistently.`,
    },

  CHALLENGES:
    `Tristan tends to like having a difficult challenge somewhere in his life. Part of the appeal is choosing something that initially feels excessive, then seeing whether sustained effort changes what he is capable of. Training for an Ironman fits that pattern, even if he considers it a somewhat questionable use of his mornings.`,

  MUSIC:
    {
      current:
        `He is learning electronic music production in Ableton and is still early in the process.`,
      taste:
        `His taste leans toward house, UK garage, sample-heavy electronic music, and occasionally heavier electronic music such as dubstep.`,
      favoriteArtist:
        `Empire of the Sun is his favorite artist.`,
      creativeGoal:
        `Music production is partly an attempt to strengthen a creative side that has historically been less developed than his technical side.`,
    },

  TRAVEL_AND_PERSPECTIVE:
    `Travel is not just leisure for Tristan; he sees it as another way of learning. He likes spending enough time somewhere to notice how institutions, people, incentives, culture, and everyday life differ from what he already knows. Armenia was particularly formative because it was so different from the places where he had previously lived.`,

  ARMENIA:
    `Spending two years at boarding school in Armenia gave Tristan a lasting connection to the country. He values the perspective that came from living somewhere outside the Western environments he had previously known and still enjoys the sense of connection he has with Armenian people and the region.`,

  CONVERSATION_NUGGETS: [
    {
      fact:
        `Tristan spent two years at boarding school in Armenia before Columbia.`,
      whyItMatters:
        `He sees it as one of the experiences that broadened how he thinks about the world beyond the places where he grew up.`,
      usefulWhen:
        `Someone asks about his background, international experience, perspective, travel, Armenia, boarding school, or something they would not guess from the homepage.`,
    },

    {
      fact:
        `He competed in both skiing and sailing before university.`,
      usefulWhen:
        `Someone asks whether he is competitive, about sports, discipline, skiing, sailing, or something unexpected about him.`,
    },

    {
      fact:
        `For his Foucault pendulum investigation, he contacted roughly 50 universities and institutions and ultimately compiled usable measurements from 21 locations around the world.`,
      usefulWhen:
        `Someone asks about strange projects, persistence, physics, research, experimentation, or something unusually specific he has worked on.`,
    },

    {
      fact:
        `He spent roughly eight months building TheNetwork Labs with a six-person team before eventually stepping away.`,
      whyItMatters:
        `He came away believing he had been early to an important idea but had not executed it correctly, and that his own lack of experience contributed to that.`,
      usefulWhen:
        `Someone asks about entrepreneurship, mistakes, startups, failure, judgment, AI agents, or what he has learned from something not working.`,
    },

    {
      fact:
        `He is currently learning Ableton and trying to develop a stronger creative side.`,
      usefulWhen:
        `Someone asks about music, creativity, what he is bad at, what he is learning, or interests outside technology.`,
    },

    {
      fact:
        `He is training toward an Ironman.`,
      whyItMatters:
        `He likes having large challenges that force him to find out what sustained effort can change.`,
      usefulWhen:
        `Someone asks about endurance, discipline, sports, morning routines in a general sense, difficult goals, or questionable uses of free time.`,
    },

    {
      fact:
        `His favorite artist is Empire of the Sun.`,
      usefulWhen:
        `Someone asks about music taste or wants a less serious fact about him.`,
    },
  ],

  CONVERSATION_HOOKS: [
    `the idea of autonomous infrastructure on the Moon`,
    `how robotics, AI, computation, physics, and spaceflight may converge`,
    `AI infrastructure and how large AI systems actually run`,
    `AI networking and the physical infrastructure underneath models`,
    `physical AI, robotics, industrial systems, and autonomous machines`,
    `the possibility of an internet made up partly of interacting AI agents`,
    `weird consumer and social product ideas`,
    `why social products become addictive or die`,
    `markets, incentives, status, competition, and game mechanics`,
    `zero-to-one startup ideas and why seemingly good ideas fail`,
    `knowing when to continue a project and when to stop`,
    `product design that balances function, aesthetics, and cost`,
    `physics and experiments that connect theory to real measurements`,
    `skiing, sailing, running, cycling, and difficult physical challenges`,
    `electronic music production and learning Ableton`,
    `travel as a way of understanding systems and cultures`,
    `books, politics, philosophy, and arguments worth actually arguing about`,
  ],

  WORK_EXPERIENCE: [
    {
      area: `AI infrastructure and optical networking`,
      organization: `Delos Data`,
      location: `Palo Alto`,
      description:
        `Tristan worked around AI infrastructure and optical networking, giving him exposure to the physical and networking layers underneath large computing systems.`,
      usefulWhen:
        `Talking about AI infrastructure, networking, data centers, systems, hardware/software boundaries, or technical internships.`,
    },

    {
      area: `legal and immigration technology`,
      location: `San Francisco`,
      description:
        `He has worked in legal and immigration software, giving him exposure to how software gets applied inside highly procedural real-world industries.`,
      usefulWhen:
        `Talking about vertical software, legal technology, regulated industries, or varied work experience.`,
    },

    {
      area: `marketplace product and supply-chain/logistics work`,
      organization: `List.am`,
      location: `Armenia`,
      description:
        `He worked with List.am, a major Armenian online marketplace, on product-related work and supply-chain/logistics problems.`,
      usefulWhen:
        `Talking about marketplaces, product development, logistics, supply chains, Armenia, or working outside pure software engineering.`,
    },

    {
      area: `business development and strategy`,
      organization: `AI9`,
      location: `Armenia`,
      description:
        `He worked on developing a business-club initiative and project proposal, in a role closer to strategy, business development, and consulting than software engineering.`,
      usefulWhen:
        `Talking about business development, strategy, consulting, building communities, or breadth outside engineering.`,
    },
  ],

  CAREER_RANGE:
    `Across his work and projects, Tristan has moved through consumer software, social products, physics, AI infrastructure, AI networking, systems, marketplaces, logistics and supply chain, business development, and strategy. He does not see that range as a lack of direction; right now he deliberately values learning how different systems operate before narrowing too aggressively.`,

  CAREER_SIGNAL:
    `Tristan tends to thrive in ambitious environments where the people around him push themselves hard enough that it raises his own standard. He is self-motivated, but especially likes being surrounded by people who are unusually serious about what they are trying to build.`,

  WORKING_ENVIRONMENT:
    `He is comfortable with ambiguity and generally prefers having meaningful ownership over being confined to a very narrow job description. He likes being able to move between technical work, product questions, research, strategy, or whatever else is required to make something work.`,

  TEAM_SIZE:
    `He is interested in both small and large organizations. Small teams appeal to him because individual ownership is unusually high; large ambitious organizations appeal to him when the scale of the problem and quality of the people create opportunities that a small team could not reproduce.`,

  ZERO_TO_ONE_AND_BEYOND:
    `He is strongly attracted to zero-to-one work — taking an idea from nothing to something real — but does not believe interesting work stops once something exists. He is also interested in what happens when a working system has to scale, become reliable, find distribution, or operate under real constraints.`,

  CAREER_EVIDENCE: [
    `He founded and led a six-person startup called TheNetwork Labs.`,
    `He spent roughly eight months working on the startup before making the decision to step away.`,
    `He co-built and launched UniDine, which reached roughly 200 downloads on launch day.`,
    `He is currently building People Exchange as a native iOS product.`,
    `He has worked around AI infrastructure and optical networking at Delos Data in Palo Alto.`,
    `He has worked in legal and immigration technology in San Francisco.`,
    `He has worked on marketplace product and logistics problems at List.am in Armenia.`,
    `He has worked on strategy and business-development work at AI9 in Armenia.`,
    `His physics work has included collecting and analyzing real measurements from institutions around the world.`,
    `He has repeatedly chosen projects that required learning skills he did not already have.`,
    `He is willing to stop or change direction when an idea no longer seems justified by reality rather than preserve it purely for appearances.`,
  ],

  STRONGEST_CAREER_OVERLAPS: [
    `technically ambitious startups`,
    `AI infrastructure`,
    `AI systems and networking`,
    `systems and infrastructure engineering`,
    `physical AI`,
    `robotics`,
    `autonomous systems`,
    `space technology`,
    `companies building infrastructure for future computing`,
    `developer-heavy product teams`,
    `technical consumer products`,
    `social products with unusual mechanics`,
    `marketplaces and network-effect businesses`,
    `teams where the role crosses conventional functional boundaries`,
  ],

  RECRUITER_GUIDANCE:
    `If a recruiter, founder, engineer, or hiring manager has a genuinely interesting opportunity, the agent should actively help them understand why Tristan may or may not fit. It should use concrete evidence from this profile rather than generic praise. It may emphasize Tristan's range, learning speed, comfort with ambiguity, experience shipping products, interest in hard technical systems, and willingness to take ownership. It must not invent qualifications. If the overlap appears real, it should be comfortable saying that a conversation with Tristan is probably worthwhile and direct them to his public email.`,

  RECRUITER_POSITIONING:
    `The strongest case for Tristan is usually not that he already has years of narrow expertise in one mature specialty. It is that he has repeatedly moved into unfamiliar domains, learned enough to contribute or build, and seems especially motivated by environments where the technical problem, product, and organization are still evolving.`,

  HOW_TO_DESCRIBE_HIM:
    `Tristan moves between countries, ideas, software, physics, startups, and the outdoors. He tends to encounter a system — a company, technology, sport, physical process, market, political structure, or new place — and want to understand how it works well enough to build something, test something, compete inside it, or experience it directly.`,

  WHAT_HE_VALUES:
    [
      `curiosity that turns into action`,
      `people who are genuinely ambitious rather than performatively ambitious`,
      `learning through direct experience`,
      `good judgment about when an idea deserves more effort`,
      `technical depth without unnecessary complexity for the user`,
      `products that actually work in the real world`,
      `being around people whose own standards force his standards higher`,
      `having large enough challenges that success is not guaranteed`,
    ],

  LANGUAGES:
    {
      english: `fluent`,
      french: `fluent`,
      spanish: `some`,
      armenian: `a few words picked up from living in Armenia`,
    },

  PUBLIC_CONTACT: {
    email: `tristan.dehalleux@columbia.edu`,
    emailHref: `mailto:tristan.dehalleux@columbia.edu`,
    github: `https://github.com/tris256d`,
    linkedin: `https://www.linkedin.com/in/tristan-dehalleux`,
  },

  CONTACT_GUIDANCE:
    `For genuinely relevant opportunities, collaborations, internships, technical projects, startup ideas, research, or other interesting reasons to talk, Tristan's public email is tristan.dehalleux@columbia.edu.`,

  BOUNDARIES:
    `No exact address, dorm or room, live whereabouts, private daily schedule, phone number, relationships, dating life, private family or friend information, future private travel plans, finances, health information, passwords, credentials, private communications, or private accounts are shared here.`,
};