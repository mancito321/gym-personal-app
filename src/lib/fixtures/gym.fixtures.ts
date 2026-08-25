import type { ExerciseDocument } from "@/lib/schemas/exercise.schema";
import type { TrainingPlanDocument } from "@/lib/schemas/routine.schema";

export const dummyExercises: Omit<ExerciseDocument, "_id">[] = [
  {
    type: "exercise",
    name: "goblet-squat",
    description:
      "A squat variation used to develop the quadriceps, glutes, trunk stability, and comfortable squat depth.",
    howTo:
      "Hold one dumbbell or kettlebell close to the chest. Stand approximately shoulder-width apart. Brace the abdomen, sit between the hips, and keep the knees tracking in the direction of the toes. Descend only as far as you can maintain control, then drive through the entire foot to stand.",
  },
  {
    type: "exercise",
    name: "dumbbell-bench-press",
    description:
      "A horizontal pressing exercise for the chest, front deltoids, and triceps.",
    howTo:
      "Lie on a bench with the feet firmly planted. Pull the shoulder blades gently back and down. Lower the dumbbells under control until the upper arms are near or slightly below parallel with the floor. Press upward without allowing the shoulders to roll forward.",
  },
  {
    type: "exercise",
    name: "chest-supported-dumbbell-row",
    description:
      "A supported rowing movement for the upper back, lats, rear deltoids, and elbow flexors.",
    howTo:
      "Lie chest-down on an inclined bench. Begin with the arms extended. Pull the dumbbells toward the lower ribs while keeping the chest against the bench. Pause briefly, then lower under control without shrugging.",
  },
  {
    type: "exercise",
    name: "dumbbell-romanian-deadlift",
    description:
      "A hip-hinge exercise for the hamstrings, glutes, spinal erectors, and trunk.",
    howTo:
      "Hold the dumbbells beside the thighs. Keep a soft bend in the knees and push the hips backward while maintaining a neutral spine. Lower until a strong hamstring stretch is felt without rounding the back. Drive the hips forward to stand.",
  },
  {
    type: "exercise",
    name: "cable-lateral-raise",
    description:
      "An isolation exercise emphasizing the side deltoids to improve shoulder width.",
    howTo:
      "Stand beside a low cable and hold the handle with the outside hand. Raise the arm slightly forward of the torso until approximately shoulder height. Keep the shoulder relaxed and lower slowly. Use a load that allows controlled repetitions without swinging.",
  },
  {
    type: "exercise",
    name: "dead-bug",
    description:
      "A core-stability exercise that trains abdominal control while the arms and legs move.",
    howTo:
      "Lie on the back with the hips and knees bent to approximately 90 degrees. Gently press the lower back toward the floor. Extend the opposite arm and leg without losing trunk position. Return and alternate sides.",
  },
  {
    type: "exercise",
    name: "incline-treadmill-walk",
    description:
      "Low-impact cardiovascular work used to increase energy expenditure and aerobic conditioning.",
    howTo:
      "Walk at a pace and incline that raises the heart rate while allowing steady breathing. Avoid holding the rails. Use a speed that can be sustained for the full prescribed duration.",
  },
  {
    type: "exercise",
    name: "zone-2-cardio",
    description:
      "Steady aerobic training performed at a sustainable conversational intensity.",
    howTo:
      "Use a treadmill, stationary bicycle, elliptical, or similar modality. Maintain an effort of approximately 3-4 out of 10. You should be able to speak in complete sentences but should feel that you are exercising.",
  },
  {
    type: "exercise",
    name: "bouldering-session",
    description:
      "A climbing session emphasizing technique, pulling strength, grip, mobility, and body awareness.",
    howTo:
      "Warm up thoroughly before difficult problems. Begin with easy climbs and gradually increase difficulty. Emphasize quiet feet, controlled hips, straight-arm positions when possible, and efficient movement. Avoid excessive repeated maximal attempts when fingers or elbows feel fatigued.",
  },
  {
    type: "exercise",
    name: "leg-press",
    description:
      "A machine-based lower-body exercise emphasizing the quadriceps and glutes.",
    howTo:
      "Place the feet at a comfortable width on the platform. Lower the platform until the knees reach a controlled depth without the pelvis rolling away from the pad. Press through the feet without locking the knees aggressively.",
  },
  {
    type: "exercise",
    name: "lat-pulldown",
    description:
      "A vertical pulling movement for the lats, upper back, and elbow flexors.",
    howTo:
      "Sit securely with the thighs under the pad. Begin with the arms extended and shoulders controlled. Pull the bar toward the upper chest while driving the elbows downward. Avoid leaning excessively backward or pulling behind the neck.",
  },
  {
    type: "exercise",
    name: "incline-dumbbell-bench-press",
    description:
      "An incline pressing exercise emphasizing the upper chest, front deltoids, and triceps.",
    howTo:
      "Set the bench to a low or moderate incline. Keep the feet planted and shoulder blades stable. Lower the dumbbells toward the upper chest, then press upward while maintaining wrist and elbow control.",
  },
  {
    type: "exercise",
    name: "bulgarian-split-squat",
    description:
      "A unilateral lower-body exercise for the quadriceps, glutes, balance, and hip stability.",
    howTo:
      "Place the rear foot on a low bench and establish a stable front-foot position. Lower the rear knee toward the floor while keeping most of the load through the front leg. Drive through the front foot to return. Use support for balance when necessary.",
  },
  {
    type: "exercise",
    name: "cable-face-pull",
    description:
      "An upper-back and rear-deltoid exercise that supports shoulder positioning and posture.",
    howTo:
      "Set a rope attachment near face height. Pull the rope toward the face while separating the hands and keeping the elbows elevated. Finish with the shoulder blades gently retracted without arching the lower back.",
  },
  {
    type: "exercise",
    name: "pallof-press",
    description:
      "An anti-rotation core exercise that develops trunk stability.",
    howTo:
      "Stand perpendicular to a cable or resistance band. Hold the handle at the chest and step away to create tension. Press the hands directly forward without allowing the torso to rotate. Pause, return, and repeat before changing sides.",
  },
  {
    type: "exercise",
    name: "recovery-walk",
    description:
      "Low-intensity walking used to support recovery, daily activity, and energy expenditure.",
    howTo:
      "Walk at an easy, comfortable pace. Maintain relaxed breathing and an upright posture. The session should not create meaningful fatigue.",
  },
  {
    type: "exercise",
    name: "hip-thrust",
    description: "A hip-extension exercise emphasizing the glutes.",
    howTo:
      "Position the upper back against a bench and place the load securely across the hips. Brace the trunk and drive through the feet until the hips are extended. Avoid excessive lower-back arching at the top. Lower under control.",
  },
  {
    type: "exercise",
    name: "seated-cable-row",
    description:
      "A horizontal pulling exercise for the lats, middle back, rear deltoids, and arms.",
    howTo:
      "Sit tall with the torso stable. Pull the handle toward the lower ribs while drawing the elbows backward. Pause without shrugging, then extend the arms under control while maintaining an upright torso.",
  },
  {
    type: "exercise",
    name: "machine-shoulder-press",
    description:
      "A supported vertical pressing exercise for the deltoids and triceps.",
    howTo:
      "Adjust the seat so the handles begin near shoulder height. Keep the back supported and ribs controlled. Press upward without aggressively locking the elbows, then lower through a comfortable range.",
  },
  {
    type: "exercise",
    name: "seated-leg-curl",
    description: "A knee-flexion exercise emphasizing the hamstrings.",
    howTo:
      "Adjust the machine so the knee joint aligns with the machine pivot. Secure the thigh pad and curl the lower legs downward. Pause briefly, then return slowly without allowing the weight stack to slam.",
  },
  {
    type: "exercise",
    name: "standing-calf-raise",
    description:
      "An exercise for the gastrocnemius and other plantar-flexor muscles.",
    howTo:
      "Stand with the balls of the feet supported and heels free to move. Lower the heels under control, then rise as high as possible onto the toes. Pause at the top and avoid bouncing.",
  },
  {
    type: "exercise",
    name: "dumbbell-hammer-curl",
    description:
      "An arm exercise targeting the biceps, brachialis, and forearms.",
    howTo:
      "Hold the dumbbells with the palms facing inward. Keep the elbows near the torso and curl without swinging. Lower slowly until the elbows are extended.",
  },
  {
    type: "exercise",
    name: "rope-triceps-pushdown",
    description: "An isolation exercise for the triceps.",
    howTo:
      "Stand facing a high cable with the elbows close to the torso. Extend the elbows and separate the rope slightly at the bottom. Return under control without allowing the shoulders to roll forward.",
  },
  {
    type: "exercise",
    name: "side-plank",
    description:
      "A lateral core-stability exercise for the obliques, glute medius, and shoulder stabilizers.",
    howTo:
      "Support the body on one forearm and the sides of the feet or knees. Raise the hips until the body forms a straight line. Keep the ribs and pelvis stacked and breathe normally.",
  },
  {
    type: "exercise",
    name: "cat-cow",
    description: "A controlled spinal mobility drill.",
    howTo:
      "Begin on hands and knees. Slowly alternate between rounding and gently extending the spine. Move one segment at a time where possible and avoid forcing the neck.",
  },
  {
    type: "exercise",
    name: "worlds-greatest-stretch",
    description:
      "A dynamic mobility drill for the hips, hamstrings, thoracic spine, and shoulders.",
    howTo:
      "Step into a long lunge and place both hands inside the lead foot. Rotate the arm nearest the lead leg toward the ceiling. Return the hand, shift the hips backward briefly, then change sides.",
  },
  {
    type: "exercise",
    name: "bodyweight-squat",
    description:
      "A dynamic squat used to prepare the hips, knees, ankles, and trunk for training.",
    howTo:
      "Stand at a comfortable width and squat through a controlled range. Keep the entire foot in contact with the floor and allow the knees to track with the toes.",
  },
  {
    type: "exercise",
    name: "band-pull-apart",
    description: "A light upper-back and rear-deltoid activation exercise.",
    howTo:
      "Hold a light resistance band at shoulder height. Pull the band apart until the arms form a straight line with the torso. Keep the ribs down and return slowly.",
  },
  {
    type: "exercise",
    name: "wall-slide",
    description:
      "A shoulder and upper-back mobility drill that encourages controlled overhead movement.",
    howTo:
      "Stand with the back near a wall and maintain gentle abdominal tension. Slide the arms upward while keeping the shoulders controlled. Use only a range that does not require excessive lower-back arching.",
  },
  {
    type: "exercise",
    name: "wrist-circles",
    description: "A gentle wrist warm-up for climbing and upper-body training.",
    howTo:
      "Move the wrists slowly through comfortable circles in both directions. Keep the movement controlled and pain-free.",
  },
  {
    type: "exercise",
    name: "finger-tendon-glides",
    description: "A low-intensity hand and finger preparation drill.",
    howTo:
      "Move gradually between an open hand, hook fist, full fist, and straight fist. Perform each position gently without applying external force.",
  },
  {
    type: "exercise",
    name: "scapular-pull-up",
    description:
      "A climbing-specific shoulder-blade exercise performed without bending the elbows.",
    howTo:
      "Hang from a secure bar with the elbows straight. Draw the shoulders slightly down and away from the ears to lift the body a small distance. Pause, then return to a relaxed but controlled hang.",
  },
  {
    type: "exercise",
    name: "couch-stretch",
    description: "A hip-flexor and quadriceps stretch.",
    howTo:
      "Kneel with one shin near a wall or bench and place the opposite foot forward. Gently tuck the pelvis and move the hips forward without arching the lower back. Hold for 30-60 seconds per side.",
  },
  {
    type: "exercise",
    name: "half-kneeling-hip-flexor-stretch",
    description: "A controlled stretch for the hip flexors.",
    howTo:
      "Begin in a half-kneeling position. Gently tuck the pelvis and shift forward until a stretch is felt at the front of the rear hip. Keep the ribs stacked over the pelvis.",
  },
  {
    type: "exercise",
    name: "seated-hamstring-fold",
    description: "A hamstring flexibility exercise.",
    howTo:
      "Sit with one or both legs extended. Hinge forward from the hips while keeping the spine long. Stop before the lower back rounds aggressively. Hold for 30-60 seconds.",
  },
  {
    type: "exercise",
    name: "frog-stretch",
    description: "An adductor and inner-hip flexibility exercise.",
    howTo:
      "Begin on hands and knees and gradually move the knees apart. Keep the lower legs roughly aligned with the knees. Shift the hips backward gently until an inner-thigh stretch is felt.",
  },
  {
    type: "exercise",
    name: "deep-squat-hold",
    description: "A mobility position for the hips, knees, ankles, and trunk.",
    howTo:
      "Descend into a comfortable squat and hold a stable position. Keep the feet grounded and use a support if necessary. Do not force depth or remain in a painful position.",
  },
  {
    type: "exercise",
    name: "doorway-chest-stretch",
    description: "A stretch for the pectoral muscles and front of the shoulders.",
    howTo:
      "Place the forearm against a doorway with the elbow near or below shoulder height. Step forward and rotate gently away until a stretch is felt across the chest.",
  },
  {
    type: "exercise",
    name: "childs-pose-lat-stretch",
    description: "A stretch for the lats, shoulders, and upper back.",
    howTo:
      "Sit the hips toward the heels with the arms extended. Walk the hands slightly to one side to emphasize the opposite lat. Breathe slowly and avoid forcing the shoulders.",
  },
  {
    type: "exercise",
    name: "thoracic-rotation",
    description: "A controlled rotation drill for the upper spine.",
    howTo:
      "Begin on hands and knees or in a side-lying position. Rotate through the upper back while keeping the pelvis relatively stable. Follow the moving hand with the eyes.",
  },
  {
    type: "exercise",
    name: "knee-to-wall-ankle-mobility",
    description: "An ankle dorsiflexion mobility drill.",
    howTo:
      "Stand facing a wall with the foot flat. Drive the knee toward the wall while keeping the heel grounded and the knee aligned with the toes. Move the foot farther away as mobility improves.",
  },
  {
    type: "exercise",
    name: "wrist-flexor-stretch",
    description: "A forearm and wrist stretch useful after climbing.",
    howTo:
      "Extend one arm with the palm facing upward. Gently use the opposite hand to move the fingers and palm downward until a mild stretch is felt in the forearm.",
  },
  {
    type: "exercise",
    name: "wrist-extensor-stretch",
    description: "A stretch for the muscles on the back of the forearm.",
    howTo:
      "Extend one arm with the palm facing downward. Gently flex the wrist with the opposite hand until a mild stretch is felt along the upper forearm.",
  },
  {
    type: "exercise",
    name: "dead-hang",
    description:
      "A hanging drill for grip, lats, and comfortable overhead shoulder positioning.",
    howTo:
      "Hang from a secure bar using a comfortable grip. Keep enough shoulder tension to avoid an uncomfortable joint position. Stop if the shoulders, elbows, or fingers become painful.",
  },
  {
    type: "exercise",
    name: "barbell-bench-press",
    description:
      "A horizontal compound press for the chest, anterior deltoids and triceps.",
    howTo:
      "Lie with the feet firmly planted and shoulder blades gently retracted. Grip the bar slightly wider than shoulder width. Lower the bar under control toward the lower-to-mid chest while maintaining stable wrists and elbows. Press upward without allowing the shoulders to roll forward.",
  },
  {
    type: "exercise",
    name: "standing-overhead-press",
    description:
      "A vertical compound press for the shoulders, triceps and trunk stabilizers.",
    howTo:
      "Stand with the feet stable and brace the abdomen. Begin with the bar or dumbbells near shoulder height. Press overhead while keeping the ribs controlled and avoiding excessive lower-back extension. Finish with the load stacked over the shoulders.",
  },
  {
    type: "exercise",
    name: "chest-supported-row",
    description:
      "A horizontal pulling exercise for the middle back, lats, rear deltoids and arms.",
    howTo:
      "Support the chest against an inclined bench or machine pad. Begin with the arms extended. Pull the elbows backward toward the lower ribs. Pause briefly, then lower under control without shrugging.",
  },
  {
    type: "exercise",
    name: "incline-dumbbell-curl",
    description: "A biceps-focused exercise emphasizing a long muscle length.",
    howTo:
      "Sit on an inclined bench with the arms hanging naturally. Curl the dumbbells without moving the upper arms forward. Squeeze briefly near the top and lower slowly.",
  },
  {
    type: "exercise",
    name: "cable-triceps-pushdown",
    description: "An isolation exercise for the triceps.",
    howTo:
      "Keep the elbows close to the torso. Extend the elbows until the arms are straight without aggressively locking them. Return slowly while keeping the upper arms mostly stationary.",
  },
  {
    type: "exercise",
    name: "front-plank",
    description: "An isometric core exercise for trunk and pelvic stability.",
    howTo:
      "Support the body on the forearms and toes. Keep the body in a straight line. Brace the abdomen and glutes while avoiding sagging hips or excessive rounding.",
  },
  {
    type: "exercise",
    name: "back-squat",
    description:
      "A compound lower-body exercise emphasizing the quadriceps, glutes and trunk.",
    howTo:
      "Place the bar securely across the upper back. Brace the trunk, descend by bending the knees and hips, and maintain the feet firmly on the floor. Descend only as far as you can preserve control and spinal position, then drive upward.",
  },
  {
    type: "exercise",
    name: "romanian-deadlift",
    description:
      "A hip-hinge exercise emphasizing the hamstrings, glutes and posterior chain.",
    howTo:
      "Begin standing with the load close to the thighs. Maintain a soft knee bend and push the hips backward. Lower while keeping the spine neutral until a strong hamstring stretch is felt. Drive the hips forward to stand.",
  },
  {
    type: "exercise",
    name: "walking-lunge",
    description:
      "A unilateral lower-body movement for the quadriceps, glutes and balance.",
    howTo:
      "Step forward into a controlled lunge. Lower the rear knee toward the floor while keeping the front foot stable. Push through the front foot and continue into the next step.",
  },
  {
    type: "exercise",
    name: "hanging-knee-raise",
    description:
      "A hanging core exercise emphasizing abdominal control and hip flexion.",
    howTo:
      "Hang from a secure bar. Brace the trunk and raise the knees toward the chest without excessive swinging. Lower slowly and regain control between repetitions.",
  },
  {
    type: "exercise",
    name: "rear-delt-fly",
    description: "An isolation exercise for the rear deltoids and upper back.",
    howTo:
      "Begin with the arms in front of the torso. Move the arms outward while keeping a slight elbow bend. Stop when the upper arms align approximately with the torso and return under control.",
  },
  {
    type: "exercise",
    name: "overhead-rope-triceps-extension",
    description:
      "A triceps exercise emphasizing the long head in an overhead position.",
    howTo:
      "Face away from a cable with the rope behind the head. Keep the upper arms relatively stable and extend the elbows. Return slowly through a comfortable stretch.",
  },
  {
    type: "exercise",
    name: "ab-wheel",
    description: "An advanced anti-extension core exercise.",
    howTo:
      "Begin from the knees. Brace the abdomen and slowly roll forward while keeping the ribs and pelvis controlled. Stop before the lower back begins to arch, then pull back to the starting position.",
  },
  {
    type: "exercise",
    name: "leg-extension",
    description: "A quadriceps isolation exercise.",
    howTo:
      "Adjust the machine for comfortable knee alignment. Extend the knees until nearly straight. Pause briefly, then lower slowly without allowing the weight to drop.",
  },
  {
    type: "exercise",
    name: "pigeon-stretch",
    description: "A glute and hip external-rotation flexibility exercise.",
    howTo:
      "Bring one leg forward with the knee bent and extend the opposite leg backward. Keep the pelvis as square as practical and lean forward gradually.",
  },
  {
    type: "exercise",
    name: "butterfly-stretch",
    description: "A groin and hip flexibility exercise.",
    howTo:
      "Sit with the soles of the feet together. Allow the knees to move gently toward the floor while maintaining an upright torso.",
  },
  {
    type: "subplan",
    name: "full-body-dynamic-warmup",
    description:
      "An 8-10 minute dynamic warm-up for full-body strength sessions.",
    exercises: [
      "cat-cow",
      "worlds-greatest-stretch",
      "bodyweight-squat",
      "band-pull-apart",
      "wall-slide",
    ],
    comments:
      "Begin with 3-5 minutes of easy walking or cycling. Perform cat-cow for 8 repetitions, world's greatest stretch for 4-5 repetitions per side, bodyweight squat for 10 repetitions, band pull-apart for 15 repetitions, and wall slide for 8-10 repetitions. Follow with 2-4 progressively heavier warm-up sets for the first compound exercise.",
  },
  {
    type: "subplan",
    name: "climbing-warmup",
    description:
      "A climbing-specific warm-up for fingers, wrists, shoulders, hips, and movement technique.",
    exercises: [
      "wrist-circles",
      "finger-tendon-glides",
      "band-pull-apart",
      "scapular-pull-up",
      "deep-squat-hold",
    ],
    comments:
      "Perform wrist circles for 20-30 seconds in each direction, tendon glides for 5 controlled cycles, band pull-aparts for 2 x 12-15, scapular pull-ups for 2 x 5-8, and a supported deep squat hold for 30 seconds. Then complete several very easy boulder problems before attempting harder climbs.",
  },
  {
    type: "subplan",
    name: "posture-and-mobility-routine",
    description:
      "A short routine for shoulder positioning, thoracic mobility, hip flexors, and trunk posture.",
    exercises: [
      "band-pull-apart",
      "wall-slide",
      "thoracic-rotation",
      "half-kneeling-hip-flexor-stretch",
      "dead-hang",
    ],
    comments:
      "Perform band pull-aparts for 2 x 15-20, wall slides for 2 x 8-12, thoracic rotations for 8 per side, hip-flexor stretch for 30-45 seconds per side, and dead hangs for 2 x 20-40 seconds. The routine should remain comfortable and should not create significant fatigue.",
  },
  {
    type: "subplan",
    name: "full-body-flexibility-routine",
    description:
      "A 20-30 minute flexibility routine emphasizing hips, hamstrings, shoulders, chest, ankles, and climbing-related forearm mobility.",
    exercises: [
      "couch-stretch",
      "seated-hamstring-fold",
      "frog-stretch",
      "deep-squat-hold",
      "doorway-chest-stretch",
      "childs-pose-lat-stretch",
      "thoracic-rotation",
      "knee-to-wall-ankle-mobility",
      "wrist-flexor-stretch",
      "wrist-extensor-stretch",
    ],
    comments:
      "Perform one or two rounds. Hold static stretches for approximately 30-60 seconds per side. Use slow breathing and mild-to-moderate stretch intensity. Do not bounce or force range of motion. Progress by improving control and duration before attempting deeper positions.",
  },
  {
    type: "subplan",
    name: "upper-body-dynamic-warmup",
    description:
      "A dynamic warm-up for upper-body strength and hypertrophy sessions.",
    exercises: [
      "cat-cow",
      "thoracic-rotation",
      "band-pull-apart",
      "wall-slide",
      "scapular-pull-up",
    ],
    comments:
      "Perform approximately 5 minutes of easy cardio first. Then complete cat-cow for 8 repetitions, thoracic rotations for 6-8 per side, band pull-aparts for 15-20, wall slides for 8-12 and scapular pull-ups for 5-8. Finish with 2-4 progressively heavier warm-up sets of the first compound lift.",
  },
  {
    type: "subplan",
    name: "lower-body-dynamic-warmup",
    description: "A dynamic warm-up for lower-body training.",
    exercises: [
      "worlds-greatest-stretch",
      "deep-squat-hold",
      "knee-to-wall-ankle-mobility",
      "half-kneeling-hip-flexor-stretch",
    ],
    comments:
      "Begin with 5 minutes of easy walking or cycling. Perform world's greatest stretch for 4-5 repetitions per side, deep squat hold for 20-30 seconds, knee-to-wall mobility for 8-10 per side and hip-flexor mobility for 20-30 seconds per side. Finish with progressively heavier warm-up sets of the first compound lift.",
  },
  {
    type: "subplan",
    name: "climbing-recovery-flexibility",
    description:
      "A short post-climbing flexibility routine for forearms, lats, shoulders and hips.",
    exercises: [
      "wrist-flexor-stretch",
      "wrist-extensor-stretch",
      "childs-pose-lat-stretch",
      "doorway-chest-stretch",
      "pigeon-stretch",
    ],
    comments:
      "Hold each stretch for approximately 30-45 seconds per side. Keep intensity mild to moderate. This is recovery work, not maximal flexibility training.",
  },
  {
    type: "subplan",
    name: "maximum-flexibility-routine",
    description:
      "A dedicated full-body flexibility session designed to progressively increase hip, hamstring, adductor, ankle, chest, lat and shoulder range of motion.",
    exercises: [
      "couch-stretch",
      "seated-hamstring-fold",
      "frog-stretch",
      "pigeon-stretch",
      "butterfly-stretch",
      "deep-squat-hold",
      "doorway-chest-stretch",
      "childs-pose-lat-stretch",
      "thoracic-rotation",
      "knee-to-wall-ankle-mobility",
      "wrist-flexor-stretch",
      "wrist-extensor-stretch",
    ],
    comments:
      "Perform 1-2 rounds. Hold most static stretches for 45-90 seconds. Use approximately 6-7 out of 10 stretch intensity: strong enough to create adaptation but never painful. Progress duration and control before forcing deeper positions. Long-term flexibility targets may include palms-to-floor hamstring mobility, comfortable deep squat, strong overhead shoulder position, pancake progression and front-split progression.",
  },
];

export const dummyPlans: Omit<TrainingPlanDocument, "_id">[] = [
  {
    slug: "conditioning-recomposition-8-week",
    title: "8-Week Conditioning and Recomposition",
    summary:
      "A three-day full-body conditioning program combined with weekly bouldering, cardiovascular training, core stability, posture work, and flexibility. Designed to reduce abdominal fat gradually, rebuild strength, add muscle to the shoulders, chest, back, legs, and arms, and prepare for a more demanding hypertrophy phase.",
    days: {
      monday: {
        exerciseNames: [
          "goblet-squat",
          "dumbbell-bench-press",
          "chest-supported-dumbbell-row",
          "dumbbell-romanian-deadlift",
          "cable-lateral-raise",
          "dead-bug",
          "incline-treadmill-walk",
        ],
        subplanName: "full-body-dynamic-warmup",
        comments:
          "Full Body A. Goblet squat: 3 x 8-10. Dumbbell bench press: 3 x 8-10. Chest-supported row: 3 x 10-12. Romanian deadlift: 3 x 8-10. Lateral raise: 3 x 12-15. Dead bug: 3 x 8-10 per side. Finish with 15-20 minutes of incline walking. Rest 90-120 seconds on compound exercises and 45-75 seconds on isolation and core exercises.",
      },
      tuesday: {
        exerciseNames: ["zone-2-cardio"],
        subplanName: "full-body-flexibility-routine",
        comments:
          "Recovery and flexibility day. Complete 30-40 minutes of Zone 2 cardio followed by the flexibility subplan. Keep the cardio easy enough that you can speak in complete sentences.",
      },
      wednesday: {
        exerciseNames: ["bouldering-session"],
        subplanName: "climbing-warmup",
        comments:
          "Bouldering day. Climb for approximately 60-90 minutes. Spend most of the session below maximum difficulty, emphasizing technique and controlled movement. Limit repeated maximal attempts. Finish with 5-10 minutes of relaxed forearm, lat, shoulder, and hip stretching.",
      },
      thursday: {
        exerciseNames: [
          "leg-press",
          "lat-pulldown",
          "incline-dumbbell-bench-press",
          "bulgarian-split-squat",
          "cable-face-pull",
          "pallof-press",
          "incline-treadmill-walk",
        ],
        subplanName: "full-body-dynamic-warmup",
        comments:
          "Full Body B. Leg press: 3 x 10-12. Lat pulldown: 3 x 8-12. Incline dumbbell press: 3 x 8-12. Bulgarian split squat: 2-3 x 8-10 per leg. Face pull: 3 x 12-15. Pallof press: 3 x 10-12 per side. Finish with 15-20 minutes of incline walking. Do not take pulling exercises to failure because of the weekly bouldering session.",
      },
      friday: {
        exerciseNames: ["recovery-walk"],
        subplanName: "posture-and-mobility-routine",
        comments:
          "Active recovery. Walk for 30-45 minutes at a comfortable pace and complete the posture and mobility routine. This day should leave you feeling better rather than tired.",
      },
      saturday: {
        exerciseNames: [
          "hip-thrust",
          "seated-cable-row",
          "machine-shoulder-press",
          "seated-leg-curl",
          "standing-calf-raise",
          "dumbbell-hammer-curl",
          "rope-triceps-pushdown",
          "side-plank",
        ],
        subplanName: "full-body-dynamic-warmup",
        comments:
          "Full Body C. Hip thrust: 3 x 8-12. Seated cable row: 3 x 10-12. Machine shoulder press: 3 x 8-12. Seated leg curl: 3 x 10-15. Calf raise: 3 x 12-20. Hammer curl: 2-3 x 10-15. Triceps pushdown: 2-3 x 10-15. Side plank: 3 x 20-40 seconds per side. Keep this session moderate and technically controlled.",
      },
      sunday: {
        exerciseNames: ["recovery-walk"],
        subplanName: "full-body-flexibility-routine",
        comments:
          "Recovery day. Walk for 20-40 minutes and perform the flexibility routine without forcing range of motion. This may also be used as a complete rest day when fatigue is elevated.",
      },
    },
    tips: {
      comments:
        "Perform the program for eight weeks. Gym sessions should normally take 55-75 minutes. Begin every strength session with the full-body dynamic warm-up. Static flexibility work should normally be performed after training or in a separate session, not immediately before heavy lifting.",
      diet:
        "Begin near maintenance calories or with a small deficit of approximately 150-250 kcal per day. Target approximately 130-145 g of protein per day, 55-70 g of fat, and use carbohydrates for the remaining calories. Maintain regular meal timing, eat fruits and vegetables daily, drink approximately 2-3 liters of water, and avoid judging progress from a single day of abdominal bloating.",
      progressionHandling:
        "Weeks 1-2: use approximately 60-65% of estimated 1RM on compound lifts and finish with about 3 repetitions in reserve. Weeks 3-4: use approximately 65-70% of 1RM with 2-3 repetitions in reserve. Weeks 5-7: use approximately 70-75% of 1RM with 1-2 repetitions in reserve. Week 8: deload using approximately 55-60% of 1RM and perform only 2 working sets per exercise. When you complete the top of the prescribed repetition range for every set with good technique, increase upper-body loads by approximately 1-2.5 kg and lower-body loads by approximately 2.5-5 kg. Isolation exercises should be progressed primarily through repetitions before adding weight.",
      importantNotes:
        "Do not test a true 1RM during this phase. Estimate loads from previous training or choose a weight that matches the required repetitions in reserve. Avoid muscular failure on squats, presses, hip hinges, rows, and pulldowns. Isolation exercises may occasionally reach 0-1 repetitions in reserve on the final set. Reduce training volume if elbows, fingers, or shoulders remain irritated after bouldering. Stop any movement that causes sharp pain, numbness, joint instability, or worsening symptoms.",
    },
  },
  {
    slug: "athletic-recomposition-phase-1",
    title: "Athletic Recomposition - Phase 1",
    summary:
      "A 16-24 week recomposition plan focused on reducing torso fat, improving body proportions, building shoulders, lats, upper chest, legs and core strength, improving posture, maintaining bouldering performance, and developing high levels of flexibility before beginning a lean bulk.",
    days: {
      monday: {
        exerciseNames: [
          "barbell-bench-press",
          "lat-pulldown",
          "standing-overhead-press",
          "chest-supported-row",
          "cable-face-pull",
          "incline-dumbbell-curl",
          "cable-triceps-pushdown",
          "pallof-press",
          "dead-bug",
          "front-plank",
          "incline-treadmill-walk",
        ],
        subplanName: "upper-body-dynamic-warmup",
        comments:
          "Upper strength day. Bench press: 4 x 5 at approximately 80-85% 1RM. Lat pulldown: 4 x 6-8. Standing overhead press: 3 x 6 at approximately 75-82% 1RM. Chest-supported row: 4 x 8. Face pull: 3 x 15. Incline dumbbell curl: 3 x 10. Cable triceps pushdown: 3 x 12. Pallof press: 3 x 10-12 per side. Dead bug: 2-3 x 8-10 per side. Front plank: 3 x 30-60 seconds. Finish with 15-20 minutes of incline walking.",
      },
      tuesday: {
        exerciseNames: [
          "back-squat",
          "romanian-deadlift",
          "walking-lunge",
          "standing-calf-raise",
          "hanging-knee-raise",
        ],
        subplanName: "lower-body-dynamic-warmup",
        comments:
          "Lower strength day. Back squat: 4 x 5 at approximately 80-85% 1RM. Romanian deadlift: 3 x 6-8 at approximately 75-82% 1RM. Walking lunges: 3 x 8-10 per leg. Standing calf raise: 4 x 12-15. Hanging knee raise: 3 x 8-12. Finish with 10-15 minutes of light mobility.",
      },
      wednesday: {
        exerciseNames: ["bouldering-session"],
        subplanName: "climbing-warmup",
        comments:
          "Bouldering day. Climb approximately 60-90 minutes. Prioritize technique, footwork, body positioning, controlled movement and efficient route reading. Avoid excessive repeated maximal attempts. Finish with the climbing recovery flexibility routine.",
      },
      thursday: {
        exerciseNames: [
          "incline-dumbbell-bench-press",
          "seated-cable-row",
          "lat-pulldown",
          "machine-shoulder-press",
          "cable-lateral-raise",
          "rear-delt-fly",
          "dumbbell-hammer-curl",
          "overhead-rope-triceps-extension",
          "ab-wheel",
        ],
        subplanName: "upper-body-dynamic-warmup",
        comments:
          "Upper hypertrophy day. Incline dumbbell press: 4 x 8-12 at approximately 65-75% 1RM. Cable row: 4 x 10-12. Lat pulldown: 3 x 10-12. Machine shoulder press: 3 x 8-12. Lateral raises: 4-5 x 12-20. Rear delt fly: 3-4 x 12-20. Hammer curl: 3 x 10-15. Overhead rope triceps extension: 3 x 10-15. Ab wheel: 3 x 6-12. Most sets should finish with approximately 1-3 repetitions in reserve.",
      },
      friday: {
        exerciseNames: [
          "leg-press",
          "bulgarian-split-squat",
          "hip-thrust",
          "seated-leg-curl",
          "leg-extension",
          "standing-calf-raise",
          "incline-treadmill-walk",
        ],
        subplanName: "lower-body-dynamic-warmup",
        comments:
          "Lower hypertrophy day. Leg press: 4 x 10-15. Bulgarian split squat: 3 x 8-12 per leg. Hip thrust: 3-4 x 8-12. Seated leg curl: 3 x 10-15. Leg extension: 3 x 12-15. Standing calf raise: 4 x 15-20. Most hypertrophy work should use approximately 65-75% 1RM or an equivalent load that leaves 1-3 repetitions in reserve. Finish with 15-20 minutes of incline walking.",
      },
      saturday: {
        exerciseNames: ["zone-2-cardio"],
        subplanName: "maximum-flexibility-routine",
        comments:
          "Aerobic conditioning and dedicated flexibility day. Perform 35-60 minutes of Zone 2 cardio, then complete the full flexibility routine. Keep flexibility work controlled and progressive rather than forcing end ranges.",
      },
      sunday: {
        exerciseNames: ["recovery-walk"],
        subplanName: "posture-and-mobility-routine",
        comments:
          "Recovery day. Walk for approximately 30-45 minutes at an easy pace. Perform the posture and mobility routine. This can become a full rest day if systemic fatigue is elevated.",
      },
    },
    tips: {
      comments:
        "The primary goal is body recomposition rather than scale weight loss. Progress should be judged using waist measurement, photos, strength, posture, climbing performance and body weight together. Prioritize development of side delts, lats, upper chest, rear delts, glutes and legs because these areas will improve overall proportions and create a stronger V-taper.",
      diet:
        "Start at maintenance calories or approximately 150-250 kcal below maintenance. Target approximately 130-150 g of protein per day and approximately 55-70 g of fat per day. Use carbohydrates to support lifting and climbing. Maintain high fruit and vegetable intake and approximately 2-3 liters of water per day. Adjust calories only after observing at least 2-3 weeks of consistent body-weight and waist trends.",
      progressionHandling:
        "Strength compounds should generally use approximately 80-85% of estimated 1RM and 1-2 repetitions in reserve. Occasional heavier work up to approximately 87.5-90% may be used when recovery is good, but repeated maximal work is unnecessary during this phase. Hypertrophy compounds should generally use approximately 65-75% 1RM with 1-3 repetitions in reserve. Isolation exercises should primarily use a load that permits 12-20 controlled repetitions and may approach 0-2 repetitions in reserve on the final set. When the top of the prescribed repetition range is reached for all working sets with proper form, increase upper-body loading by approximately 1-2.5 kg and lower-body loading by approximately 2.5-5 kg.",
      importantNotes:
        "Do not routinely train compound lifts to failure. Avoid heavy pulling immediately before bouldering. If finger, elbow or shoulder fatigue increases from climbing, reduce pulling volume before reducing climbing technique work. Keep flexibility work separate from maximal strength work when possible. Static stretching should normally be performed after training or during dedicated flexibility sessions. Take a lower-volume deload week every 5-8 weeks or earlier if performance, sleep, motivation and recovery decline together.",
    },
  },
];
