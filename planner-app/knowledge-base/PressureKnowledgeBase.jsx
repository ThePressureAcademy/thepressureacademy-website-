import { useState } from "react";

const R="#C45B28",AM="#D4915C",CR="#FFF8F0",GR="#5BA85B",RD="#C44B4B",MT="#888",BG="#0A0A0A",TL="#4A9B8E",GO="#E8A838",VL="#8B6AAE";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PEDRO SAUER WHITE → BLUE BELT CURRICULUM
// Structured as Blueprint IF→THEN chains
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const bjjCurriculum = [
  {
    hub: 1, name: "Mount Escapes", icon: "🛡", category: "Escapes",
    techniques: [
      {
        name: "Trap & Roll (Upa)", type: "Escape", target: "Full Mount",
        description: "Bridge explosively to off-balance mounted opponent and reverse to guard/top.",
        keys: ["Trap same-side arm AND foot (wrist + ankle)","Bridge hips HIGH — not sideways","Turn OVER the trapped shoulder","Immediately establish base on top"],
        errors: ["Bridging without trapping arm","Bridging sideways instead of up","Forgetting to trap the foot","Pausing at top instead of establishing base"],
        chains: [
          { condition: "IF: They post hand", then: "→ Elbow-knee escape", score: false },
          { condition: "IF: They go high mount", then: "→ Elbow-knee to half guard", score: false },
          { condition: "IF: Roll succeeds", then: "→ Establish inside closed guard or pass", score: true }
        ]
      },
      {
        name: "Elbow-Knee Escape (Shrimp)", type: "Escape", target: "Full Mount",
        description: "Frame on hip, shrimp to create space, insert knee to recover guard.",
        keys: ["Frame on their hip — not chest","Shrimp AWAY from them","Knee comes to elbow (not elbow to knee)","Recover to closed guard or half guard"],
        errors: ["Pushing on chest instead of hip","Bridging up instead of shrimping sideways","Both legs flat on ground","Head stays centered"],
        chains: [
          { condition: "IF: They resist and stay", then: "→ Second shrimp, opposite side", score: false },
          { condition: "IF: Half guard recovered", then: "→ Half guard → underhook → sweep", score: false },
          { condition: "IF: Full guard recovered", then: "→ Closed guard attacks", score: true }
        ]
      },
      {
        name: "Heel Drag Escape", type: "Escape", target: "Full Mount",
        description: "Use heel to drag their foot over your leg, creating half guard.",
        keys: ["Cup their heel from outside","Drag heel across your thigh","Immediately lock half guard","Pummel for underhook"],
        errors: ["Grabbing too high on leg","Not securing half guard immediately","Staying flat after drag"],
        chains: [
          { condition: "IF: Half guard secured", then: "→ Underhook → Dog Fight → sweep", score: false },
          { condition: "IF: They re-mount", then: "→ Trap & Roll or Elbow-knee", score: false }
        ]
      }
    ]
  },
  {
    hub: 2, name: "Closed Guard", icon: "🔒", category: "Guard",
    techniques: [
      {
        name: "Armbar from Guard", type: "Submission", target: "Arm — Elbow",
        description: "Control posture, isolate arm, pivot hips for armbar. High-percentage from closed guard.",
        keys: ["Break posture first — pull head down","Same-side grip on wrist, cross-grip on tricep","Foot on hip, pivot 90°","Squeeze knees, hips HIGH, heels down"],
        errors: ["Attacking without breaking posture","Not pivoting hips enough (staying square)","Crossing feet","Knees open — arm escapes"],
        chains: [
          { condition: "IF: They stack", then: "→ Triangle or omoplata", score: false },
          { condition: "IF: They pull arm out", then: "→ Sweep (hip bump) to mount", score: false },
          { condition: "IF: Arm fully extended", then: "→ Slow controlled extension — TAP", score: true }
        ]
      },
      {
        name: "Triangle Choke", type: "Submission", target: "Neck — Carotid",
        description: "Lock figure-four with legs around neck and one arm. Squeeze knees and angle for choke.",
        keys: ["One arm IN, one arm OUT","Lock triangle — ankle behind knee","Pull head down AND angle body 30°","Squeeze knees together, flex hips upward"],
        errors: ["Both arms inside (no choke)","Not angling off-center","Legs too loose around neck","Forgetting to pull head down"],
        chains: [
          { condition: "IF: They posture up", then: "→ Armbar from triangle position", score: false },
          { condition: "IF: They tuck arm in", then: "→ Omoplata", score: false },
          { condition: "IF: Locked tight", then: "→ Squeeze — TAP", score: true }
        ]
      },
      {
        name: "Kimura from Guard", type: "Submission", target: "Arm — Shoulder",
        description: "Figure-four grip on wrist, sit up to side, paint-brush arm behind back.",
        keys: ["Break posture, overhook arm","Sit up to same side as trapped arm","Figure-four grip: your hand on their wrist, other hand grabs your own wrist","Rotate arm behind their back — slow, controlled"],
        errors: ["Staying flat on back (no leverage)","Grip too loose","Rotating wrong direction","Not controlling elbow close to their body"],
        chains: [
          { condition: "IF: They resist rotation", then: "→ Hip bump sweep using kimura grip", score: false },
          { condition: "IF: They pull arm free", then: "→ Guillotine (head is close)", score: false },
          { condition: "IF: Arm behind back", then: "→ Controlled rotation — TAP", score: true }
        ]
      },
      {
        name: "Hip Bump Sweep", type: "Sweep", target: "Closed Guard → Mount",
        description: "Post on hand, bump hips explosively to off-balance and land in mount.",
        keys: ["Time it when they posture UP","Post on one hand behind you","Explosive hip bump — drive into them","Come up to mount, don't settle for top half"],
        errors: ["Attempting when they have low posture","Not committing fully to the bump","Posting too far back","Landing in guard instead of mount"],
        chains: [
          { condition: "IF: They post hand to base", then: "→ Kimura (arm is exposed)", score: false },
          { condition: "IF: They post wide", then: "→ Guillotine", score: false },
          { condition: "IF: Sweep lands clean", then: "→ Mount — cross collar choke or armbar", score: true }
        ]
      },
      {
        name: "Scissor Sweep", type: "Sweep", target: "Closed Guard → Mount",
        description: "Collar and sleeve grip, open guard, shin across belly, kick bottom leg to sweep.",
        keys: ["Cross-collar grip + same-side sleeve grip","Open guard, knee shield across their belly","Pull them forward with grips","Kick bottom leg while pulling with top shin"],
        errors: ["Shin not across belly (just knee)","Bottom leg not sweeping their knee","Poor grip = no control","Sweeping sideways not forward"],
        chains: [
          { condition: "IF: They base wide", then: "→ Flower/pendulum sweep", score: false },
          { condition: "IF: They stand", then: "→ Technical stand-up or ankle pick", score: false },
          { condition: "IF: Sweep completes", then: "→ Mount", score: true }
        ]
      },
      {
        name: "Pendulum Sweep", type: "Sweep", target: "Closed Guard → Mount",
        description: "Underhook leg, pendulum swing, sweep over opposite shoulder.",
        keys: ["Open guard, underhook their leg (same side as sleeve grip)","Swing legs like a pendulum — momentum matters","Kick over their far shoulder","Follow through to mount"],
        errors: ["No momentum in pendulum","Not controlling sleeve","Underhook too shallow","Not following through to top"],
        chains: [
          { condition: "IF: They base", then: "→ Armbar from guard", score: false },
          { condition: "IF: Sweep completes", then: "→ Mount", score: true }
        ]
      },
      {
        name: "Cross Collar Choke from Guard", type: "Submission", target: "Neck — Carotid",
        description: "Deep cross-collar grip, second hand feeds palm-up, squeeze and expand chest.",
        keys: ["First grip DEEP — 4 fingers inside collar, thumb out","Second hand palm-up on opposite collar","Elbows in tight","Expand chest, pull elbows apart — choke comes from wrists, not hands"],
        errors: ["First grip too shallow","Elbows flaring wide (easy to defend)","Squeezing with hands instead of forearm rotation","Not pulling them into you"],
        chains: [
          { condition: "IF: They posture to escape", then: "→ Hip bump sweep or armbar", score: false },
          { condition: "IF: They turn head", then: "→ Adjust angle, reapply", score: false },
          { condition: "IF: Grips deep, elbows in", then: "→ Squeeze — TAP", score: true }
        ]
      }
    ]
  },
  {
    hub: 3, name: "Side Control", icon: "⚔️", category: "Control",
    techniques: [
      {
        name: "Side Control Escape — Shrimp to Guard", type: "Escape", target: "Bottom Side Control",
        description: "Frame, shrimp, create space, recover knee and return to guard.",
        keys: ["Near-side frame on neck/jaw, far-side frame on hip","Bridge THEN shrimp (not simultaneously)","Knee shield insertion","Recover full guard or half guard"],
        errors: ["Flat on back — no frames","Reaching over them (arm trapped)","Shrimping without bridge first","Turning away and giving back"],
        chains: [
          { condition: "IF: Knee shield established", then: "→ Half guard → underhook sweep", score: false },
          { condition: "IF: They switch to north-south", then: "→ Turtle → granby roll", score: false },
          { condition: "IF: Guard recovered", then: "→ Closed guard attacks", score: true }
        ]
      },
      {
        name: "Americana from Side Control", type: "Submission", target: "Arm — Shoulder",
        description: "Pin their wrist to mat, figure-four grip, paint-brush arm toward their feet.",
        keys: ["Isolate their near arm — pin wrist to mat","Figure-four grip","Keep THEIR elbow pinned to mat","Slowly rotate wrist toward their hip/feet"],
        errors: ["Not keeping elbow on mat","Lifting your body weight off them","Rushing the rotation","Grip too loose — they hitchhike escape"],
        chains: [
          { condition: "IF: They straighten arm", then: "→ Straight armbar or transition to armbar", score: false },
          { condition: "IF: They roll toward you", then: "→ Take mount", score: false },
          { condition: "IF: Elbow pinned, rotation applied", then: "→ Slow pressure — TAP", score: true }
        ]
      },
      {
        name: "Knee-on-Belly", type: "Control", target: "Transition",
        description: "Shin across belly, toes driving, grips established. High-pressure control position.",
        keys: ["Shin across belly — not knee on sternum","Far-side collar grip + near-side pants grip","Drive weight through shin","Post foot wide for base"],
        errors: ["Sitting on them instead of driving through","Knee too high (easy to escape)","No grips (they bench-press you off)","Feet too close together — poor base"],
        chains: [
          { condition: "IF: They push knee", then: "→ Armbar from KOB", score: false },
          { condition: "IF: They turn away", then: "→ Take the back", score: false },
          { condition: "IF: They bridge", then: "→ Transition to mount", score: true }
        ]
      }
    ]
  },
  {
    hub: 4, name: "Back Control", icon: "🎯", category: "Dominant",
    techniques: [
      {
        name: "Rear Naked Choke (RNC)", type: "Submission", target: "Neck — Carotid",
        description: "Seat belt grip, hooks in, choking arm under chin, figure-four lock, squeeze.",
        keys: ["Seat belt grip FIRST, then hooks","Choking arm UNDER chin — blade of forearm on throat","Figure-four: hand behind head, squeeze bicep to forearm","Expand chest, don't just squeeze arms"],
        errors: ["Going for choke before establishing hooks","Arm over chin/nose (face crank, not choke)","Crossing feet (ankle lock risk)","Squeezing only with arms, no chest expansion"],
        chains: [
          { condition: "IF: They tuck chin", then: "→ Short choke or transition to collar choke", score: false },
          { condition: "IF: They peel choking arm", then: "→ Armbar from back", score: false },
          { condition: "IF: Under chin, locked", then: "→ Squeeze — TAP", score: true }
        ]
      },
      {
        name: "Back Escape — Hand Fighting to Side", type: "Escape", target: "Bottom — Back Taken",
        description: "Fight hands, clear hooks, slide to side, recover guard or escape.",
        keys: ["Protect neck FIRST — chin down, hands on collar","Fight the choking arm — two-on-one grip","Clear bottom hook with heel","Slide hips to mat, turn toward them to recover guard"],
        errors: ["Panicking and rolling wrong way","Not fighting hands — going straight to hooks","Turning away (deeper hooks + choke)","Bridging up (worse position)"],
        chains: [
          { condition: "IF: One hook cleared", then: "→ Slide to half guard", score: false },
          { condition: "IF: Both hooks cleared", then: "→ Turn to face → guard recovery", score: true },
          { condition: "IF: They flatten you", then: "→ Turtle → granby roll", score: false }
        ]
      }
    ]
  },
  {
    hub: 5, name: "Half Guard", icon: "🔄", category: "Guard",
    techniques: [
      {
        name: "Underhook Sweep (Dog Fight)", type: "Sweep", target: "Half Guard → Top",
        description: "Get underhook, come to knees (dog fight), drive forward or take single leg.",
        keys: ["Pummel for underhook on near side","Get OFF your back — come to knees","Head pressure into their chest","Drive forward or switch to single leg"],
        errors: ["Staying flat with underhook (they crossface)","Underhook too shallow","Head position wrong — they guillotine","Not committing to the drive"],
        chains: [
          { condition: "IF: They crossface heavy", then: "→ Lockdown → electric chair or sweep", score: false },
          { condition: "IF: They whizzer", then: "→ Duck under or switch to back take", score: false },
          { condition: "IF: Drive succeeds", then: "→ Top position → pass", score: true }
        ]
      },
      {
        name: "Knee Shield Retention", type: "Defense", target: "Half Guard",
        description: "Frame with shin across their body to maintain distance and prevent crossface.",
        keys: ["Shin across their torso — not just knee","Frame hand on bicep or collar","Keep bottom knee tight on their leg","Use shield to create angles for sweeps"],
        errors: ["Shield too low (they smash through)","No grip — just shin (they pass around)","Flat on back with shield (not on hip)"],
        chains: [
          { condition: "IF: They pressure through", then: "→ Underhook → dog fight", score: false },
          { condition: "IF: Space created", then: "→ Recover full guard or attack", score: true }
        ]
      }
    ]
  },
  {
    hub: 6, name: "Takedowns", icon: "💥", category: "Standing",
    techniques: [
      {
        name: "Double Leg Takedown", type: "Takedown", target: "Standing → Top",
        description: "Level change, penetration step, drive through hips to takedown.",
        keys: ["Set up with push/pull or jab","Level change — bend KNEES not waist","Penetration step deep between their feet","Head on chest side, drive forward and UP"],
        errors: ["Reaching with arms (no level change)","Head down looking at ground","Stopping after contact (not driving)","Too far away — no penetration"],
        chains: [
          { condition: "IF: They sprawl", then: "→ Switch to single leg or ankle pick", score: false },
          { condition: "IF: Takedown lands", then: "→ Side control or guard pass", score: true }
        ]
      },
      {
        name: "Single Leg Takedown", type: "Takedown", target: "Standing → Top",
        description: "Grab one leg, drive forward, finish to side or by running the pipe.",
        keys: ["Level change, grab behind knee","Head on INSIDE — ear to their chest","Stand up tall with their leg","Finish: run the pipe, trip, or lift and dump"],
        errors: ["Head on outside (guillotine risk)","Grabbing too low (ankle — they hop away)","Not standing tall after grip","Stopping movement after contact"],
        chains: [
          { condition: "IF: They whizzer", then: "→ Inside trip or mat return", score: false },
          { condition: "IF: They hop away", then: "→ Ankle pick or switch to double", score: false },
          { condition: "IF: Takedown completes", then: "→ Pass to side control", score: true }
        ]
      },
      {
        name: "Hip Throw (O Goshi)", type: "Takedown", target: "Standing → Top",
        description: "Underhook, turn in, load on hip, throw over.",
        keys: ["Strong underhook — deep around their back","Turn in: your back to their chest","Load them on your hip — knees bent","Rotate and throw — follow to top"],
        errors: ["Underhook too shallow","Not turning hips fully in","Trying to lift with arms instead of hips","Bending at waist (back injury risk)"],
        chains: [
          { condition: "IF: They block hip", then: "→ Foot sweep or drop to knee for sacrifice throw", score: false },
          { condition: "IF: Throw lands", then: "→ Side control", score: true }
        ]
      },
      {
        name: "Guard Pull to Closed Guard", type: "Takedown", target: "Standing → Guard",
        description: "Grip collar and sleeve, sit to guard, immediately close guard and break posture.",
        keys: ["Establish grips first: collar + sleeve","Sit down, feet on hips as you pull","Close guard immediately","Break posture RIGHT AWAY"],
        errors: ["No grips before sitting","Landing on butt far from them","Not closing guard — they pass","Sitting without pulling them in"],
        chains: [
          { condition: "IF: Guard closed", then: "→ Break posture → attacks", score: true },
          { condition: "IF: They stay standing", then: "→ Open guard retention → sweep", score: false }
        ]
      }
    ]
  },
  {
    hub: 7, name: "Self Defense", icon: "🛑", category: "Defense",
    techniques: [
      {
        name: "Standing Headlock Defense", type: "Escape", target: "Self Defense",
        description: "Step behind, grip around waist, sit-out to take back or takedown.",
        keys: ["Turn face INTO their body (protect airway)","Step behind them","Grip around waist or far hip","Sit-out or rear body lock takedown"],
        errors: ["Pulling head straight back","Staying square in front","Panicking and flailing","Not protecting airway first"],
        chains: [
          { condition: "IF: Rear body lock secured", then: "→ Takedown → back control", score: true },
          { condition: "IF: They tighten grip", then: "→ Frame on jaw, create space, duck out", score: false }
        ]
      },
      {
        name: "Rear Bear Hug Defense (Arms Pinned)", type: "Escape", target: "Self Defense",
        description: "Base low, clear hands, turn to clinch.",
        keys: ["Drop base immediately — wide stance, low hips","Grab their hands/wrists","Clear arms: peel one hand, turn into them","Establish clinch or underhooks"],
        errors: ["Staying upright (easy to lift)","Trying to elbow backwards","Throwing head back","Not turning to face them"],
        chains: [
          { condition: "IF: Hands cleared", then: "→ Clinch → takedown or disengage", score: true },
          { condition: "IF: They lift you", then: "→ Hook leg, drop weight, turn", score: false }
        ]
      },
      {
        name: "Punch Defense to Clinch", type: "Defense", target: "Self Defense",
        description: "Cover, crash distance, clinch, takedown.",
        keys: ["Hands up — shell defense (gloves to temples, elbows in)","Step IN, not away — crash into clinch range","Underhooks or body lock","Takedown: double leg, body lock takedown, or trip"],
        errors: ["Backing up straight (you eat punches)","Hands down","Trying to trade punches (BJJ ≠ boxing)","Clinching without takedown plan"],
        chains: [
          { condition: "IF: Clinch achieved", then: "→ Takedown to top position", score: true },
          { condition: "IF: Knocked down", then: "→ Guard pull, full guard, control distance", score: false }
        ]
      }
    ]
  },
  {
    hub: 8, name: "Leg Locks", icon: "🦵", category: "Submissions",
    techniques: [
      {
        name: "Straight Ankle Lock (Ashi Garami)", type: "Submission", target: "Ankle — Achilles",
        description: "Control foot in armpit, blade of wrist on Achilles, arch back.",
        keys: ["Outside position (outside ashi)","Foot trapped in armpit — NOT elbow crook","Blade of forearm/wrist on Achilles tendon","Arch back, hips UP — don't just lean back"],
        errors: ["Holding in elbow crook (no pressure)","Hips too far from their leg","Not controlling their free leg","Leaning back instead of arching hips"],
        chains: [
          { condition: "IF: They pull foot free", then: "→ Transition to toe hold or knee line pass", score: false },
          { condition: "IF: Achilles pressure applied", then: "→ Arch — TAP", score: true }
        ]
      },
      {
        name: "Toe Hold", type: "Submission", target: "Ankle — ATFL, CFL",
        description: "Figure-four on foot. Force inversion stresses ATFL and CFL. Straight leg transfers to knee.",
        keys: ["Grip on toes/ball, not ankle","Rotate inward (toward midline)","Body rotation, not just arms","Straight leg = more danger","Combine with entanglement"],
        errors: ["Gripping too high","Not using body weight","Bent knee reduces effect"],
        chains: [
          { condition: "IF: They straighten leg", then: "→ Transition to straight ankle lock", score: false },
          { condition: "IF: Rotation locked", then: "→ Controlled pressure — TAP", score: true }
        ]
      }
    ]
  }
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// NUTRITION DATABASE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const recipes = [
  // QUINOA
  { name:"Quinoa Power Bowl", diet:["Paleo-ish","Dairy-Free"], cal:480, p:42, c:45, f:14, ingredients:"200g chicken breast, 100g cooked quinoa, avocado, spinach, cherry tomatoes, lemon dressing", method:"Grill chicken 6min/side. Fluff quinoa. Assemble bowl. Squeeze lemon.", shift:"Day or Night", prep:"15min" },
  { name:"Quinoa Egg Scramble", diet:["Vegetarian"], cal:420, p:32, c:38, f:16, ingredients:"3 eggs, 80g cooked quinoa, spinach, feta (30g), mushrooms", method:"Scramble eggs with mushrooms + spinach. Fold in quinoa and feta.", shift:"Pre-shift / Breakfast", prep:"10min" },
  { name:"Quinoa Stuffed Capsicum", diet:["Carnivore-friendly","Paleo"], cal:520, p:45, c:42, f:18, ingredients:"200g beef mince, 100g quinoa, capsicum halves, tomato paste, cheese (optional)", method:"Brown mince with tomato paste. Mix with cooked quinoa. Stuff capsicums. Bake 180°C 25min.", shift:"Meal prep", prep:"35min" },
  
  // RICE
  { name:"Chicken & Rice Classic", diet:["Dairy-Free","Paleo-ish"], cal:500, p:45, c:50, f:12, ingredients:"200g chicken breast, 150g cooked jasmine rice, broccoli, soy sauce, garlic", method:"Slice chicken, stir-fry with garlic 5min. Add broccoli 3min. Serve over rice. Drizzle soy.", shift:"Any shift", prep:"15min" },
  { name:"Steak & Veg Rice Bowl", diet:["Dairy-Free"], cal:560, p:52, c:48, f:18, ingredients:"200g rump steak, 150g rice, broccolini, sweet potato (80g cubed)", method:"Season steak, 2min/side medium-rare. Rest 5min. Roast sweet potato 20min. Assemble.", shift:"Night shift", prep:"25min" },
  { name:"Salmon Rice Bowl", diet:["Paleo","Dairy-Free"], cal:530, p:40, c:46, f:22, ingredients:"180g salmon fillet, 150g rice, edamame, cucumber, sesame, soy, rice vinegar", method:"Pan-sear salmon 3min/side. Slice. Bowl with rice, edamame, cucumber. Drizzle.", shift:"Day shift", prep:"15min" },
  { name:"Beef Burrito Bowl", diet:["Dairy-optional"], cal:580, p:48, c:52, f:20, ingredients:"200g beef mince, 150g rice, black beans (50g), corn, salsa, cheese (optional)", method:"Brown mince with cumin + paprika. Warm beans. Layer rice, mince, beans, corn, salsa.", shift:"Any shift", prep:"15min" },
  
  // DAIRY
  { name:"Greek Yogurt Protein Bowl", diet:["Vegetarian","Dairy"], cal:380, p:35, c:40, f:10, ingredients:"200g Greek yogurt (full fat), 30g protein powder, berries, 20g granola, honey", method:"Mix protein into yogurt. Top with berries, granola, drizzle honey.", shift:"Pre-training / Breakfast", prep:"5min" },
  { name:"Cottage Cheese Omelette", diet:["Vegetarian","Dairy"], cal:400, p:38, c:8, f:24, ingredients:"3 eggs, 100g cottage cheese, spinach, mushrooms, salt/pepper", method:"Whisk eggs. Pour in pan. Add cottage cheese dollops + veg. Fold when set.", shift:"Breakfast", prep:"10min" },
  { name:"Casein Night Shake", diet:["Dairy"], cal:220, p:30, c:12, f:6, ingredients:"40g casein powder, 300ml milk, 1tsp peanut butter, ice", method:"Blend all ingredients. Slow-release protein for overnight recovery.", shift:"Before sleep", prep:"3min" },
  
  // CARNIVORE / HIGH PROTEIN
  { name:"200g Rump + Broccolini", diet:["Carnivore","Paleo","Dairy-Free"], cal:520, p:50, c:20, f:28, ingredients:"200g rump steak, broccolini, butter (10g), garlic, salt", method:"Rump 2min/side medium. Rest 5min. Sauté broccolini in butter + garlic.", shift:"Night shift", prep:"12min" },
  { name:"Lamb Cutlets + Greens", diet:["Carnivore","Paleo"], cal:560, p:46, c:12, f:36, ingredients:"3 lamb cutlets, asparagus, mixed leaves, olive oil, lemon", method:"Season cutlets. Grill 4min/side. Char asparagus alongside. Dress leaves.", shift:"Any shift", prep:"15min" },
  { name:"Chicken Thigh Roast", diet:["Carnivore","Paleo","Dairy-Free"], cal:480, p:44, c:15, f:28, ingredients:"2 skin-on chicken thighs, sweet potato wedges, green beans", method:"Season thighs. Roast 200°C 30min skin-side up. Roast sweet potato alongside. Steam beans.", shift:"Meal prep", prep:"35min" },
  { name:"Beef Liver & Onions", diet:["Carnivore"], cal:390, p:42, c:18, f:16, ingredients:"150g beef liver, onion, butter, salt/pepper", method:"Slice liver thin. Caramelize onions in butter 10min. Sear liver 2min/side. Don't overcook.", shift:"Nutrient-dense recovery", prep:"15min" },
  { name:"Egg & Bacon Plate", diet:["Carnivore","Paleo"], cal:450, p:35, c:2, f:34, ingredients:"4 eggs, 3 bacon rashers, avocado half, salt/pepper", method:"Cook bacon crispy. Fry eggs in bacon fat. Slice avocado. Plate.", shift:"Breakfast / Pre-shift", prep:"10min" },
  
  // PALEO
  { name:"Sweet Potato Turkey Mash", diet:["Paleo","Dairy-Free"], cal:460, p:42, c:40, f:14, ingredients:"200g turkey mince, sweet potato (200g), spinach, garlic, coconut oil", method:"Mash roasted sweet potato. Brown turkey with garlic in coconut oil. Layer.", shift:"Any shift", prep:"20min" },
  { name:"Prawn Stir-Fry (No Rice)", diet:["Paleo","Dairy-Free"], cal:350, p:38, c:18, f:14, ingredients:"200g prawns, zucchini noodles, capsicum, coconut aminos, ginger, garlic", method:"Stir-fry prawns with ginger/garlic 3min. Add veg 2min. Toss with coconut aminos.", shift:"Any shift", prep:"12min" },
  
  // SHIFT-SPECIFIC MEAL PLANS
  { name:"Night Shift Full Plan", diet:["All"], cal:2400, p:180, c:200, f:90, ingredients:"See breakdown below", method:"Pre-shift: 600cal (oats + protein). Mid-1: 500cal (chicken+rice). Mid-2: 700cal (steak+veg). Post: 400cal (shake). Sleep: 200cal casein.", shift:"Night shift (12hr)", prep:"Meal prep Sunday" },
  { name:"Day Shift Full Plan", diet:["All"], cal:2200, p:170, c:180, f:80, ingredients:"See breakdown below", method:"Breakfast: 500cal (eggs+oats). Lunch: 600cal (chicken bowl). Pre-training: 300cal (banana+shake). Post-training: 500cal (steak+rice). Dinner: 300cal (yogurt bowl).", shift:"Day shift + evening training", prep:"Meal prep Sunday" },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// MENTAL HEALTH TECHNIQUES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const mentalHealth = [
  { category: "Stress Management", techniques: [
    { name:"Box Breathing (4-4-4-4)", desc:"Inhale 4 seconds → Hold 4 → Exhale 4 → Hold 4. Repeat 4 rounds. Used by Navy SEALs for acute stress. Activates parasympathetic nervous system within 60 seconds.", when:"Before shift, pre-competition, high-stress moments, can't sleep" },
    { name:"5-4-3-2-1 Grounding", desc:"Name 5 things you see, 4 you hear, 3 you touch, 2 you smell, 1 you taste. Forces present-moment awareness. Breaks anxiety spiral by engaging sensory cortex.", when:"Anxiety attacks, racing thoughts, dissociation, overwhelm" },
    { name:"Progressive Muscle Relaxation", desc:"Tense each muscle group 5 seconds, release 10 seconds. Work from toes to head. Release creates deep relaxation response. Good for chronic tension holders.", when:"Before sleep, after shift, chronic tension, can't unwind" },
    { name:"Cognitive Reframing", desc:"Identify the thought → Question it (is it true? is it helpful?) → Reframe to accurate/useful version. Not positive thinking — ACCURATE thinking.", when:"Negative self-talk, catastrophizing, post-loss spiraling" },
  ]},
  { category: "Sleep Optimization", techniques: [
    { name:"Sleep Hygiene Protocol (Shift Workers)", desc:"Room: blackout curtains + 16-18°C + white noise. Pre-sleep: no screens 30min, casein shake, magnesium glycinate 400mg. Wake: bright light exposure immediately. Shift workers lose 1-4hrs sleep/day without protocol.", when:"Night shift recovery, broken sleep, shift transitions" },
    { name:"Sleep Restriction Therapy", desc:"If you're in bed 8hrs but sleeping 5, restrict bed time to 5.5hrs. Builds sleep pressure. Gradually increase by 15min when efficiency hits 85%+. Counterintuitive but evidence-based.", when:"Chronic insomnia, lying awake for hours, sleep anxiety" },
    { name:"Nap Strategy (Shift Work)", desc:"20min power nap: light sleep only, no grogginess. 90min full cycle: complete sleep cycle including REM. Never 40-60min — wakes mid-deep-sleep causing grogginess.", when:"Pre-night-shift, mid-day recovery, between doubles" },
  ]},
  { category: "Competition Mindset", techniques: [
    { name:"Pre-Competition Visualization", desc:"15min eyes closed: visualize the walk to mat, the grip fight, your first two techniques, responding to adversity (down on points, bad position), winning moment. Include SENSORY detail — feel the gi, hear the crowd.", when:"Night before competition, morning of, warm-up room" },
    { name:"Process Goals vs Outcome Goals", desc:"Don't set 'win gold.' Set 'pull guard to closed guard within 30 seconds' and 'attempt 3 sweep variations per match.' You control process, not outcome. Process focus reduces anxiety by 40%.", when:"Goal setting, pre-competition planning, reducing pressure" },
    { name:"Post-Loss Protocol", desc:"1. Physical: eat and hydrate within 30min. 2. Emotional: acknowledge the feeling — don't suppress. 3. Analytical: write 3 things that worked, 3 to improve (not today — 48hrs later). 4. Social: talk to coach or teammate, not alone.", when:"After competition loss, after bad training session" },
  ]},
  { category: "Daily Mental Health", techniques: [
    { name:"Gratitude Journaling (3 Things)", desc:"Write 3 specific things daily. Not 'family' — write 'my daughter laughed at breakfast when I made the funny face.' Specificity activates memory consolidation and mood regulation.", when:"Daily — morning or before bed. Part of Planner log." },
    { name:"Values-Based Decision Making", desc:"When stuck: list your top 5 values (e.g. family, mastery, health, integrity, growth). Score each option against values. The highest-scoring option is your answer. Removes emotional noise.", when:"Major life decisions, career choices, conflict resolution" },
    { name:"Mindful Mat Time", desc:"First 5 minutes of training: focus ONLY on breathing and movement. No technique goals, no game planning. Just feel the mat, feel your body. Transitions training from 'task' to 'practice.'", when:"Start of every training session, burnout prevention" },
    { name:"Social Battery Management", desc:"Introverts: schedule 2hrs alone time after social events. Extroverts: schedule 1 social interaction per rest day. Shift workers: one non-screen social activity per roster cycle. Energy management, not time management.", when:"Shift work social isolation, burnout, family tension" },
  ]},
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// MAIN COMPONENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default function PressureKnowledgeBase() {
  const [tab, setTab] = useState("bjj");
  const [openHub, setOpenHub] = useState(null);
  const [openTech, setOpenTech] = useState(null);
  const [dietFilter, setDietFilter] = useState("All");
  const [openMH, setOpenMH] = useState(null);

  const totalTech = bjjCurriculum.reduce((sum, h) => sum + h.techniques.length, 0);
  const totalChains = bjjCurriculum.reduce((sum, h) => sum + h.techniques.reduce((s2, t) => s2 + t.chains.length, 0), 0);

  return (
    <div style={{ background:"#030303", minHeight:"100vh", fontFamily:"'Inter',-apple-system,sans-serif", color:CR }}>
      {/* Header */}
      <div style={{ padding:"40px 20px 16px", textAlign:"center", maxWidth:"800px", margin:"0 auto" }}>
        <div style={{ fontSize:"9px", letterSpacing:"0.14em", textTransform:"uppercase", color:R, fontWeight:700, marginBottom:"6px" }}>Pressure Coach — Knowledge Base v1.0</div>
        <h1 style={{ fontSize:"28px", fontWeight:800, margin:"0 0 6px", letterSpacing:"-0.03em" }}>The Brain Behind the Coach</h1>
        <p style={{ fontSize:"12px", color:MT, margin:"0 0 4px" }}>{totalTech} techniques · {totalChains} IF→THEN chains · {recipes.length} recipes · {mentalHealth.reduce((s,c) => s+c.techniques.length, 0)} mental health protocols</p>
        <p style={{ fontSize:"11px", color:AM, margin:0 }}>Pedro Sauer White → Blue Curriculum + Nutrition + Mental Health</p>

        <div style={{ display:"flex", gap:"6px", justifyContent:"center", marginTop:"18px" }}>
          {[{id:"bjj",label:`🥋 BJJ Blueprint (${totalTech})`},{id:"nutrition",label:`🍽 Nutrition (${recipes.length})`},{id:"mental",label:`🧠 Mental Health`}].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding:"7px 16px", borderRadius:"7px", fontSize:"10px", fontWeight:600, cursor:"pointer",
              background: tab===t.id?R:"transparent", border:`1.5px solid ${tab===t.id?R:"#333"}`,
              color: tab===t.id?CR:"#666", transition:"all 0.2s"
            }}>{t.label}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth:"800px", margin:"0 auto", padding:"16px 16px 48px" }}>

        {/* ──── BJJ TAB ──── */}
        {tab === "bjj" && (
          <div style={{ display:"flex", flexDirection:"column", gap:"8px" }}>
            {bjjCurriculum.map(hub => {
              const isOpen = openHub === hub.hub;
              return (
                <div key={hub.hub} style={{ background:"#111", borderRadius:"12px", border:`1px solid ${isOpen?R:"#1a1a1a"}`, overflow:"hidden" }}>
                  <div onClick={() => { setOpenHub(isOpen?null:hub.hub); setOpenTech(null); }}
                    style={{ display:"flex", alignItems:"center", gap:"10px", padding:"14px 16px", cursor:"pointer" }}>
                    <span style={{ fontSize:"18px" }}>{hub.icon}</span>
                    <div style={{ flex:1 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:"6px" }}>
                        <span style={{ fontSize:"8px", fontWeight:800, color:"#050505", background:R, padding:"1px 5px", borderRadius:"3px" }}>HUB {hub.hub}</span>
                        <span style={{ fontSize:"14px", fontWeight:700, color:CR }}>{hub.name}</span>
                      </div>
                      <div style={{ fontSize:"10px", color:MT }}>{hub.techniques.length} techniques · {hub.category}</div>
                    </div>
                    <span style={{ color:MT, fontSize:"14px" }}>{isOpen?"▼":"▶"}</span>
                  </div>

                  {isOpen && hub.techniques.map((tech, ti) => {
                    const tOpen = openTech === `${hub.hub}-${ti}`;
                    return (
                      <div key={ti} style={{ borderTop:"1px solid #1a1a1a" }}>
                        <div onClick={(e) => { e.stopPropagation(); setOpenTech(tOpen?null:`${hub.hub}-${ti}`); }}
                          style={{ padding:"10px 16px 10px 42px", cursor:"pointer", background: tOpen?"#0d0d0d":"transparent" }}>
                          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                            <div>
                              <span style={{ fontSize:"13px", fontWeight:600, color:CR }}>{tech.name}</span>
                              <span style={{ fontSize:"9px", color: tech.type==="Submission"?RD:tech.type==="Sweep"?TL:tech.type==="Escape"?GO:AM, marginLeft:"8px", fontWeight:600 }}>{tech.type}</span>
                            </div>
                            <span style={{ fontSize:"9px", color:"#555" }}>{tech.chains.length} chains</span>
                          </div>
                          {tech.target && <div style={{ fontSize:"9px", color:GO, marginTop:"1px" }}>Target: {tech.target}</div>}
                        </div>

                        {tOpen && (
                          <div style={{ padding:"0 16px 14px 42px" }}>
                            <p style={{ fontSize:"11px", color:"#bbb", lineHeight:1.6, margin:"0 0 10px" }}>{tech.description}</p>
                            
                            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px", marginBottom:"10px" }}>
                              <div style={{ padding:"10px", background:"#0a0a0a", borderRadius:"8px", borderLeft:`2px solid ${GR}` }}>
                                <div style={{ fontSize:"8px", fontWeight:700, color:GR, letterSpacing:"0.06em", marginBottom:"4px" }}>🔑 KEYS</div>
                                {tech.keys.map((k,ki) => <div key={ki} style={{ fontSize:"10px", color:"#aaa", padding:"1px 0" }}>• {k}</div>)}
                              </div>
                              <div style={{ padding:"10px", background:"#0a0a0a", borderRadius:"8px", borderLeft:`2px solid ${RD}` }}>
                                <div style={{ fontSize:"8px", fontWeight:700, color:RD, letterSpacing:"0.06em", marginBottom:"4px" }}>❌ ERRORS</div>
                                {tech.errors.map((e,ei) => <div key={ei} style={{ fontSize:"10px", color:"#aaa", padding:"1px 0" }}>• {e}</div>)}
                              </div>
                            </div>

                            <div style={{ fontSize:"8px", fontWeight:700, color:AM, letterSpacing:"0.06em", marginBottom:"4px" }}>⚙️ CHAINS</div>
                            {tech.chains.map((ch, ci) => (
                              <div key={ci} style={{ padding:"6px 10px", background: ch.score?"#0a1a0a":"#0a0a0a", borderRadius:"6px", marginBottom:"3px", borderLeft:`2px solid ${ch.score?GR:"#333"}` }}>
                                <span style={{ fontSize:"10px", fontWeight:700, color:GR }}>{ch.condition}</span>
                                <span style={{ fontSize:"10px", color:"#6CB4EE", marginLeft:"4px" }}>{ch.then}</span>
                                {ch.score && <span style={{ fontSize:"8px", color:GO, marginLeft:"6px", fontWeight:700 }}>SCORE</span>}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}

        {/* ──── NUTRITION TAB ──── */}
        {tab === "nutrition" && (
          <div>
            <div style={{ display:"flex", gap:"4px", flexWrap:"wrap", marginBottom:"12px" }}>
              {["All","Carnivore","Paleo","Dairy","Quinoa","Rice","Night shift","Day shift"].map(f => (
                <button key={f} onClick={() => setDietFilter(f)} style={{
                  padding:"5px 12px", borderRadius:"6px", fontSize:"9px", fontWeight:600, cursor:"pointer",
                  background: dietFilter===f?"#333":"transparent", border:"1px solid #222",
                  color: dietFilter===f?CR:"#555"
                }}>{f}</button>
              ))}
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"6px" }}>
              {recipes.filter(r => {
                if (dietFilter==="All") return true;
                if (dietFilter==="Quinoa") return r.ingredients?.toLowerCase().includes("quinoa");
                if (dietFilter==="Rice") return r.ingredients?.toLowerCase().includes("rice");
                if (dietFilter==="Night shift") return r.shift?.toLowerCase().includes("night");
                if (dietFilter==="Day shift") return r.shift?.toLowerCase().includes("day");
                return r.diet?.some(d => d.toLowerCase().includes(dietFilter.toLowerCase()));
              }).map((r, i) => (
                <div key={i} style={{ padding:"12px 14px", background:"#111", borderRadius:"10px", border:"1px solid #1a1a1a" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                    <div>
                      <div style={{ fontSize:"13px", fontWeight:700, color:CR }}>{r.name}</div>
                      <div style={{ display:"flex", gap:"4px", marginTop:"3px", flexWrap:"wrap" }}>
                        {r.diet?.map((d,di) => <span key={di} style={{ fontSize:"7px", padding:"1px 5px", borderRadius:"3px", background:`${R}20`, color:R, fontWeight:600 }}>{d}</span>)}
                      </div>
                    </div>
                    <div style={{ textAlign:"right" }}>
                      <div style={{ fontSize:"16px", fontWeight:800, color:R }}>{r.cal}<span style={{ fontSize:"9px", color:MT }}>cal</span></div>
                      <div style={{ fontSize:"8px", color:MT }}>{r.p}P · {r.c}C · {r.f}F</div>
                    </div>
                  </div>
                  <div style={{ fontSize:"10px", color:"#aaa", marginTop:"6px", lineHeight:1.5 }}>{r.ingredients}</div>
                  <div style={{ fontSize:"10px", color:AM, marginTop:"4px" }}>{r.method}</div>
                  <div style={{ display:"flex", justifyContent:"space-between", marginTop:"4px" }}>
                    <span style={{ fontSize:"8px", color:MT }}>⏱ {r.prep}</span>
                    <span style={{ fontSize:"8px", color:GO }}>🔄 {r.shift}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ──── MENTAL HEALTH TAB ──── */}
        {tab === "mental" && (
          <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
            {mentalHealth.map((cat, ci) => (
              <div key={ci} style={{ background:"#111", borderRadius:"12px", border:"1px solid #1a1a1a", overflow:"hidden" }}>
                <div onClick={() => setOpenMH(openMH===ci?null:ci)} style={{ padding:"14px 16px", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                  <div>
                    <div style={{ fontSize:"14px", fontWeight:700, color:CR }}>{cat.category}</div>
                    <div style={{ fontSize:"9px", color:MT }}>{cat.techniques.length} techniques</div>
                  </div>
                  <span style={{ color:MT }}>{openMH===ci?"▼":"▶"}</span>
                </div>
                {openMH===ci && cat.techniques.map((t, ti) => (
                  <div key={ti} style={{ padding:"10px 16px", borderTop:"1px solid #1a1a1a" }}>
                    <div style={{ fontSize:"12px", fontWeight:700, color:CR, marginBottom:"4px" }}>{t.name}</div>
                    <div style={{ fontSize:"11px", color:"#aaa", lineHeight:1.6, marginBottom:"6px" }}>{t.desc}</div>
                    <div style={{ fontSize:"9px", color:GO, padding:"4px 8px", background:`${GO}10`, borderRadius:"5px", display:"inline-block" }}>When: {t.when}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Stats footer */}
        <div style={{ marginTop:"24px", padding:"20px", background:"#111", borderRadius:"14px", border:`1px solid ${R}15` }}>
          <div style={{ fontSize:"9px", letterSpacing:"0.1em", textTransform:"uppercase", color:R, fontWeight:700, marginBottom:"10px" }}>Knowledge Base Stats</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"8px" }}>
            {[
              { val:totalTech, label:"Techniques" },
              { val:totalChains, label:"IF→THEN Chains" },
              { val:recipes.length, label:"Recipes" },
              { val:mentalHealth.reduce((s,c)=>s+c.techniques.length,0), label:"MH Protocols" }
            ].map((s,i) => (
              <div key={i} style={{ textAlign:"center", padding:"8px", background:"#0a0a0a", borderRadius:"8px" }}>
                <div style={{ fontSize:"22px", fontWeight:800, color:R }}>{s.val}</div>
                <div style={{ fontSize:"8px", color:MT }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
