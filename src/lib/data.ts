export interface ISectionItem {
  name: string;
  description: string;
  link: string;
  sectionName?: string;
}
export interface IData {
  sectionName: string;
  items: ISectionItem[];
}

export const SiteData: IData[] = [
  {
    sectionName: "Libs and Components",
    items: [
      {
        name: "21st.dev",
        description:
          "Open source npm for shadcn/ui components. Also: Dribble for design engineers. Install UI components via shadcn CLI, or publish your own.",
        link: "https://21st.dev/",
      },
      {
        name: "aceternity-ui",
        description:
          "Copy paste the most trending react components without having to worry about styling and animations.",
        link: "https://ui.aceternity.com/",
      },
      {
        name: "assistant-ui",
        description: "React Components for AI Chat.",
        link: "https://github.com/Yonom/assistant-ui",
      },
      {
        name: "autocomplete-select-shadcn-ui",
        description:
          "Autocomplete component built with shadcn/ui and Fancy Multi Select by Maximilian Kaske.",
        link: "https://www.armand-salle.fr/post/autocomplete-select-shadcn-ui",
      },
      {
        name: "auto-form",
        description:
          "A React component that automatically creates a shadcn/ui form based on a zod schema.",
        link: "https://github.com/vantezzen/auto-form",
      },
      {
        name: "async-select",
        description:
          "Async Select component built with shadcn/ui with debounce search.",
        link: "https://async.rdsx.dev",
      },
      {
        name: "bundui",
        description:
          "A collection of reusable animated components built with Tailwind CSS and Framer Motion.",
        link: "https://bundui.io",
      },
      {
        name: "calendar",
        description: "React/shadcn full calendar like Google Calendar",
        link: "https://github.com/charlietlamb/calendar",
      },
      {
        name: "capture-photo",
        description:
          "Browser-based React component for camera functionalities in web applications.",
        link: "https://github.com/UretzkyZvi/capture-photo",
      },
      {
        name: "clerk-elements",
        description:
          "Composable components for building custom UIs on top of Clerk's APIs.",
        link: "https://clerk.com/docs/elements/examples/shadcn-ui",
      },
      {
        name: "clerk-shadcn-theme",
        description:
          "Synchronize Clerk SignIn/SignUp components with shadcn/ui styles.",
        link: "https://github.com/stormynight9/clerk-shadcn-theme",
      },
      {
        name: "confirm-dialog",
        description: "A confirm dialog component built with shadcn/ui.",
        link: "https://github.com/Aslam97/react-confirm-dialog",
      },
      {
        name: "country-state-dropdown",
        description:
          "Component built with Nextjs, Tailwindcss, shadcn/ui & Zustand.",
        link: "https://github.com/Jayprecode/country-state-dropdown",
      },
      {
        name: "cult-ui",
        description: "Curated set of animated shadcn-style React components.",
        link: "https://www.cult-ui.com/",
      },
      {
        name: "credenza",
        description: "Ready-made responsive modal component for shadcn/ui.",
        link: "https://github.com/redpangilinan/credenza",
      },
      {
        name: "crypto-charts",
        description: "Crypto charts made for shadcn/ui using PythNetwork.",
        link: "https://github.com/jstnw10/crypto-charts",
      },
      {
        name: "date-range-picker-for-shadcn",
        description:
          "Multi-month views, text entry, preset ranges, responsive design, and date range comparisons.",
        link: "https://github.com/johnpolacek/date-range-picker-for-shadcn",
      },
      {
        name: "date-time-picker-shadcn",
        description: "Datetime Picker for shadNext Project.",
        link: "https://shadcn-datetime-picker.vercel.app",
      },
      {
        name: "datetime-picker",
        description:
          "Datetime picker with timezone support, min/max dates, and month/year selection.",
        link: "https://shadcn-datetime-picker-xi.vercel.app",
      },
      {
        name: "dialog-stack",
        description: "Composable stacked dialogs for shadcn/ui",
        link: "https://github.com/haydenbleasel/dialog-stack",
      },
      {
        name: "dnd-dashboard",
        description:
          "Dashboard with drop-to-swap layouts using Next.js, shadcn/ui, and swapy.",
        link: "https://github.com/olliethedev/dnd-dashboard",
      },
      {
        name: "downshift-shadcn-combobox",
        description:
          "Combobox/autocomplete component built with shadcn/ui and Downshift.",
        link: "https://github.com/TheOmer77/downshift-shadcn-combobox",
      },
      {
        name: "drag-to-resize-sidebar",
        description:
          "Extended shadcn/ui sidebar component with persisted state drag-to-resize functionality.",
        link: "https://github.com/lumpinif/drag-to-resize-sidebar",
      },
      {
        name: "druid/ui",
        description:
          "Intercom inspired AI chatbot and UI components built on shadcn/ui.",
        link: "https://druidui.com/",
      },
      {
        name: "echo-editor",
        description:
          "Modern WYSIWYG rich-text editor based on tiptap and shadcn/ui.",
        link: "https://github.com/Seedsa/echo-editor",
      },
      {
        name: "edil-ozi",
        description: "React components with Gsap, framer motion, and tailwind.",
        link: "https://edilozi.pro/",
      },
      {
        name: "emblor",
        description:
          "Customizable, accessible tag input component with shadcn/ui.",
        link: "https://github.com/JaleelB/emblor",
      },
      {
        name: "enhanced-button",
        description: "Enhanced version of the default shadcn-button component.",
        link: "https://github.com/jakobhoeg/enhanced-button",
      },
      {
        name: "extend-ui",
        description:
          "Reusable components built on shadcn/ui for web applications.",
        link: "https://www.extend-ui.com/",
      },
      {
        name: "fancy-area",
        description:
          "Textarea with @mention support inspired by GitHub's PR comment section.",
        link: "https://craft.mxkaske.dev/post/fancy-area",
      },
      {
        name: "fancy-box",
        description:
          "GitHub PR label selector-inspired Combobox with radix-ui components.",
        link: "https://craft.mxkaske.dev/post/fancy-box",
      },
      {
        name: "fancy-multi-select",
        description:
          "Multi Select Component inspired by campsite.design and cal.com.",
        link: "https://craft.mxkaske.dev/post/fancy-multi-select",
      },
      {
        name: "fancy-switch",
        description: "Fancy switch component built with shadcn/ui.",
        link: "https://github.com/Aslam97/react-fancy-switch",
      },
      {
        name: "farmui",
        description:
          "Styled and animated component library with npm package support.",
        link: "https://farmui.com",
      },
      {
        name: "file-uploader",
        description: "File uploader with shadcn/ui and react-dropzone.",
        link: "https://github.com/sadmann7/file-uploader",
      },
      {
        name: "file-vault",
        description: "File upload component for React.",
        link: "https://github.com/ManishBisht777/file-vault",
      },
      {
        name: "floating-dragable-card",
        description: "Dragable and resizable card using shadcn/ui elements.",
        link: "https://github.com/nishansanjuka/react-drag-card",
      },
      {
        name: "fusion-ui",
        description: "Library combining shadcn/ui and MagicUI.",
        link: "https://github.com/nyxb-ui/ui",
      },
      {
        name: "gluestack-ui",
        description: "React & React Native Components with Tailwind CSS.",
        link: "https://gluestack.io",
      },
      {
        name: "ibelick/background-snippet",
        description: "Ready to use collection of modern background snippets.",
        link: "https://bg.ibelick.com/",
      },
      {
        name: "image-upload-shadcn",
        description: "Image upload component.",
        link: "https://github.com/kushagrasarathe/image-upload-shadcn",
      },
      {
        name: "indie-ui",
        description: "UI components with variants.",
        link: "https://github.com/Ali-Hussein-dev/indie-ui",
      },
      {
        name: "inspira-ui",
        description: "UI components for animated interfaces in Vue/NuxtJS.",
        link: "https://inspira-ui.com/",
      },
      {
        name: "kokonut-ui",
        description: "Free Modern and Customizable components for Next.js.",
        link: "https://kokonut.dev/",
      },
      {
        name: "launch-ui",
        description:
          "Landing page components with React, Shadcn/ui and Tailwind.",
        link: "https://www.launchuicomponents.com/",
      },
      {
        name: "lingua-time",
        description: "Smart datetime picker with natural language input.",
        link: "https://github.com/nainglinnkhant/lingua-time",
      },
      {
        name: "lukacho-ui",
        description: "Next Generation UI Components.",
        link: "https://ui.lukacho.com/components",
      },
      {
        name: "manfromexistence-ui",
        description: "Components to build beautiful designs.",
        link: "https://github.com/manfromexistence/ui",
      },
      {
        name: "magicui",
        description:
          "React components for landing pages with tailwindcss + framer motion.",
        link: "https://magicui.design",
      },
      {
        name: "maily.to",
        description: "Notion-like powerful email editor.",
        link: "https://github.com/arikchakma/maily.to",
      },
      {
        name: "minimal-tiptap",
        description: "Minimal WYSIWYG editor with shadcn/ui and tiptap.",
        link: "https://github.com/Aslam97/shadcn-minimal-tiptap",
      },
      {
        name: "mixcnui",
        description: "Collection of animated components for Nextjs.",
        link: "https://github.com/taqui-786/mixcnui",
      },
      {
        name: "multi-selection",
        description: "Managing multi-selection functionality with highlighter.",
        link: "https://github.com/sherifawad/multi-selection-with-add-remove",
      },
      {
        name: "mynaui",
        description: "TailwindCSS and shadcn/ui UI Kit for Figma and React.",
        link: "https://mynaui.com/",
      },
      {
        name: "neobrutalism-components",
        description:
          "Neobrutalism-styled Tailwind React and shadcn/ui components.",
        link: "https://github.com/ekmas/neobrutalism-components",
      },
      {
        name: "nextjs-components",
        description: "Next.js components with TypeScript and shadcn/ui.",
        link: "https://components.bridger.to/",
      },
      {
        name: "nextjs-dnd",
        description: "Sortable Drag and Drop with Next.js and dnd-kit.",
        link: "https://github.com/sujjeee/nextjs-dnd",
      },
      {
        name: "nextjs-link-pagination",
        description: "Pagination using Nextjs Links and search params.",
        link: "https://shadcn-next-link-pagination.vercel.app",
      },
      {
        name: "next-shadcn-dashboard-starter",
        description: "Admin Dashboard Starter with Nextjs 14 and Shadcn UI.",
        link: "https://github.com/Kiranism/next-shadcn-dashboard-starter",
      },
      {
        name: "next-stepper",
        description: "Dynamic multi-step form with Next.js and zustand.",
        link: "https://github.com/ebulku/next-stepper",
      },
      {
        name: "novel",
        description:
          "Notion-style WYSIWYG editor with AI-powered autocompletion.",
        link: "https://github.com/steven-tey/novel",
      },
      {
        name: "number-flow",
        description: "React component for number transitions and formatting.",
        link: "https://number-flow.barvian.me/",
      },
      {
        name: "origin-ui",
        description: "Beautiful UI components with Tailwind CSS and Next.js.",
        link: "https://originui.com/",
      },
      {
        name: "password-input",
        description: "shadcn/ui custom password input.",
        link: "https://gist.github.com/mjbalcueva/b21f39a8787e558d4c536bf68e267398",
      },
      {
        name: "payment-gateways",
        description: "Integration of payment gateways with Next.js 14.",
        link: "https://github.com/PremPrakashCodes/payment-gateways",
      },
      {
        name: "phone-input-shadcn-ui",
        description: "Custom phone number component with shadcn/ui.",
        link: "https://www.armand-salle.fr/post/phone-input-shadcn-ui",
      },
      {
        name: "planner",
        description: "Adaptable scheduling component for React.",
        link: "https://github.com/UretzkyZvi/planner",
      },
      {
        name: "plate",
        description: "AI-powered rich-text editor.",
        link: "https://github.com/udecode/plate",
      },
      {
        name: "plate-select-editor",
        description: "Rich multi-select editor.",
        link: "https://platejs.org/docs/multi-select",
      },
      {
        name: "pqoqubbw",
        description: "Open-source animated icons collection.",
        link: "https://icons.pqoqubbw.dev/",
      },
      {
        name: "pricing-page-shadcn",
        description: "Customizable pricing page with Next.js 14.",
        link: "https://github.com/m4nute/pricing-page-shadcn",
      },
      {
        name: "progress-button",
        description: "Extended button component with progress UX.",
        link: "https://github.com/tomredman/ProgressButton",
      },
      {
        name: "react-dnd-kit-tailwind-shadcn-ui",
        description: "Accessible kanban board with dnd-kit.",
        link: "https://github.com/Georgegriff/react-dnd-kit-tailwind-shadcn-ui",
      },
      {
        name: "react-highlight-popover",
        description: "Headless component for text selection popovers.",
        link: "https://react-highlight-popover.omsimos.com",
      },
      {
        name: "react-pdf-flipbook-viewer",
        description: "PDF flipbook viewer with zoom and fullscreen.",
        link: "https://github.com/mohitkumawat310/react-pdf-flipbook-viewer",
      },
      {
        name: "react-select",
        description: "React-select library with shadcn styling.",
        link: "https://gist.github.com/ilkou/7bf2dbd42a7faf70053b43034fc4b5a4",
      },
      {
        name: "recursive-dnd-kanban-board",
        description: "Recursive drag and drop kanban board.",
        link: "https://github.com/mehrdadrafiee/recursive-dnd-kanban-board",
      },
      {
        name: "roadmap-ui",
        description: "Components for interactive roadmaps.",
        link: "https://github.com/haydenbleasel/roadmap-ui",
      },
      {
        name: "search-address",
        description: "Interactive address search using OpenStreetMap.",
        link: "https://github.com/UretzkyZvi/search-address",
      },
      {
        name: "shadcn-address-autocomplete",
        description: "Address autocomplete with Google Places API.",
        link: "https://github.com/NiazMorshed2007/shadcn-address-autocomplete",
      },
      {
        name: "shadcn-admin",
        description: "Admin Dashboard UI with shadcn/ui and Vite.",
        link: "https://github.com/satnaing/shadcn-admin",
      },
      {
        name: "shadcn-blocks",
        description: "Official pre-made customizable components.",
        link: "https://ui.shadcn.com/blocks",
      },
      {
        name: "shadcn-cal",
        description: "Cal.com monthly calendar replica with shadcn/ui.",
        link: "https://shadcn-cal-com.vercel.app/?date=2024-04-29",
      },
      {
        name: "shadcn-calendar-heatmap",
        description: "Modern calendar heatmap alternative.",
        link: "https://shadcn-calendar-heatmap.vercel.app/",
      },
      {
        name: "shadcn-calendar-component",
        description: "Calendar date picker component.",
        link: "https://github.com/sersavan/shadcn-calendar-component",
      },
      {
        name: "shadcn-chat",
        description: "Customizable chat component.",
        link: "https://github.com/jakobhoeg/shadcn-chat",
      },
      {
        name: "shadcn-carousel-testimonials",
        description: "Carousel Testimonials component.",
        link: "https://github.com/johanguse/shadcn-carousel-testimonials",
      },
      {
        name: "shadcn-chatbot-kit",
        description: "Customizable chatbot components.",
        link: "https://shadcn-chatbot-kit.vercel.app/",
      },
      {
        name: "shadcn-color-picker",
        description: "Color picker with react-color.",
        link: "https://shadcn-color-picker.vercel.app/",
      },
      {
        name: "shadcn-cookie-consent",
        description: "Customizable cookie consent component.",
        link: "https://github.com/r2hu1/shadcn-cookie-consent",
      },
      {
        name: "shadcn-country-dropdown",
        description: "ISO 3166 country selector dropdown.",
        link: "https://shadcn-country-dropdown.vercel.app/",
      },
      {
        name: "shadcn-data-table-advanced-col-opions",
        description: "DataTable with column resizing.",
        link: "https://github.com/danielagg/shadcn-data-table-advanced-col-opions",
      },
      {
        name: "shadcn-date-picker",
        description: "Advanced date picker with various features.",
        link: "https://date-picker.luca-felix.com",
      },
      {
        name: "shadcn-drag-table",
        description: "Drag-and-drop table component.",
        link: "https://github.com/zenoncao/shadcn-drag-table",
      },
      {
        name: "shadcn-dropzone",
        description:
          "File upload component using React-Dropzone, built with accessibility in mind.",
        link: "https://github.com/janglad/shadcn-dropzone",
      },
      {
        name: "shadcn-editor",
        description: "Lexical editor with shadcn theme.",
        link: "https://github.com/htmujahid/shadcn-editor",
      },
      {
        name: "shadcn-extends",
        description: "Collection of shadcn/ui components.",
        link: "https://github.com/lucioew28/extends",
      },
      {
        name: "shadcn-extension",
        description: "Open-source component collection.",
        link: "https://github.com/BelkacemYerfa/shadcn-extension",
      },
      {
        name: "shadcn-image-cropper",
        description: "Image cropper with react-image-crop.",
        link: "https://github.com/sujjeee/shadcn-image-cropper",
      },
      {
        name: "shadcn-linear-combobox",
        description: "Linear-style task priority combobox.",
        link: "https://github.com/damianricobelli/shadcn-linear-combobox",
      },
      {
        name: "shadcn-multi-select-component",
        description: "Multi-select component.",
        link: "https://github.com/sersavan/shadcn-multi-select-component",
      },
      {
        name: "shadcn-number-scrubber",
        description: "Draggable numeric input component.",
        link: "https://github.com/camwebby/shadcn-react-number-scrubber",
      },
      {
        name: "shadcn-phone-input-2",
        description: "Phone input with libphonenumber-js.",
        link: "https://github.com/damianricobelli/shadcn-phone-input",
      },
      {
        name: "shadcn-phone-input",
        description: "Phone input with country validation.",
        link: "https://github.com/omeralpi/shadcn-phone-input",
      },
      {
        name: "shadcn-pricing-page",
        description: "Responsive pricing component with toggles.",
        link: "https://github.com/aymanch-03/shadcn-pricing-page",
      },
      {
        name: "shadcn-spinner",
        description: "Spinner component.",
        link: "https://github.com/allipiopereira/shadcn-spinner",
      },
      {
        name: "shadcn-stepper",
        description: "Complete stepper component.",
        link: "https://github.com/damianricobelli/shadcn-stepper",
      },
      {
        name: "shadcn-table-maker",
        description: "Tool for creating dynamic tables.",
        link: "https://shadcn-table-maker.vercel.app/",
      },
      {
        name: "shadcn-table-v2",
        description: "Table with server-side features.",
        link: "https://github.com/sadmann7/shadcn-table",
      },
      {
        name: "shadcn-timeline",
        description: "Customizable timeline component.",
        link: "https://github.com/timDeHof/shadcn-timeline",
      },
      {
        name: "shadcn-timeline-2",
        description: "Alternative timeline component.",
        link: "https://timeline.rilcy.app",
      },
      {
        name: "shadcn-tiptap",
        description: "Custom Tiptap editor extensions.",
        link: "https://github.com/NiazMorshed2007/shadcn-tiptap",
      },
      {
        name: "shadcn-tree-view",
        description: "Hierarchical data component.",
        link: "https://github.com/mrlightful/shadcn-tree-view",
      },
      {
        name: "shadcn-ui-blocks",
        description: "Collection of responsive UI blocks.",
        link: "https://shadcn-ui-blocks.vercel.app/",
      },
      {
        name: "shadcn-ui-expansions",
        description: "Additional useful components.",
        link: "https://github.com/hsuanyi-chou/shadcn-ui-expansions",
      },
      {
        name: "shadcn-ui-sidebar",
        description: "Retractable responsive sidebar.",
        link: "https://github.com/salimi-my/shadcn-ui-sidebar",
      },
      {
        name: "shadcn-ui-templates",
        description: "Free & Premium templates collection.",
        link: "https://shadcnui-templates.com",
      },
      {
        name: "shaduxe-ui",
        description: "Component variants for shadcn/ui.",
        link: "https://ui.shaduxe.com",
      },
      {
        name: "simple-ai",
        description: "Components and blocks to easily build AI apps",
        link: "https://simple-ai.dev",
      },
      {
        name: "simplekit",
        description: "Wallet and account component for Wagmi.",
        link: "https://github.com/vaunblu/SimpleKit",
      },
      {
        name: "solanauth",
        description: "Solana wallet authentication modal.",
        link: "https://solanauth.vercel.app/",
      },
      {
        name: "sortable",
        description: "Sortable component with dnd-kit.",
        link: "https://github.com/sadmann7/sortable",
      },
      {
        name: "spectrum-ui",
        description: "Collection using Aceternity UI Magic UI.",
        link: "https://github.com/arihantcodes/spectrum-ui",
      },
      {
        name: "stocks",
        description: "Stock Picker with Next.js charts.",
        link: "https://github.com/aryanvichare/stocks",
      },
      {
        name: "stunning-ui",
        description: "Interactive Tailwind components for Vue.",
        link: "https://stunningui.design",
      },
      {
        name: "supabase-shadcn-database-example",
        description: "supabase + shadcn/ui datatable",
        link: "https://github.com/thisisfel1x/supabase-shadcn-database-example",
      },
      {
        name: "supercharged-shadcn-components",
        description: "Type-safe form components collection.",
        link: "https://github.com/slickwit/supercharged-shadcn-components",
      },
      {
        name: "time-picker",
        description: "Simple TimePicker component.",
        link: "https://github.com/openstatusHQ/time-picker",
      },
      {
        name: "tremor-raw",
        description: "Components for charts and dashboards.",
        link: "https://github.com/tremorlabs/tremor-raw",
      },
      {
        name: "twblocks",
        description: "Website blocks based on shadcn & Radix.",
        link: "https://github.com/tommyjepsen/twblocks",
      },
      {
        name: "tweet-to-code",
        description: "Twitter design recreations as code.",
        link: "https://tweet-to-code.vercel.app/",
      },
      {
        name: "ui-beats",
        description: "Animated React Components collection.",
        link: "https://uibeats.com",
      },
      {
        name: "uixmat/onborda",
        description: "Product tour for Next.js applications.",
        link: "https://github.com/uixmat/onborda",
      },
      {
        name: "vaul",
        description: "Drawer component for React.",
        link: "https://vaul.emilkowal.ski/",
      },
      {
        name: "zoom-charts",
        description: "Zoomable Charts with shadcn/ui.",
        link: "<https://github.com/shelwinsunga/zoom-chart-demo>",
      },
    ],
  },
  {
    sectionName: "Plugins and Extensions",
    items: [
      {
        name: "chat-with-youtube",
        description:
          "A chrome extension is designed to give you the ability to efficiently summarize videos, easily search for specific parts, and enjoy additional useful features.",
        link: "https://chat-with-youtube.vercel.app/ ",
      },
      {
        name: "designgui",
        description:
          "A Chrome Browser Extension for managing colors in CSS Variables.",
        link: "https://www.designgui.io/",
      },
      {
        name: "raycast-shadcn",
        description:
          "Raycast extension to Browse shadcn/ui documentation, components, and examples.",
        link: "https://www.raycast.com/luisFilipePT/shadcn-ui",
      },
      {
        name: "shadcn-hsl-preview",
        description: "shadcn HSL Preview extension for Visual Studio Code.",
        link: "https://marketplace.visualstudio.com/items?itemName=dexxiez.shadcn-color-preview",
      },
      {
        name: "shadcn-ui",
        description: "Add components from shadcn/ui directly from VS Code.",
        link: "https://marketplace.visualstudio.com/items?itemName=SuhelMakkad.shadcn-ui",
      },
      {
        name: "shadcn/ui Components Manager",
        description:
          "A plugin for Jetbrain products. It allows you to manage your shadcn/ui components across Svelte, React, Vue, and Solid frameworks with this plugin. Simplify tasks like adding, removing, and updating components.",
        link: "https://plugins.jetbrains.com/plugin/23479-shadcn-ui-components-manager ",
      },
      {
        name: "vscode-shadcn-svelte",
        description:
          "VS Code extension for shadcn/ui components in Svelte projects.",
        link: "https://marketplace.visualstudio.com/items?itemName=Selemondev.vscode-shadcn-svelte&ssr=false#overview",
      },
      {
        name: "vscode-shadcn-ui-snippets",
        description:
          "Easily import and use shadcn-ui components with ease using snippets within VSCode. Just type cn or shadcn in your jsx/tsx file and you will get a list of all the components to choose from.",
        link: "https://marketplace.visualstudio.com/items?itemName=VeroXyle.shadcn-ui-snippets  ",
      },
      {
        name: "vscode-shadcn-vue",
        description:
          "Extension for integrating shadcn/ui components into Vue.js projects.",
        link: "https://marketplace.visualstudio.com/items?itemName=Selemondev.vscode-shadcn-vue",
      },
    ],
  },
  {
    sectionName: "Colors and Customizations",
    items: [
      {
        name: "10000+Themes for shadcn/ui",
        description: "10000+ Themes for shadcn/ui.",
        link: "https://ui.jln.dev/",
      },
      {
        name: "dizzy",
        description:
          "Bootstrap a new Next or Vite project with shadcn/ui. Customize font, icons, colors, spacing, radii, and shadows.",
        link: "https://dizzy.systems",
      },
      {
        name: "ewgenius/ui",
        description:
          "Create custom themes for shadcn/ui effortlessly using vibrant palettes from Radix Colors.",
        link: "https://ui.ewgenius.me/shadcn-radix-colors",
      },
      {
        name: "gradient-picker",
        description:
          "Fancy Gradient Picker built with shadcn/ui, Radix UI, and Tailwind CSS.",
        link: "https://github.com/Illyism/gradient-picker",
      },
      {
        name: "navnote/rangeen",
        description:
          "Tool that helps you to create a colour palette for your website.",
        link: "https://github.com/navnote/rangeen",
      },
      {
        name: "shadesigner.com",
        description:
          "A shadcn/ui Palette Generator & Theme Designer with a beautiful interface.",
        link: "https://shadesigner.com",
      },
      {
        name: "shadcn-ui-customizer",
        description: "POC - shadcn/ui themes with color pickers.",
        link: "https://github.com/Railly/shadcn-ui-customizer",
      },
      {
        name: "shadcn theme editor",
        description:
          "Shadcn Theme Editor is a user-friendly component designed to simplify the process of managing and customizing theme colors in Shadcn-based projects.",
        link: "https://github.com/programming-with-ia/shadcn-theme-editor/",
      },
      {
        name: "ui-colorgen",
        description:
          "An application designed to assist you with color configuration of shadcn/ui.",
        link: "https://ui-colorgen.vercel.app/",
      },
      {
        name: "zippy starter's shadcn/ui theme generator",
        description:
          "Easily create custom themes from a single colour that you can copy and paste into your apps.",
        link: "https://zippystarter.com/tools/shadcn-ui-theme-generator",
      },
    ],
  },
  {
    sectionName: "Animations",
    items: [
      {
        name: "animata",
        description:
          "Hand-crafted ✍️ interaction animations and effects from around the internet 🛜 to copy and paste into your project.",
        link: "https://animata.design",
      },
      {
        name: "magicui.design",
        description:
          "Largest collection of open-source react components to build beautiful landing pages.",
        link: "https://magicui.design",
      },
      {
        name: "motionvariants",
        description: "Beautiful Framer Motion Animations.",
        link: "https://github.com/chrisabdo/motionvariants",
      },
      {
        name: "tailwindcss-motion",
        description:
          "A new simple syntax animation library. Batteries included. Infinitely configurable.",
        link: "https://rombo.co/tailwind/",
      },
    ],
  },
  {
    sectionName: "Tools",
    items: [
      {
        name: "5devs",
        description:
          "A website to get fake Brazilian data for testing purposes.",
        link: "https://www.5devs.com.br/ ",
      },
      {
        name: "ai-generator-shadcn-theme",
        description:
          "AI Shadcn Theme Generator, The AI Shadcn Theme Generator crafts stunning, consistent themes for your shadcn/ui projects in seconds.",
        link: "https://ipalettes.com/theme/shadcn",
      },
      {
        name: "bento-hub",
        description:
          "BentoHub is an application where you can create a bento grid for your GitHub profile readme.",
        link: "https://github.com/amittam104/BentoHub",
      },
      {
        name: "cut-it",
        description:
          "Link shortener built using Next.js App Router, Server Actions, Drizzle ORM, Turso, and styled with shadcn/ui.",
        link: "https://github.com/mehrabmp/cut-it",
      },
      {
        name: "country-data-in-charts",
        description:
          "Globe Graph is a web app that visualizes countries' data like GDP, GDP per capita, and population in different years using many charts.",
        link: "https://globe-graph.vercel.app/",
      },
      {
        name: "dev-quotes",
        description:
          "A website that displays quotes from professional programmers.",
        link: "https://dev-quotes-six.vercel.app/",
      },
      {
        name: "down-dev-detector",
        description:
          "This app lists all the services currently down and uses Atlassian Status Page and others (soon).",
        link: "https://github.com/birobirobiro/downdevdetector",
      },
      {
        name: "cv-forge",
        description:
          "Resume builder built with @shadcn/ui, react-hook-form, and react-pdf.",
        link: "https://cvforge.app",
      },
      {
        name: "excelkits",
        description:
          "Create free downloadable Shadcn-themed chart images. Supports PNG, JPEG, WEBP, and even WEBM videos. Upload your own data for more realistic designs.",
        link: "https://excelkits.com/charts",
      },
      {
        name: "form-builder",
        description:
          "UI-based codegen tool to easily create beautiful and type-safe @shadcn/ui forms.",
        link: "https://github.com/AlandSleman/FormBuilder",
      },
      {
        name: "form-builder-fast",
        description: "Shadcn Form Builder - Build forms in minutes for free.",
        link: "https://ui.indie-starter.dev/form-builder",
      },
      {
        name: "hook-again",
        description: "A collection of shadcn/ui installable React Hooks.",
        link: "https://github.com/ilyichv/hookagain",
      },
      {
        name: "imgsrc",
        description: "Generate beautiful Open Graph images with zero effort.",
        link: "https://imgsrc.io/",
      },
      {
        name: "invoify",
        description:
          "An invoice generator app built using Next.js, TypeScript, and shadcn/ui.",
        link: "https://github.com/aliabb01/invoify",
      },
      {
        name: "jobsync",
        description:
          "JobSync is a job seekers' assistant to manage job search efficiently.",
        link: "https://github.com/Gsync/jobsync",
      },
      {
        name: "memfree",
        description:
          "Open-source hybrid AI search engine, instantly get accurate answers from the internet, bookmarks, notes, and docs. Built using Next.js and shadcn/ui.",
        link: "https://github.com/memfreeme/memfree",
      },
      {
        name: "myinstants",
        description: "The largest instant sound buttons website in Brazil!",
        link: "https://www.myinstants.xyz/",
      },
      {
        name: "opensearch-ai",
        description: "SearchGPT/Perplexity clone but personalized for you.",
        link: "https://github.com/supermemoryai/opensearch-ai",
      },
      {
        name: "pagegen.ai",
        description:
          "An AI Page Generator with Claude AI, React, and shadcn/ui. Generate web pages from text, screenshots, and templates with one click.",
        link: "https://pagegen.ai",
      },
      {
        name: "pastecode",
        description:
          "Pastebin alternative built with TypeScript, Next.js, Drizzle, shadcn/ui, and RSC.",
        link: "https://github.com/Quorin/PasteCode.app",
      },
      {
        name: "postgres",
        description: "The in-browser Postgres sandbox with AI assistance.",
        link: "https://postgres.new/",
      },
      {
        name: "proxmox-helper-scripts",
        description:
          "A catalog of scripts for your Proxmox VE homelab, built with the Next.js App Router and styled with shadcn/ui.",
        link: "https://github.com/BramSuurdje/proxmox-helper-scripts",
      },
      {
        name: "quack-db",
        description: "Open-source in-browser DuckDB SQL editor.",
        link: "https://github.com/mattf96s/QuackDB",
      },
      {
        name: "qualmeuip",
        description: "Find out your IP address and test your internet speed.",
        link: "https://www.qualmeuip.xyz/",
      },
      {
        name: "shadcn-form-builder",
        description:
          "Create forms with Shadcn, react-hook-form, and Zod within minutes.",
        link: "https://shadcn-form-build.vercel.app/",
      },
      {
        name: "shadcn-pricing-page-generator",
        description:
          "The easiest way to get a React pricing page with shadcn/ui, Radix UI, and/or Tailwind CSS.",
        link: "https://shipixen.com/shadcn-pricing-page",
      },
      {
        name: "shadcn-theme-editor",
        description:
          "Shadcn Theme Editor is a user-friendly component designed to simplify the process of managing and customizing theme colors in Shadcn-based projects.",
        link: "https://shadcnthemeeditor.vercel.app",
      },
      {
        name: "shadcn-zod-form",
        description: "CLI tool to generate shadcn/ui forms from Zod schemas.",
        link: "https://github.com/ilyichv/shadcn-zod-form",
      },
      {
        name: "sharable-form-builder",
        description:
          "A sharable form builder for creating forms and sharing your form link, based on shadcn/ui and Next.js.",
        link: "https://github.com/ayoubben18/sharable-form-builder",
      },
      {
        name: "someday",
        description:
          "Free to host and open-source Cal.com/Calendly alternative built on Google Apps Script for Gmail users.",
        link: "https://github.com/rbbydotdev/someday",
      },
      {
        name: "tinte",
        description: "An opinionated VS Code Theme Generator 🎨.",
        link: "https://tinte.railly.dev/",
      },
      {
        name: "translate-app",
        description:
          "Translate App using TypeScript, Tailwind CSS, NextJS, Bun, shadcn/ui, AI SDK/OpenAI, and Zod.",
        link: "https://github.com/developaul/translate-app",
      },
      {
        name: "typelabs",
        description:
          "MonkeyType-inspired typing test app built with React, shadcn, and Zustand at its core.",
        link: "https://github.com/imsandeshpandey/typelabs",
      },
      {
        name: "ui-builder",
        description:
          "A React component editor that provides a no-code, visual way to create UIs, fully compatible with shadcn/ui and custom components.",
        link: "https://github.com/olliethedev/ui-builder",
      },
      {
        name: "ui-fonts",
        description:
          "Test and preview fonts in real-time for all your design needs. Choose the perfect typeface with ease.",
        link: "https://www.uifonts.app/",
      },
      {
        name: "v0",
        description:
          "Vercel's generative UI system, built on shadcn/ui and TailwindCSS, allows effortless UI generation from text prompts and/or images.",
        link: "https://v0.dev/ ",
      },
      {
        name: "vercel-status-tracker",
        description:
          "Track the status of all of your projects deployed via Vercel. Built with shadcn/ui and TailwindCSS.",
        link: "https://vercel-status-tracker.vercel.app",
      },
      {
        name: "wallhaven-desktop",
        description:
          "Wallhaven Wallpaper software desktop. Create a Wallhaven API-based client, a true wallpaper software.",
        link: "https://github.com/ErKeLost/wallhaven-desktop",
      },
      {
        name: "xuneix",
        description:
          "A link rotation tool for enhanced admin panel security. Includes dynamic URLs, expiring tokens, customizable rotation.",
        link: "https://xuneix.theteleporter.me/",
      },
    ],
  },
  {
    sectionName: "Websites and Portfolios Inspirations",
    items: [
      {
        name: "andrewsam.xyz",
        description:
          "A revamped version of the popular tailwind-nextjs-starter-blog using shadcn/ui, along with a resume section and experience timeline component.",
        link: "https://www.andrewsam.xyz/",
      },
      {
        name: "birobirobiro.dev",
        description: "A personal developer portfolio.",
        link: "https://birobirobiro.dev/",
      },
      {
        name: "godly",
        description:
          "Astronomically good web design inspiration. Only the best of the best.",
        link: "https://godly.website/",
      },
      {
        name: "list.swajp.me",
        description:
          "It has never been easier to find the right projects or designs by inspiring successful people.",
        link: "https://list.swajp.me",
      },
      {
        name: "Nathan's AI",
        description:
          "An AI Chatbot acting as a portfolio, built with shadcn/ui components.",
        link: "https://chat.brodin.dev",
      },
      {
        name: "shubhporwal.me",
        description:
          "An eye-catching developer portfolio, built on NextJS, GSAP, Tailwind, and React.",
        link: "https://www.shubhporwal.me/",
      },
      {
        name: "swajp.me",
        description: "A visually appealing portfolio and resource hub.",
        link: "https://swajp.me",
      },
    ],
  },
  {
    sectionName: "Platforms",
    items: [
      {
        name: "anonypost",
        description:
          "Share your thoughts and experiences anonymously by posting on the platform. Crafted using t3-stack.",
        link: "https://github.com/avalynndev/anonypost",
      },
      {
        name: "bolhadev",
        description:
          "The quickest path to learn English is speaking it regularly. Just find someone to chat with.",
        link: "https://bolhadev.chat/",
      },
      {
        name: "crept-studio",
        description:
          "Crept is a free Open Source project, made on top of Next.js, Tailwind CSS, and Shadcn UI. You can use it to deliver free TV shows and movies.",
        link: "https://www.crept.studio",
      },
      {
        name: "enjoytown",
        description:
          "A free anime, manga, movie, and TV-shows streaming platform. Built with Next.js, shadcn/ui.",
        link: "https://github.com/avalynndev/enjoytown",
      },
      {
        name: "grade-calculator",
        description:
          "A grade calculator/dashboard for students, aiming to provide a better overview of academic performance.",
        link: "https://grades.nstr.dev/",
      },
      {
        name: "infinitunes",
        description:
          "A simple music player web app built using Next.js, shadcn/ui, Tailwind CSS, Drizzle ORM, and more.",
        link: "https://github.com/rajput-hemant/infinitunes",
      },
      {
        name: "kd",
        description:
          "Ad-free Kdrama streaming app. Built with Next.js, Drizzle ORM, NeonDB, and shadcn/ui.",
        link: "https://github.com/gneiru/kd ",
      },
      {
        name: "memergez",
        description:
          "Quickly generate memes by entering text or an avatar URL, with support for many meme commands.",
        link: "https://github.com/avalynndev/memergez",
      },
      {
        name: "midday-components",
        description:
          "A collection of open-source components based on Midday features.",
        link: "https://midday.ai/components",
      },
      {
        name: "plotwist",
        description:
          "Easy management and reviews of your movies, series, and animes using Next.js, Tailwind CSS, Supabase, and shadcn/ui.",
        link: "https://plotwist.app/en-US",
      },
    ],
  },
  {
    sectionName: "Ports",
    items: [
      {
        name: "Angular",
        description: "Angular port of shadcn/ui.",
        link: "https://github.com/goetzrobin/spartan",
      },
      {
        name: "Flutter",
        description: "Flutter port of shadcn/ui.",
        link: "https://github.com/nank1ro/shadcn-ui",
      },
      {
        name: "Franken UI",
        description:
          "HTML-first, framework-agnostic, beautifully designed components that you can truly copy and paste into your site. Accessible. Customizable. Open Source.",
        link: "https://www.franken-ui.dev/",
      },
      {
        name: "JollyUI",
        description: "shadcn/ui compatible react aria components.",
        link: "https://github.com/jolbol1/jolly-ui",
      },
      {
        name: "Kotlin",
        description: "Kotlin port of shadcn/ui.",
        link: "https://github.com/dead8309/shadcn-kotlin",
      },
      {
        name: "Phoenix Liveview",
        description: "Phoenix Liveview port of shadcn/ui.",
        link: "https://github.com/bluzky/salad_ui",
      },
      {
        name: "React Native",
        description: "React Native port of shadcn/ui.",
        link: "https://github.com/Mobilecn-UI/nativecn-ui",
      },
      {
        name: "React Native (recommended)",
        description: "React Native port of shadcn/ui (recommended).",
        link: "https://github.com/mrzachnugent/react-native-reusables",
      },
      {
        name: "Ruby",
        description: "Ruby port of shadcn/ui.",
        link: "https://github.com/aviflombaum/shadcn-rails",
      },
      {
        name: "Solid",
        description: "Solid port of shadcn/ui.",
        link: "https://github.com/hngngn/shadcn-solid",
      },
      {
        name: "Svelte",
        description: "Svelte port of shadcn/ui.",
        link: "https://github.com/huntabyte/shadcn-svelte",
      },
      {
        name: "Swift",
        description: "Swift port of shadcn/ui.",
        link: "https://github.com/Mobilecn-UI/swiftcn-ui",
      },
      {
        name: "Sysinfocus simple/ui",
        description:
          "Razor component library for Blazor, inspired by shadcn/ui.",
        link: "https://sysinfocus.github.io/shadcn-inspired/",
      },
      {
        name: "Vue",
        description: "Vue port of shadcn/ui.",
        link: "https://github.com/radix-vue/shadcn-vue",
      },
    ],
  },
  {
    sectionName: "Design System",
    items: [
      {
        name: "shadcn-ui-components",
        description: "Every component recreated in Figma.",
        link: "https://www.figma.com/community/file/1342715840824755935/shadcn-ui-components",
      },
      {
        name: "shadcn-ui-storybook (JheanAntunes)",
        description:
          "All shadcn/ui components registered in the storybook by JheanAntunes.",
        link: "https://65711ecf32bae758b457ae34-uryqbzvojc.chromatic.com/",
      },
      {
        name: "shadcn-ui-storybook (fellipeutaka)",
        description:
          "All shadcn/ui components registered in the storybook by fellipeutaka.",
        link: "https://fellipeutaka-ui.vercel.app/?path=/docs/components-accordion--docs",
      },
    ],
  },
  {
    sectionName: "Boilerplates / Templates",
    items: [
      {
        name: "autoflow",
        description:
          "An open source GraphRAG (Knowledge Graph) built on top of TiDB Vector, LlamaIndex, and DSPy. [Demo site](https://tidb.ai).",
        link: "https://github.com/pingcap/autoflow",
      },
      {
        name: "browser-extension-starter-plasmo-shadcn-trpc",
        description:
          "Browser extension starter kit featuring Plasmo, React, Shadcn, and tRPC.",
        link: "https://github.com/poweroutlet2/browser-extension-starter-plasmo-shadcn-trpc",
      },
      {
        name: "chadnext",
        description:
          "Quick Starter Template includes Next.js 14 App Router, shadcn/ui, LuciaAuth, Prisma, Server Actions, Stripe, Internationalization, and more.",
        link: "https://github.com/moinulmoin/chadnext",
      },
      {
        name: "cloudflare-saas-stack",
        description:
          "An opinionated, batteries-included starter kit for quickly building and deploying SaaS products on Cloudflare.",
        link: "https://github.com/Dhravya/cloudflare-saas-stack",
      },
      {
        name: "create-tauri-core",
        description:
          "A project template for creating a Tauri app with Vite, React, and Tailwind CSS.",
        link: "https://github.com/mrlightful/create-tauri-core",
      },
      {
        name: "design-system-template",
        description: "Turborepo + TailwindCSS + Storybook + shadcn/ui.",
        link: "https://github.com/arevalolance/design-system-template",
      },
      {
        name: "easy-ui",
        description:
          "50+ High Quality Open Source Website Templates built using NextJS + shadcn/ui + Tailwind CSS + Framer Motion and more.",
        link: "https://github.com/DarkInventor/easy-ui",
      },
      {
        name: "electron-shadcn",
        description:
          "Electron app template with shadcn/ui and a bunch of other libs and tools ready to use.",
        link: "https://github.com/LuanRoger/electron-shadcn",
      },
      {
        name: "horizon-ai-nextjs-shadcn-boilerplate",
        description:
          "Premium AI NextJS & shadcn/ui Boilerplate + Stripe + Supabase + OAuth.",
        link: "https://horizon-ui.com/boilerplate-shadcn",
      },
      {
        name: "kirimase",
        description:
          "A template and boilerplate for quickly starting your next project with shadcn/ui, Tailwind CSS, and Next.js.",
        link: "https://kirimase.dev/",
      },
      {
        name: "magicui-startup-templates",
        description:
          "Magic UI Startup template built using shadcn/ui + TailwindCSS + Framer Motion.",
        link: "https://magicui.design/docs/templates/startup",
      },
      {
        name: "nextMotion",
        description:
          "Webdev portfolio template with Nodemailer integrated for easy contact form setup. Uses shadcn/ui + TailwindCSS + Framer Motion.",
        link: "https://github.com/yoyocharlie/nextMotion",
      },
      {
        name: "next-shadcn-dashboard-starter",
        description: "Admin Dashboard Starter with Next.js 14 and shadcn/ui.",
        link: "https://github.com/Kiranism/next-shadcn-dashboard-starter",
      },
      {
        name: "next-starter",
        description:
          "A Next.js starter template packed with features like TypeScript, TailwindCSS, Next-auth, Eslint, Stripe, testing tools, and more. Jumpstart your project with efficiency and style.",
        link: "https://github.com/Skolaczk/next-starter",
      },
      {
        name: "nextjs-mdx-blog",
        description:
          "Starter template built with Contentlayer, MDX, shadcn/ui, and Tailwind CSS.",
        link: "https://github.com/ChangoMan/nextjs-mdx-blog",
      },
      {
        name: "next-js-views-template",
        description:
          "An open-source collection of reusable view components like Calendar, Table, etc., built with Next.js and ShadCN. Easily copy and paste these pre-built UI elements into your project for fast, responsive, and customizable layouts.",
        link: "https://next-js-views-template.vercel.app",
      },
      {
        name: "next-wp",
        description:
          "Headless Wordpress Starter built with the NextJS App Router and React Server Components.",
        link: "https://github.com/9d8dev/next-wp",
      },
      {
        name: "onyx",
        description:
          "Full stack, batteries-included MVP Template with NextJS 14, Supabase SSR Auth & Postgres DB with CRUD operations, RBAC, Tanstack React Query, Zod Validation, MDX components, Resend, and more.",
        link: "https://github.com/rmourey26/onyx",
      },
      {
        name: "opendocs",
        description:
          "Beautifully designed template that you can use for your projects for free. Accessible. Customizable. Open Source with i18n support.",
        link: "https://opendocs.daltonmenezes.com/",
      },
      {
        name: "react-vite-starter",
        description:
          "React starter powered with Vite + Redux Toolkit + RTKQuery + React Router + shadcn UI and many more.",
        link: "https://github.com/tejachundru/react-vite-starter",
      },
      {
        name: "shadcn-landing-page",
        description:
          "Landing page template using shadcn/ui, React, TypeScript, and Tailwind CSS.",
        link: "https://github.com/leoMirandaa/shadcn-landing-page",
      },
      {
        name: "shadcn-landing-page (Vue)",
        description:
          "Project conversion [shadcn-vue-landing-page](https://github.com/leoMirandaa/shadcn-vue-landing-page) to Next.js - Landing page template using Nestjs, shadcn/ui, TypeScript, and Tailwind CSS.",
        link: "https://github.com/nobruf/shadcn-landing-page",
      },
      {
        name: "shadcn-nextjs-free-boilerplate",
        description:
          "Free & Open-source NextJS Boilerplate + ChatGPT API Dashboard Template.",
        link: "https://github.com/horizon-ui/shadcn-nextjs-boilerplate",
      },
      {
        name: "shadcn-registry-template",
        description:
          "Template repository for building a custom component registry for shadcn/ui.",
        link: "https://github.com/vantezzen/shadcn-registry-template",
      },
      {
        name: "shadcn-vue-landing-page",
        description:
          "Landing page template using Vue, shadcn-vue, TypeScript, and Tailwind CSS.",
        link: "https://github.com/leoMirandaa/shadcn-vue-landing-page",
      },
      {
        name: "shadcn-next-workflows",
        description:
          "Interactive workflow builder using React Flows, Next.js, and Shadcn/ui. Create, connect, and validate custom nodes easily.",
        link: "https://github.com/nobruf/shadcn-next-workflows",
      },
      {
        name: "supa-next-shad-auth",
        description:
          "A fully responsive, fully type-safe, secure server actions, user-friendly customizable UI with best practices. Tech used: NextJS + Supabase + TypeScript + Server Actions + Zod + shadcn/ui.",
        link: "https://github.com/Sahil-Sharma-23/supa-next-shad-auth",
      },
      {
        name: "t3-app-template",
        description: "Admin template for T3 Stack and shadcn/ui.",
        link: "https://github.com/gaofubin/t3-app-template",
      },
      {
        name: "taxonomy",
        description:
          "An open-source application built using the new router, server components, and everything new in Next.js.",
        link: "https://github.com/shadcn/taxonomy",
      },
      {
        name: "template-next",
        description:
          "A clean Next.js template with TypeScript, TailwindCSS, Shadcn/ui, and Prettier.",
        link: "https://template-next-official.vercel.app/",
      },
      {
        name: "turborepo-shadcn-ui-tailwindcss",
        description:
          "Turborepo starter with shadcn/ui & TailwindCSS pre-configured for shared UI components.",
        link: "https://github.com/henriqpohl/turborepo-shadcn-ui-tailwindcss",
      },
      {
        name: "turborepo-launchpad",
        description:
          "A comprehensive monorepo boilerplate for shadcn projects using Turbo. It features a highly scalable setup ideal for developing complex applications with shared components and utilities.",
        link: "https://github.com/JadRizk/turborepo-launchpad",
      },
      {
        name: "wordpress-plugin-boilerplate",
        description:
          "WordPress Plugin Boilerplate utilizing modern web technologies and tools such as React, TypeScript, SASS, TailwindCSS, Shadcn UI, Vite, Grunt.js, Storybook, HMR, and more.",
        link: "https://github.com/prappo/wordpress-plugin-boilerplate",
      },
    ],
  },
];
