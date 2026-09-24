// Bandoneón Initiative. Facts, numbers and quotes are Inaiá's, from the
// current case on inasilva.com (EN and PT-BR). The voice follows the
// "tell it like a story" approach: first person, every headline states what
// happened or what was learned, outcomes up front, reflection at the end.
import type { CaseStudy } from './types';
import ia from '../../assets/cases/bandoneon/information-architecture.png';
import wireframes from '../../assets/cases/bandoneon/wireframes.png';
import designSystem from '../../assets/cases/bandoneon/design-system.png';
import uiSteps from '../../assets/cases/bandoneon/ui-recipe-steps.png';
import uiHome from '../../assets/cases/bandoneon/ui-onboarding-home.png';
import uiProfile from '../../assets/cases/bandoneon/ui-recipe-profile.png';

const l = (en: string, pt: string) => ({ en, pt });

export const bandoneon: CaseStudy = {
  slug: 'bandoneon-iniciative',
  tools: l('Figma, quantitative research, prototyping, design system', 'Figma, pesquisa quantitativa, prototipação, design system'),
  facts: [
    { label: l('Type', 'Tipo'), value: l('Academic', 'Acadêmico') },
    { label: l('Method', 'Método'), value: l('Double Diamond', 'Double Diamond') },
  ],
  sections: [
    {
      id: 'overview',
      label: l('overview', 'contexto'),
      title: l(
        'Bandoneón teaches cooking in person, on the road. The mission was to turn that into an app.',
        'A Bandoneón ensina culinária presencialmente, na estrada. A missão era transformar isso em um app.',
      ),
      blocks: [
        {
          type: 'text',
          body: [
            l(
              'The Bandoneón Initiative is a social project of itinerant culinary education for people in vulnerable situations. It all started with a briefing straight from its creator: take this in-person work and make it an accessible, practical and engaging digital product.',
              'A Iniciativa Bandoneón é um projeto social de educação gastronômica itinerante para pessoas em situação de vulnerabilidade. Tudo começou com um briefing direto com o seu criador: transformar esse trabalho presencial em um produto digital acessível, prático e engajante.',
            ),
            l(
              'I led the design over six months, from the first survey to a tested prototype, following the Double Diamond (British Design Council, 2005).',
              'Liderei o design ao longo de seis meses, da primeira pesquisa até um protótipo testado, seguindo o Double Diamond (British Design Council, 2005).',
            ),
          ],
        },
        {
          type: 'stats',
          items: [
            { value: l('End to end', 'Ponta a ponta'), label: l('Research → personas → information architecture → wireframes → UI → design system → prototype → test', 'Pesquisa → personas → arquitetura da informação → wireframes → UI → design system → protótipo → teste') },
            { value: l('A real client', 'Cliente real'), label: l('Briefing and final validation with the founder of the initiative', 'Briefing e validação final com o fundador da iniciativa') },
            { value: l('A system', 'Um sistema'), label: l('Typography, palette and components ready for the product to grow', 'Tipografia, paleta e componentes prontos para a evolução do produto') },
          ],
        },
        {
          type: 'steps',
          items: [
            { title: l('Discover', 'Descobrir'), body: l('Briefing · survey · quantitative research', 'Briefing · survey · pesquisa quantitativa') },
            { title: l('Define', 'Definir'), body: l('Personas · SMART requirements · information architecture', 'Personas · requisitos SMART · arquitetura da informação') },
            { title: l('Develop', 'Desenvolver'), body: l('Wireframes · design system · prototype', 'Wireframes · design system · protótipo') },
            { title: l('Deliver', 'Entregar'), body: l('Final UI · usability test', 'UI final · teste de usabilidade') },
          ],
        },
      ],
    },
    {
      id: 'research',
      label: l('research', 'pesquisa'),
      title: l(
        'The survey challenged our assumptions: people wanted short, visual recipes, and more than the basics.',
        'A pesquisa desafiou nossas suposições: as pessoas queriam receitas curtas e visuais, e mais do que o básico.',
      ),
      blocks: [
        {
          type: 'text',
          body: [
            l(
              'To understand who would actually use the app, we ran a quantitative survey with the target audience. The data showed behaviours and preferences we hadn’t expected.',
              'Para entender quem realmente usaria o app, conduzimos uma pesquisa quantitativa com o público-alvo. Os dados mostraram comportamentos e preferências que não esperávamos.',
            ),
          ],
        },
        {
          type: 'stats',
          items: [
            { value: l('62%', '62%'), label: l('prefer recipes with short videos and subtitles', 'preferem receitas com vídeos curtos e legendas') },
            { value: l('64%', '64%'), label: l('want to learn more than the basics', 'querem aprender mais do que o básico') },
          ],
        },
        {
          type: 'text',
          body: [
            l(
              'The apps respondents used most were social networks, which pointed to a need for interaction and a bit of dynamism in the product.',
              'Os apps mais usados pelos respondentes eram redes sociais, o que indicou a necessidade de interação e de alguma dinâmica no produto.',
            ),
          ],
        },
        {
          type: 'question',
          label: l('key finding', 'descoberta-chave'),
          text: l('The content had to be fast, visual and progressive.', 'O conteúdo precisava ser rápido, visual e progressivo.'),
        },
      ],
    },
    {
      id: 'define',
      label: l('define', 'definição'),
      title: l(
        'Three very different people had to feel the app was made for them.',
        'Três pessoas muito diferentes precisavam sentir que o app era para elas.',
      ),
      blocks: [
        {
          type: 'decisions',
          intro: l(
            'From the survey data we built three personas, one for each profile we found. The challenge was designing for all of them without compromising the experience of any.',
            'Com os dados da pesquisa, construímos três personas, uma para cada perfil identificado. O desafio era projetar para todas sem comprometer a experiência de nenhuma.',
          ),
          items: [
            { icon: 'person', title: l('Pedro, 20, streamer', 'Pedro, 20, streamer'), body: l('Wants basic autonomy in the kitchen and a healthier routine. Consumes everything through social media, has little time and prefers quick, visual content.', 'Quer autonomia básica na cozinha e uma rotina alimentar mais saudável. Consome tudo via redes sociais, tem tempo limitado e prefere conteúdo rápido e visual.') },
            { icon: 'person', title: l('Anna, 24, journalism student', 'Anna, 24, estudante de jornalismo'), body: l('An intense routine. Needs to find practical everyday recipes fast, and prepares them on weekends. Wants complete descriptions, without interruptions.', 'Rotina intensa. Precisa encontrar receitas práticas para o dia a dia rapidamente, e as prepara no fim de semana. Quer descrições completas, sem interrupções.') },
            { icon: 'person', title: l('Jackeline, 41, hotel manager', 'Jackeline, 41, gerente de hotel'), body: l('Cooks for the family in large quantities, with a focus on health. Wants to involve the kids and avoid waste.', 'Cozinha para a família em grandes quantidades, com foco em saúde. Quer envolver os filhos no processo e evitar desperdício.') },
          ],
        },
        {
          type: 'groups',
          intro: l(
            'To avoid ambiguity once we started designing, I organized the requirements into four dimensions and checked each against SMART criteria: specific, measurable, achievable, relevant and time-bound.',
            'Para evitar ambiguidade na hora de projetar, organizei os requisitos em quatro dimensões e avaliei cada um pelos critérios SMART: específico, mensurável, atingível, relevante e temporal.',
          ),
          items: [
            { title: l('Product goals', 'Metas do produto'), points: [l('Teach culinary techniques and terms', 'Ensinar técnicas e termos gastronômicos'), l('Encourage healthy eating and less waste', 'Incentivar alimentação saudável e redução de desperdício'), l('Organize recipes and the chef’s content', 'Organizar receitas e conteúdo do chef'), l('Spark culinary creativity', 'Estimular a criatividade culinária')] },
            { title: l('User needs', 'Necessidades do usuário'), points: [l('Learn to cook, step by step', 'Aprender a cozinhar com progressão'), l('Practical everyday recipes', 'Receitas práticas para o cotidiano'), l('Follow a healthy diet', 'Seguir uma dieta saudável'), l('Autonomy in the kitchen', 'Ter autonomia na cozinha'), l('Follow the initiative’s itinerary', 'Acompanhar o itinerário da iniciativa')] },
            { title: l('Content', 'Conteúdos'), points: [l('Recipes with text and illustrative images', 'Receitas com texto e imagens ilustrativas'), l('A personalized profile', 'Perfil de usuário personalizado'), l('The project and its news', 'Apresentação do projeto e novidades'), l('Feedback from users on their results', 'Feedback dos usuários sobre seus resultados')] },
            { title: l('Functional specs', 'Especificações funcionais'), points: [l('Save recipes in custom folders', 'Salvar receitas em pastas personalizadas'), l('Filter by difficulty (easy → hard)', 'Filtrar por dificuldade (fácil → difícil)'), l('Mark ingredients to buy', 'Marcar ingredientes a comprar'), l('Recipes with reader, sounds, timer and images', 'Receitas com leitor, sons, cronômetro e imagens')] },
          ],
        },
        {
          type: 'text',
          body: [
            l(
              'With the requirements set, we mapped the whole app, from onboarding to the profile, through the recipe, filtering, shopping-list and social flows.',
              'Com os requisitos definidos, mapeamos a estrutura completa do app, do onboarding à área de perfil, passando pelos fluxos de receita, filtragem, lista de compras e interação social.',
            ),
          ],
        },
        {
          type: 'figure',
          image: { src: ia, alt: l('The information architecture: sign up, login or continue without an account, then home, recipes with filters and social actions, news, and the profile with saved recipes and a shopping list.', 'A arquitetura da informação: cadastro, login ou continuar sem conta, depois home, receitas com filtros e ações sociais, notícias e o perfil com receitas salvas e lista de compras.') },
          caption: l('Information architecture: the complete structure of the app.', 'Arquitetura da informação: a estrutura completa do aplicativo.'),
        },
      ],
    },
    {
      id: 'develop',
      label: l('develop', 'desenvolvimento'),
      title: l(
        'I drew the flows on paper first, so the navigation could be judged without the UI in the way.',
        'Desenhei os fluxos em papel primeiro, para avaliar a navegação sem o peso da interface.',
      ),
      blocks: [
        {
          type: 'figure',
          image: { src: wireframes, alt: l('Six paper wireframes: sign-up, home with the recipe of the day, notifications, recipe categories, and a recipe screen with ingredients and comments.', 'Seis wireframes em papel: cadastro, home com a receita do dia, notificações, categorias de receitas e a tela de receita com ingredientes e comentários.') },
          caption: l('Paper wireframes: exploring the flows before any visual decision.', 'Wireframes em papel: exploração dos fluxos antes de qualquer decisão visual.'),
        },
        {
          type: 'text',
          body: [
            l(
              'The wireframes covered the priority flows: creating an account, the home with the recipe of the day, browsing by category, the recipe screen and notifications. The bottom tab bar with four sections (Home, Recipes, News, Profile) was decided here and survived all the way to the final version.',
              'Os wireframes cobriram os fluxos prioritários: criação de conta, home com a receita do dia, navegação por categorias, tela de receita e notificações. A barra de abas inferior com quatro seções (Home, Receitas, Notícias, Perfil) foi definida nesta etapa e mantida até a versão final.',
            ),
            l(
              'Then I built the design system in Figma from the initiative’s own identity: green and wine as primary colours, Nunito as the main typeface, and rounded shapes.',
              'Depois construí o design system no Figma a partir da identidade visual da própria iniciativa: verde e vinho como cores primárias, Nunito como tipografia principal e formatos arredondados.',
            ),
          ],
        },
        {
          type: 'swatches',
          label: l('colour palette', 'paleta de cores'),
          colors: ['#829d24', '#aace26', '#dfdd21', '#ce1d20', '#7a211e'],
        },
        {
          type: 'groups',
          items: [
            { title: l('Typography · Nunito', 'Tipografia · Nunito'), points: [l('Black 900: titles', 'Black 900: títulos'), l('Bold 700: highlights', 'Bold 700: destaques'), l('SemiBold 600: subtitles', 'SemiBold 600: subtítulos'), l('Regular 400: body', 'Regular 400: corpo'), l('Line height 1.5×', 'Entrelinha 1.5×')] },
            { title: l('Components', 'Componentes'), points: [l('Medium-stroke icons, no fill', 'Iconografia com traço médio, sem preenchimento'), l('Rounded cards and buttons', 'Cards e botões arredondados'), l('Reusable: recipes, categories, notifications, profile', 'Reutilizáveis: receitas, categorias, notificações, perfil')] },
          ],
        },
        {
          type: 'figure',
          image: { src: designSystem, alt: l('The Bandoneón design system in Figma: colour, typography, elevation, radius, layout metrics, components and an accessibility audit.', 'O design system do Bandoneón no Figma: cor, tipografia, elevação, raio, métricas de layout, componentes e uma auditoria de acessibilidade.') },
          caption: l('Design system: palette, typography and components.', 'Design system: paleta, tipografia e componentes.'),
        },
      ],
    },
    {
      id: 'deliver',
      label: l('deliver', 'entrega'),
      title: l(
        'We tested it with the initiative’s creator, and he recognized the project’s mission in it.',
        'Testamos com o criador da iniciativa, e ele reconheceu no produto a missão do projeto.',
      ),
      blocks: [
        {
          type: 'text',
          body: [
            l(
              'With the system in place, I designed the final screens, applying every component decision and colour token consistently. The result was a navigable prototype.',
              'Com o sistema estabelecido, desenhei as telas finais aplicando cada decisão de componente e token de cor de forma consistente. O resultado foi um protótipo navegável.',
            ),
          ],
        },
        {
          type: 'figure',
          image: { src: uiHome, alt: l('Final screens: login, interest-based onboarding, notifications, news, home with the recipe of the day, categories and a category list.', 'Telas finais: login, onboarding por interesses, notificações, notícias, home com a receita do dia, categorias e uma lista de categoria.') },
          caption: l('Onboarding by interest, the home with the recipe of the day, news and categories.', 'Onboarding por interesse, a home com a receita do dia, notícias e categorias.'),
        },
        {
          type: 'figure',
          image: { src: uiSteps, alt: l('A recipe in step-by-step mode: ingredients, numbered steps with illustrations, a timer, the finished dish and comments from other cooks.', 'Uma receita no modo passo a passo: ingredientes, etapas numeradas com ilustrações, temporizador, o prato pronto e comentários de outras pessoas.') },
          caption: l('Step-by-step mode with a timer.', 'Modo passo a passo com temporizador.'),
        },
        {
          type: 'figure',
          image: { src: uiProfile, alt: l('The recipe screen with checkable ingredients, the profile, saved recipes in folders, liked recipes and the shopping list.', 'A tela de receita com ingredientes marcáveis, o perfil, receitas salvas em pastas, receitas curtidas e a lista de compras.') },
          caption: l('Recipes, the profile, saved folders and the shopping list.', 'Receitas, o perfil, pastas salvas e a lista de compras.'),
        },
        {
          type: 'list',
          intro: l(
            'We tested the prototype with classmates, professors and the creator of the initiative. What they praised most:',
            'Testamos o protótipo com colegas, professores e o criador da iniciativa. Os pontos mais elogiados:',
          ),
          items: [
            l('The step-by-step mode with a timer, answering the preference for guided content from the research', 'O modo passo a passo com temporizador, que responde à preferência por conteúdo guiado identificada na pesquisa'),
            l('Categories with difficulty filters, serving both beginners and those who want to go further', 'A organização por categorias com filtros de dificuldade, que atende tanto o iniciante quanto quem quer avançar'),
            l('Onboarding by interest, personalizing the experience from the first visit', 'O onboarding por interesse, que personaliza a experiência desde o primeiro acesso'),
          ],
        },
        {
          type: 'text',
          body: [
            l(
              'The creator of the initiative recognized in the product a faithful representation of the project’s mission.',
              'O criador da iniciativa reconheceu no produto uma representação fiel da missão do projeto.',
            ),
          ],
        },
      ],
    },
    {
      id: 'reflection',
      label: l('reflection', 'reflexão'),
      title: l('UX begins long before Figma is opened.', 'UX começa muito antes do Figma ser aberto.'),
      blocks: [
        {
          type: 'text',
          body: [
            l(
              'This was the project where I learned it. The quality of the final product was directly proportional to the quality of the questions asked at the start: in the research, in the briefing, in defining the requirements.',
              'Foi neste projeto que aprendi isso. A qualidade do produto final foi diretamente proporcional à qualidade das perguntas feitas no início: na pesquisa, no briefing, na definição de requisitos.',
            ),
          ],
        },
        {
          type: 'question',
          label: l('what I learned', 'o que aprendi'),
          text: l('Each screen existed because there was a real need behind it.', 'Cada tela existia porque havia uma necessidade real por trás dela.'),
        },
      ],
    },
  ],
};
