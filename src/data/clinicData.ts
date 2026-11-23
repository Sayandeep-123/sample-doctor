import { AreaOfCare, PatientArticle, FAQItem } from '../types';

export const CLINIC_INFO = {
  name: "Nivaan Physiotherapy & Movement Clinic",
  shortName: "Nivaan Physio",
  tagline: "Measured Care. Restored Movement.",
  subTagline: "Individualised, evidence-informed physiotherapy and rehabilitation for everyday functional independence.",
  phone: "+91 98200 00000",
  displayPhone: "+91 (0) 22 2500 0000",
  whatsapp: "+91 98200 00000",
  email: "care@nivaanphysio-demo.in",
  address: "Suite 204, Vriksh Commercial Center, Link Road, Central Suburbs, Mumbai 400078",
  landmark: "Opposite Green Valley Garden, 5 minutes from suburban rail station",
  hours: {
    weekdays: "8:30 AM – 7:30 PM",
    saturday: "8:30 AM – 2:00 PM",
    sunday: "Closed (Prior emergency consultations only)"
  },
  note: "All sessions are conducted by prior appointment to guarantee uninterrupted, dedicated one-on-one time."
};

export const AREAS_OF_CARE: AreaOfCare[] = [
  {
    id: "musculoskeletal",
    title: "Musculoskeletal Rehabilitation",
    tagline: "Targeted recovery for muscle strains, joint stiffness, and chronic movement restrictions.",
    description: "Addressing conditions affecting muscles, tendons, ligaments, and spinal joints. Care begins with functional movement analysis to identify contributing biomechanical factors rather than treating symptoms in isolation.",
    typicalConcerns: [
      "Neck, mid-back, and lumbar stiffness",
      "Shoulder impingement and rotator cuff strain",
      "Knee discomfort during stairs or walking",
      "Repetitive strain and work-related tendon irritation"
    ],
    clinicalFocus: [
      "Kinematic joint assessment and movement pattern evaluation",
      "Graded active resistance and mobility exercises",
      "Targeted manual therapy techniques when appropriate",
      "Workplace posture adaptation and load management"
    ],
    icon: "Activity",
    badge: "Core Service"
  },
  {
    id: "orthopaedic",
    title: "Orthopaedic Rehabilitation",
    tagline: "Structured physical conditioning for joint health, chronic wear, and structural stability.",
    description: "Specialised physical therapy for degenerative joint conditions, ligament injuries, and conservative non-surgical management. We focus on restoring joint mechanics, muscular balance, and confidence in daily loading.",
    typicalConcerns: [
      "Early to moderate knee or hip osteoarthritis",
      "Ankle instability following recurrent sprains",
      "Meniscal and ligamentous conservative recovery",
      "Spinal disc-related nerve irritation and stiffness"
    ],
    clinicalFocus: [
      "Load tolerance rebuilding and closed-chain stability",
      "Proprioception, balance, and neuromuscular re-education",
      "Education on tissue recovery timelines and safe activity limits",
      "Guided return to recreational activities and daily routines"
    ],
    icon: "ShieldAlert"
  },
  {
    id: "post-operative",
    title: "Post-Operative Rehabilitation",
    tagline: "Phase-specific, measured recovery protocols aligned with surgical directives.",
    description: "Carefully structured recovery following elective orthopaedic procedures, arthroscopies, and fracture fixations. We coordinate with your operating surgeon’s protocol to safely progress from initial tissue protection to functional restoration.",
    typicalConcerns: [
      "ACL and meniscal repair rehabilitation",
      "Total or partial knee / hip joint replacements",
      "Rotator cuff surgical repairs and shoulder stabilisations",
      "Post-fracture stiffness and muscular re-conditioning"
    ],
    clinicalFocus: [
      "Phase-specific range of motion and swelling management",
      "Safe progressive strength restoration without overloading grafts",
      "Gait retraining and weight-bearing progression",
      "Milestone-based testing prior to returning to higher impact"
    ],
    icon: "HeartPulse",
    badge: "Phase-Specific"
  },
  {
    id: "pain-mobility",
    title: "Pain & Mobility Management",
    tagline: "Evidence-informed strategies for persistent discomfort and cautious movement.",
    description: "Longstanding pain often leads to compensatory habits, fear of movement, and reduced endurance. We combine modern pain neuroscience education with gentle, graded movement to help recalibrate your body's sensitivity.",
    typicalConcerns: [
      "Persistent non-specific lower back discomfort",
      "Recurrent tension headaches associated with cervical tension",
      "Post-injury hypersensitivity and movement apprehension",
      "Widespread joint stiffness associated with sedentary routines"
    ],
    clinicalFocus: [
      "Pain science education to demystify discomfort",
      "Pacing strategies to avoid flare-and-crash cycles",
      "Gentle desensitisation and non-threatening movement drills",
      "Building confidence in bending, lifting, and everyday reach"
    ],
    icon: "Smile"
  },
  {
    id: "posture-movement",
    title: "Posture & Movement Education",
    tagline: "Practical movement adaptations for urban professionals and repetitive work demands.",
    description: "Rather than forcing rigid, artificial 'straight-backed' postures, we help you understand movement variability, ergonomic workstation setup, and realistic movement micro-breaks that counter long hours at a screen.",
    typicalConcerns: [
      "Forward head posture and upper back fatigue",
      "Prolonged desk-sitting discomfort and hip flexor tightness",
      "Repetitive wrist and forearm strain from mouse/keyboard use",
      "Fatigue during long city commutes and standing"
    ],
    clinicalFocus: [
      "Personalised ergonomic assessment for home and office desks",
      "Thoracic spine and ribcage mobility routines",
      "Breathing pattern and postural muscle endurance",
      "Realistic micro-movement habits that fit busy workdays"
    ],
    icon: "Compass"
  },
  {
    id: "clinical-techniques",
    title: "Adjunctive Clinical Modalities",
    tagline: "Supportive hands-on techniques integrated within an active rehabilitation framework.",
    description: "When clinically justified, manual techniques, therapeutic taping, or myofascial release are used as supportive adjuncts to create a window of reduced discomfort, enabling more effective active movement.",
    typicalConcerns: [
      "Acute muscular spasm or protective guarding",
      "Localized trigger point tenderness impeding active range",
      "Joint translation restrictions requiring gentle mobilisation",
      "Proprioceptive feedback needs during functional retraining"
    ],
    clinicalFocus: [
      "Joint mobilisation and manual traction techniques",
      "Targeted myofascial release and soft tissue mobilisation",
      "Therapeutic and functional taping for sensory cueing",
      "Breath-coordinated movement for muscular down-regulation"
    ],
    icon: "Sparkles"
  }
];

export const PATIENT_JOURNEY = [
  {
    step: "01",
    title: "In-Depth Conversation & Assessment",
    subtitle: "We start by listening, not assuming.",
    duration: "45–60 Minutes",
    description: "A comprehensive initial evaluation covering your physical history, current movement limitations, daily demands, and previous care. We conduct targeted movement screenings, range of motion tests, and joint assessments.",
    deliverable: "Clear identification of functional contributors and baseline metrics."
  },
  {
    step: "02",
    title: "Understanding Your Real-World Goals",
    subtitle: "Defining recovery in your terms.",
    duration: "Collaborative Focus",
    description: "Recovery means different things to different people: for one, it is climbing three flights of stairs without knee pain; for another, it is sitting through a four-hour work block or returning to weekend cricket.",
    deliverable: "Agreed functional benchmarks and realistic timeline expectations."
  },
  {
    step: "03",
    title: "Structured, Personalised Rehabilitation",
    subtitle: "Evidence-informed, active intervention.",
    duration: "Dedicated 1-on-1 Sessions",
    description: "Your plan combines targeted exercise therapy, movement re-education, and supportive hands-on clinical techniques. Every exercise is demonstrated, coached, and adjusted for correct mechanics and load tolerance.",
    deliverable: "Custom home & workplace movement routine with clear visual guides."
  },
  {
    step: "04",
    title: "Review & Guided Independence",
    subtitle: "Empowering you to maintain your movement health.",
    duration: "Long-term Resilience",
    description: "As your symptoms stabilize and functional strength improves, we taper clinical sessions. We teach self-management strategies, warning signs of fatigue, and progressive strength exercises to protect your gains.",
    deliverable: "An ongoing independent maintenance roadmap."
  }
];

export const PRACTITIONER_PROFILE = {
  name: "Dr. Neha Kulkarni, PT",
  role: "Lead Physiotherapist & Founder",
  credentials: "M.P.Th (Musculoskeletal Physiotherapy) • B.P.Th",
  registration: "Reg. Maharashtra State Council for OT/PT (Illustrative Reference)",
  experience: "Over 8 years of clinical experience in orthopaedic assessment, movement rehabilitation, and private outpatient care.",
  image: "https://images.pexels.com/photos/7904416/pexels-photo-7904416.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  bio: [
    "I established Nivaan with a clear clinical priority: to provide thoughtful, unhurried, one-on-one physiotherapy care where patients are actively involved in their recovery rather than passively treated.",
    "Having practiced across multidisciplinary outpatient centres and acute rehabilitation facilities, I saw how frequently patients were given standard generic exercise photocopies without an understanding of their actual daily postures, commute stress, and lifestyle goals.",
    "My clinical practice emphasises careful movement assessment, biomechanical education, and progressive loading. Every treatment plan is co-created with the patient to ensure it is achievable, clinically reasoned, and focused on sustainable independence."
  ],
  clinicalInterests: [
    "Spine and peripheral joint kinematics",
    "Post-operative orthopaedic rehabilitation pathways",
    "Myofascial release and supportive therapeutic taping",
    "Ergonomic movement analysis for desk-bound professionals"
  ],
  quote: "Effective rehabilitation is not about creating lifelong dependence on a clinic. It is about equipping you with the movement knowledge, physical resilience, and confidence to live independently."
};

export const PATIENT_ARTICLES: PatientArticle[] = [
  {
    id: "posture-and-movement",
    title: "Understanding Posture and Everyday Movement in Urban Life",
    category: "Movement Health",
    readTime: "4 min read",
    summary: "Why the idea of 'one perfect posture' is a clinical myth, and why movement variability matters far more than sitting rigidly straight.",
    image: "https://images.pexels.com/photos/5793651/pexels-photo-5793651.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    fullContent: {
      intro: "For decades, patients have been told that slouching is the sole root of back and neck discomfort. However, contemporary musculoskeletal research reveals a more nuanced reality: our spines are resilient structures built for movement, not statues meant to be locked in static alignment.",
      keyTakeaways: [
        "Your 'best posture' is simply your next posture — regular position changes are crucial.",
        "Prolonged static posture, even when 'straight', causes tissue fatigue and reduced local circulation.",
        "Simple 2-minute movement micro-breaks every 45 minutes provide significant relief.",
        "Ergonomic equipment supports you, but active mobility drills remain irreplaceable."
      ],
      sections: [
        {
          heading: "The Myth of the Single Correct Sitting Position",
          body: "When people try to sit 'perfectly straight', they often over-activate their spinal erectors and hold their breath. Within 15 minutes, muscle fatigue sets in, leading to compensatory tension in the upper trapezius and mid-back. What the body actually craves is movement variability."
        },
        {
          heading: "Practical Adjustments for Desk Workers",
          body: "Rather than spending on expensive equipment alone, begin by setting up your primary screen at eye level and keeping elbows comfortably supported near 90 degrees. More importantly, schedule micro-breaks: gentle thoracic extensions, shoulder rolls, and brief standing breaks between calls."
        }
      ],
      conclusion: "If persistent stiffness persists despite positional adjustments, an individualized assessment can help determine whether thoracic joint hypomobility, hip flexor tightness, or muscular deconditioning are contributing factors."
    }
  },
  {
    id: "what-to-expect-assessment",
    title: "What to Expect During Your Initial Physiotherapy Assessment",
    category: "Clinical Process",
    readTime: "5 min read",
    summary: "A transparent guide to your first appointment: what happens, how tests are conducted, and why we listen before we intervene.",
    image: "https://images.pexels.com/photos/20860616/pexels-photo-20860616.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    fullContent: {
      intro: "Visiting a physiotherapy clinic for the first time can sometimes feel intimidating if you do not know what will take place. At Nivaan, your initial consultation is designed to be a collaborative dialogue coupled with gentle physical evaluation.",
      keyTakeaways: [
        "Wear comfortable, loose clothing that allows joint mobility (e.g., track pants or shorts).",
        "Bring along any recent imaging reports or doctor's prescriptions if you have them.",
        "We prioritize understanding your specific functional roadblocks, not just pain scores.",
        "You will receive an initial working explanation and a manageable home movement plan."
      ],
      sections: [
        {
          heading: "Step 1: Clinical History & Lifestyle Context",
          body: "We begin with a seated discussion exploring how and when your symptoms began, what activities aggravate or ease them, and what goals matter most to you. We review your medical history and previous treatments."
        },
        {
          heading: "Step 2: Physical Movement Screening",
          body: "We assess your active range of motion, muscle strength, joint mobility, and relevant neurological checks (such as reflexes or sensory tests when indicated). We observe functional tasks like squatting, reaching, or walking."
        },
        {
          heading: "Step 3: Collaborative Action Plan",
          body: "Before you leave, we explain our clinical reasoning in plain language, answer all your questions, and initiate 1 to 2 targeted movements so you can begin gentle recovery right away."
        }
      ],
      conclusion: "A thorough assessment sets the foundation for efficient recovery, ensuring that clinical time is spent on interventions tailored to your specific biomechanics."
    }
  },
  {
    id: "individualised-rehab-plans",
    title: "Why Rehabilitation Plans Must Reflect Individual Needs",
    category: "Rehab Principles",
    readTime: "4 min read",
    summary: "Two individuals with the same diagnosis can require completely different rehabilitation strategies. Here is why bespoke planning is essential.",
    image: "https://images.pexels.com/photos/20860617/pexels-photo-20860617.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    fullContent: {
      intro: "In conventional healthcare settings, two patients presenting with 'subacromial shoulder pain' or 'L4-L5 lumbar disc bulge' might receive identical generic printouts of five standard exercises. While well-intentioned, this one-size-fits-all approach often fails.",
      keyTakeaways: [
        "A sedentary accountant and a weekend runner have vastly different joint load profiles.",
        "Tissue healing stages dictate whether rest, gentle mobility, or progressive load is warranted.",
        "Patient confidence and psychological reassurance directly influence movement recovery.",
        "Regular progression updates ensure your body continues adapting without plateauing."
      ],
      sections: [
        {
          heading: "The Difference in Functional Demands",
          body: "A mother lifting a toddler requires rotational core endurance and upper limb strength, whereas an IT executive sitting for 9 hours requires hip extension mobility and postural endurance. Replicating the same routine for both ignores their distinct daily biomechanical stressors."
        },
        {
          heading: "Dosage, Progression, and Load Tolerance",
          body: "Exercise in physiotherapy acts as physical medicine: the dosage (repetitions, resistance, frequency, rest intervals) must be calibrated to your current tissue tolerance. Too little load produces no adaptation; too much load risks symptom flare-ups."
        }
      ],
      conclusion: "By tailoring the exercise prescription and adjusting it as you advance, rehabilitation remains safe, effective, and directly applicable to your everyday life."
    }
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "first-appointment",
    category: "first-visit",
    question: "What happens during my first appointment at the clinic?",
    answer: "Your initial session is a dedicated 45 to 60-minute one-on-one consultation. We begin with a detailed discussion of your symptoms, medical history, and daily activities, followed by an active movement screening and joint assessment. We will explain our findings in clear language and initiate your first gentle exercise strategies."
  },
  {
    id: "doctor-referral",
    category: "appointments",
    question: "Do I need a doctor's referral to book a consultation?",
    answer: "In India, you can consult a qualified physiotherapist directly without an initial doctor's referral. However, if you have already consulted an orthopaedic specialist, general physician, or have existing X-rays, MRI scans, or surgical notes, please bring them along as they provide valuable context for your rehabilitation plan."
  },
  {
    id: "session-duration",
    category: "first-visit",
    question: "How long does a typical physiotherapy session take?",
    answer: "Initial evaluations typically take 45 to 60 minutes to ensure comprehensive assessment and dialogue. Follow-up rehabilitation sessions generally range from 40 to 50 minutes, depending on the phase of your recovery and whether active exercise or hands-on manual techniques are being prioritised."
  },
  {
    id: "enquire-before-booking",
    category: "appointments",
    question: "Can I enquire about my condition before committing to an appointment?",
    answer: "Yes, absolutely. We encourage prospective patients to send a preliminary enquiry via our website form or WhatsApp. You can outline your broad concern, and we will clarify whether our scope of physiotherapy care is appropriate for your situation."
  },
  {
    id: "clothing-preparation",
    category: "first-visit",
    question: "What should I wear or bring to my physiotherapy session?",
    answer: "Please wear comfortable, loose-fitting clothing that allows easy movement and lets us examine the relevant joint or muscle area (such as shorts for knee/hip concerns, or a loose T-shirt or tank top for shoulder/neck evaluations). If you use walking aids or braces, please bring them along."
  },
  {
    id: "number-of-sessions",
    category: "rehabilitation",
    question: "How many sessions will I need before I see improvement?",
    answer: "Because tissue healing and movement recovery depend on factors such as condition chronicity, overall health, and adherence to home movement guidance, session frequency varies. During your initial assessment, we provide an estimated timeframe with defined milestone check-ins, prioritising your progression toward self-management rather than open-ended visits."
  }
];
