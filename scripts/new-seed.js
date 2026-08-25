export const trainingPlans = [
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
          "incline-treadmill-walk"
        ],
        subplanName: "upper-body-dynamic-warmup",
        comments:
          "Upper strength day. Bench press: 4 x 5 at approximately 80-85% 1RM. Lat pulldown: 4 x 6-8. Standing overhead press: 3 x 6 at approximately 75-82% 1RM. Chest-supported row: 4 x 8. Face pull: 3 x 15. Incline dumbbell curl: 3 x 10. Cable triceps pushdown: 3 x 12. Pallof press: 3 x 10-12 per side. Dead bug: 2-3 x 8-10 per side. Front plank: 3 x 30-60 seconds. Finish with 15-20 minutes of incline walking."
      },

      tuesday: {
        exerciseNames: [
          "back-squat",
          "romanian-deadlift",
          "walking-lunge",
          "standing-calf-raise",
          "hanging-knee-raise"
        ],
        subplanName: "lower-body-dynamic-warmup",
        comments:
          "Lower strength day. Back squat: 4 x 5 at approximately 80-85% 1RM. Romanian deadlift: 3 x 6-8 at approximately 75-82% 1RM. Walking lunges: 3 x 8-10 per leg. Standing calf raise: 4 x 12-15. Hanging knee raise: 3 x 8-12. Finish with 10-15 minutes of light mobility."
      },

      wednesday: {
        exerciseNames: [
          "bouldering-session"
        ],
        subplanName: "climbing-warmup",
        comments:
          "Bouldering day. Climb approximately 60-90 minutes. Prioritize technique, footwork, body positioning, controlled movement and efficient route reading. Avoid excessive repeated maximal attempts. Finish with the climbing recovery flexibility routine."
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
          "ab-wheel"
        ],
        subplanName: "upper-body-dynamic-warmup",
        comments:
          "Upper hypertrophy day. Incline dumbbell press: 4 x 8-12 at approximately 65-75% 1RM. Cable row: 4 x 10-12. Lat pulldown: 3 x 10-12. Machine shoulder press: 3 x 8-12. Lateral raises: 4-5 x 12-20. Rear delt fly: 3-4 x 12-20. Hammer curl: 3 x 10-15. Overhead rope triceps extension: 3 x 10-15. Ab wheel: 3 x 6-12. Most sets should finish with approximately 1-3 repetitions in reserve."
      },

      friday: {
        exerciseNames: [
          "leg-press",
          "bulgarian-split-squat",
          "hip-thrust",
          "seated-leg-curl",
          "leg-extension",
          "standing-calf-raise",
          "incline-treadmill-walk"
        ],
        subplanName: "lower-body-dynamic-warmup",
        comments:
          "Lower hypertrophy day. Leg press: 4 x 10-15. Bulgarian split squat: 3 x 8-12 per leg. Hip thrust: 3-4 x 8-12. Seated leg curl: 3 x 10-15. Leg extension: 3 x 12-15. Standing calf raise: 4 x 15-20. Most hypertrophy work should use approximately 65-75% 1RM or an equivalent load that leaves 1-3 repetitions in reserve. Finish with 15-20 minutes of incline walking."
      },

      saturday: {
        exerciseNames: [
          "zone-2-cardio"
        ],
        subplanName: "maximum-flexibility-routine",
        comments:
          "Aerobic conditioning and dedicated flexibility day. Perform 35-60 minutes of Zone 2 cardio, then complete the full flexibility routine. Keep flexibility work controlled and progressive rather than forcing end ranges."
      },

      sunday: {
        exerciseNames: [
          "recovery-walk"
        ],
        subplanName: "posture-and-mobility-routine",
        comments:
          "Recovery day. Walk for approximately 30-45 minutes at an easy pace. Perform the posture and mobility routine. This can become a full rest day if systemic fatigue is elevated."
      }
    },

    tips: {
      comments:
        "The primary goal is body recomposition rather than scale weight loss. Progress should be judged using waist measurement, photos, strength, posture, climbing performance and body weight together. Prioritize development of side delts, lats, upper chest, rear delts, glutes and legs because these areas will improve overall proportions and create a stronger V-taper.",

      diet:
        "Start at maintenance calories or approximately 150-250 kcal below maintenance. Target approximately 130-150 g of protein per day and approximately 55-70 g of fat per day. Use carbohydrates to support lifting and climbing. Maintain high fruit and vegetable intake and approximately 2-3 liters of water per day. Adjust calories only after observing at least 2-3 weeks of consistent body-weight and waist trends.",

      progressionHandling:
        "Strength compounds should generally use approximately 80-85% of estimated 1RM and 1-2 repetitions in reserve. Occasional heavier work up to approximately 87.5-90% may be used when recovery is good, but repeated maximal work is unnecessary during this phase. Hypertrophy compounds should generally use approximately 65-75% 1RM with 1-3 repetitions in reserve. Isolation exercises should primarily use a load that permits 12-20 controlled repetitions and may approach 0-2 repetitions in reserve on the final set. When the top of the prescribed repetition range is reached for all working sets with proper form, increase upper-body loading by approximately 1-2.5 kg and lower-body loading by approximately 2.5-5 kg.",

      importantNotes:
        "Do not routinely train compound lifts to failure. Avoid heavy pulling immediately before bouldering. If finger, elbow or shoulder fatigue increases from climbing, reduce pulling volume before reducing climbing technique work. Keep flexibility work separate from maximal strength work when possible. Static stretching should normally be performed after training or during dedicated flexibility sessions. Take a lower-volume deload week every 5-8 weeks or earlier if performance, sleep, motivation and recovery decline together."
    }
  }
];

export const exercises = [
  {
    type: "exercise",
    name: "barbell-bench-press",
    description:
      "A horizontal compound press for the chest, anterior deltoids and triceps.",
    howTo:
      "Lie with the feet firmly planted and shoulder blades gently retracted. Grip the bar slightly wider than shoulder width. Lower the bar under control toward the lower-to-mid chest while maintaining stable wrists and elbows. Press upward without allowing the shoulders to roll forward."
  },

  {
    type: "exercise",
    name: "lat-pulldown",
    description:
      "A vertical pulling exercise emphasizing the latissimus dorsi, upper back and elbow flexors.",
    howTo:
      "Sit securely with the thighs under the pad. Begin with the arms extended. Pull the bar toward the upper chest by driving the elbows downward. Avoid excessive backward lean and do not pull behind the neck."
  },

  {
    type: "exercise",
    name: "standing-overhead-press",
    description:
      "A vertical compound press for the shoulders, triceps and trunk stabilizers.",
    howTo:
      "Stand with the feet stable and brace the abdomen. Begin with the bar or dumbbells near shoulder height. Press overhead while keeping the ribs controlled and avoiding excessive lower-back extension. Finish with the load stacked over the shoulders."
  },

  {
    type: "exercise",
    name: "chest-supported-row",
    description:
      "A horizontal pulling exercise for the middle back, lats, rear deltoids and arms.",
    howTo:
      "Support the chest against an inclined bench or machine pad. Begin with the arms extended. Pull the elbows backward toward the lower ribs. Pause briefly, then lower under control without shrugging."
  },

  {
    type: "exercise",
    name: "cable-face-pull",
    description:
      "An upper-back and rear-deltoid exercise supporting shoulder positioning and posture.",
    howTo:
      "Set a rope near face height. Pull the rope toward the face while separating the hands. Keep the ribs controlled and avoid shrugging. Finish with gentle external rotation and shoulder-blade retraction."
  },

  {
    type: "exercise",
    name: "incline-dumbbell-curl",
    description:
      "A biceps-focused exercise emphasizing a long muscle length.",
    howTo:
      "Sit on an inclined bench with the arms hanging naturally. Curl the dumbbells without moving the upper arms forward. Squeeze briefly near the top and lower slowly."
  },

  {
    type: "exercise",
    name: "cable-triceps-pushdown",
    description:
      "An isolation exercise for the triceps.",
    howTo:
      "Keep the elbows close to the torso. Extend the elbows until the arms are straight without aggressively locking them. Return slowly while keeping the upper arms mostly stationary."
  },

  {
    type: "exercise",
    name: "pallof-press",
    description:
      "An anti-rotation core exercise for trunk stability.",
    howTo:
      "Stand perpendicular to a cable or resistance band. Hold the handle close to the chest, then press it directly forward. Resist rotation throughout the movement. Pause briefly and return."
  },

  {
    type: "exercise",
    name: "dead-bug",
    description:
      "A core-control exercise emphasizing abdominal bracing and pelvic control.",
    howTo:
      "Lie on the back with hips and knees near 90 degrees. Gently flatten the lower back toward the floor. Extend the opposite arm and leg while maintaining trunk position. Return and alternate."
  },

  {
    type: "exercise",
    name: "front-plank",
    description:
      "An isometric core exercise for trunk and pelvic stability.",
    howTo:
      "Support the body on the forearms and toes. Keep the body in a straight line. Brace the abdomen and glutes while avoiding sagging hips or excessive rounding."
  },

  {
    type: "exercise",
    name: "incline-treadmill-walk",
    description:
      "Low-impact cardiovascular conditioning for energy expenditure and aerobic fitness.",
    howTo:
      "Walk at a sustainable pace and incline without holding the rails. Maintain controlled breathing and an upright posture."
  },

  {
    type: "exercise",
    name: "back-squat",
    description:
      "A compound lower-body exercise emphasizing the quadriceps, glutes and trunk.",
    howTo:
      "Place the bar securely across the upper back. Brace the trunk, descend by bending the knees and hips, and maintain the feet firmly on the floor. Descend only as far as you can preserve control and spinal position, then drive upward."
  },

  {
    type: "exercise",
    name: "romanian-deadlift",
    description:
      "A hip-hinge exercise emphasizing the hamstrings, glutes and posterior chain.",
    howTo:
      "Begin standing with the load close to the thighs. Maintain a soft knee bend and push the hips backward. Lower while keeping the spine neutral until a strong hamstring stretch is felt. Drive the hips forward to stand."
  },

  {
    type: "exercise",
    name: "walking-lunge",
    description:
      "A unilateral lower-body movement for the quadriceps, glutes and balance.",
    howTo:
      "Step forward into a controlled lunge. Lower the rear knee toward the floor while keeping the front foot stable. Push through the front foot and continue into the next step."
  },

  {
    type: "exercise",
    name: "standing-calf-raise",
    description:
      "A calf-strengthening exercise emphasizing plantar flexion.",
    howTo:
      "Stand with the balls of the feet supported. Lower the heels through a comfortable range, then rise onto the toes. Pause briefly at the top and avoid bouncing."
  },

  {
    type: "exercise",
    name: "hanging-knee-raise",
    description:
      "A hanging core exercise emphasizing abdominal control and hip flexion.",
    howTo:
      "Hang from a secure bar. Brace the trunk and raise the knees toward the chest without excessive swinging. Lower slowly and regain control between repetitions."
  },

  {
    type: "exercise",
    name: "bouldering-session",
    description:
      "Climbing practice for grip strength, pulling strength, mobility, coordination and body awareness.",
    howTo:
      "Begin with several easy routes. Progress gradually toward harder problems. Focus on quiet feet, efficient hip positioning, straight-arm movement and controlled attempts. Limit maximal attempts if finger or elbow fatigue accumulates."
  },

  {
    type: "exercise",
    name: "incline-dumbbell-bench-press",
    description:
      "An incline pressing exercise emphasizing the upper chest, shoulders and triceps.",
    howTo:
      "Set the bench to a moderate incline. Keep the feet planted and shoulder blades stable. Lower the dumbbells toward the upper chest, then press upward without allowing the shoulders to roll forward."
  },

  {
    type: "exercise",
    name: "seated-cable-row",
    description:
      "A horizontal pulling movement for the lats, middle back, rear deltoids and arms.",
    howTo:
      "Sit tall and keep the torso stable. Pull the handle toward the lower ribs. Pause briefly with the shoulder blades controlled, then return slowly."
  },

  {
    type: "exercise",
    name: "machine-shoulder-press",
    description:
      "A supported shoulder press emphasizing the deltoids and triceps.",
    howTo:
      "Adjust the seat so the handles begin near shoulder height. Keep the trunk supported and ribs controlled. Press upward through a comfortable range and lower slowly."
  },

  {
    type: "exercise",
    name: "cable-lateral-raise",
    description:
      "An isolation exercise emphasizing the side deltoids to improve shoulder width.",
    howTo:
      "Raise the arm slightly forward of the torso until approximately shoulder height. Keep the movement slow and avoid swinging or shrugging."
  },

  {
    type: "exercise",
    name: "rear-delt-fly",
    description:
      "An isolation exercise for the rear deltoids and upper back.",
    howTo:
      "Begin with the arms in front of the torso. Move the arms outward while keeping a slight elbow bend. Stop when the upper arms align approximately with the torso and return under control."
  },

  {
    type: "exercise",
    name: "dumbbell-hammer-curl",
    description:
      "An arm exercise targeting the biceps, brachialis and forearms.",
    howTo:
      "Hold the dumbbells with palms facing inward. Curl without swinging or allowing the elbows to move excessively forward. Lower slowly."
  },

  {
    type: "exercise",
    name: "overhead-rope-triceps-extension",
    description:
      "A triceps exercise emphasizing the long head in an overhead position.",
    howTo:
      "Face away from a cable with the rope behind the head. Keep the upper arms relatively stable and extend the elbows. Return slowly through a comfortable stretch."
  },

  {
    type: "exercise",
    name: "ab-wheel",
    description:
      "An advanced anti-extension core exercise.",
    howTo:
      "Begin from the knees. Brace the abdomen and slowly roll forward while keeping the ribs and pelvis controlled. Stop before the lower back begins to arch, then pull back to the starting position."
  },

  {
    type: "exercise",
    name: "leg-press",
    description:
      "A machine-based compound lower-body exercise emphasizing the quadriceps and glutes.",
    howTo:
      "Place the feet at a comfortable width. Lower the platform until reaching a controlled depth without the pelvis lifting from the pad. Press through the entire foot."
  },

  {
    type: "exercise",
    name: "bulgarian-split-squat",
    description:
      "A unilateral lower-body exercise for quadriceps, glutes and hip stability.",
    howTo:
      "Place the rear foot on a bench. Keep the front foot planted and lower under control. Drive through the front foot to return. Use support for balance if necessary."
  },

  {
    type: "exercise",
    name: "hip-thrust",
    description:
      "A hip-extension exercise emphasizing the glutes.",
    howTo:
      "Support the upper back against a bench. Drive through the feet and extend the hips until the torso is approximately parallel with the floor. Avoid excessive lower-back arching."
  },

  {
    type: "exercise",
    name: "seated-leg-curl",
    description:
      "A hamstring isolation exercise.",
    howTo:
      "Adjust the machine so the knee aligns with its pivot. Curl the legs downward, pause briefly, then return slowly."
  },

  {
    type: "exercise",
    name: "leg-extension",
    description:
      "A quadriceps isolation exercise.",
    howTo:
      "Adjust the machine for comfortable knee alignment. Extend the knees until nearly straight. Pause briefly, then lower slowly without allowing the weight to drop."
  },

  {
    type: "exercise",
    name: "zone-2-cardio",
    description:
      "Steady-state aerobic training at a sustainable conversational intensity.",
    howTo:
      "Use walking, cycling, elliptical or another low-impact modality. Maintain approximately 3-4 out of 10 effort. You should be able to speak in full sentences."
  },

  {
    type: "exercise",
    name: "recovery-walk",
    description:
      "Low-intensity walking used to support recovery and daily energy expenditure.",
    howTo:
      "Walk at an easy pace that does not create noticeable fatigue. Maintain relaxed breathing and comfortable posture."
  },

  {
    type: "exercise",
    name: "cat-cow",
    description:
      "A controlled spinal mobility drill.",
    howTo:
      "Begin on hands and knees. Slowly alternate between spinal flexion and extension. Move smoothly and avoid forcing end ranges."
  },

  {
    type: "exercise",
    name: "thoracic-rotation",
    description:
      "A mobility drill for rotation of the upper spine.",
    howTo:
      "Begin on hands and knees or lying on the side. Rotate through the upper back while keeping the pelvis relatively stable."
  },

  {
    type: "exercise",
    name: "worlds-greatest-stretch",
    description:
      "A dynamic mobility exercise targeting hips, hamstrings and thoracic rotation.",
    howTo:
      "Step into a long lunge. Place the hands inside the lead foot and rotate the arm nearest the front leg toward the ceiling. Return and alternate sides."
  },

  {
    type: "exercise",
    name: "band-pull-apart",
    description:
      "A light shoulder and upper-back activation exercise.",
    howTo:
      "Hold a resistance band at shoulder height. Pull the hands apart until the band approaches the chest. Return slowly while keeping the ribs controlled."
  },

  {
    type: "exercise",
    name: "wall-slide",
    description:
      "A shoulder mobility and postural control exercise.",
    howTo:
      "Stand with the back close to a wall. Slide the arms upward while maintaining abdominal control. Avoid compensating by excessively arching the lower back."
  },

  {
    type: "exercise",
    name: "scapular-pull-up",
    description:
      "A shoulder-blade control exercise useful for climbing and overhead pulling.",
    howTo:
      "Hang with straight elbows. Pull the shoulders gently downward to raise the body slightly without bending the arms. Return under control."
  },

  {
    type: "exercise",
    name: "wrist-circles",
    description:
      "A gentle wrist preparation drill.",
    howTo:
      "Move the wrists slowly through comfortable circles in both directions."
  },

  {
    type: "exercise",
    name: "finger-tendon-glides",
    description:
      "A low-load finger mobility drill for climbing preparation.",
    howTo:
      "Move slowly between open hand, hook fist, full fist and straight fist positions. Keep the movement comfortable."
  },

  {
    type: "exercise",
    name: "couch-stretch",
    description:
      "A stretch for the quadriceps and hip flexors.",
    howTo:
      "Place one knee near a wall or bench and the opposite foot forward. Tuck the pelvis gently and move forward until a stretch is felt at the front of the rear hip."
  },

  {
    type: "exercise",
    name: "half-kneeling-hip-flexor-stretch",
    description:
      "A hip-flexor stretch emphasizing pelvic position.",
    howTo:
      "Begin in a half-kneeling position. Tuck the pelvis slightly and shift forward without arching the lower back."
  },

  {
    type: "exercise",
    name: "seated-hamstring-fold",
    description:
      "A hamstring flexibility exercise.",
    howTo:
      "Sit with the legs extended and hinge forward from the hips. Keep the spine long and avoid forcing the stretch."
  },

  {
    type: "exercise",
    name: "frog-stretch",
    description:
      "An adductor and inner-hip flexibility exercise.",
    howTo:
      "Begin on hands and knees and gradually move the knees apart. Shift the hips backward until a moderate inner-thigh stretch is felt."
  },

  {
    type: "exercise",
    name: "deep-squat-hold",
    description:
      "A mobility position for the ankles, hips, knees and trunk.",
    howTo:
      "Descend into a comfortable squat while keeping the feet planted. Use support if necessary. Maintain relaxed breathing."
  },

  {
    type: "exercise",
    name: "pigeon-stretch",
    description:
      "A glute and hip external-rotation flexibility exercise.",
    howTo:
      "Bring one leg forward with the knee bent and extend the opposite leg backward. Keep the pelvis as square as practical and lean forward gradually."
  },

  {
    type: "exercise",
    name: "butterfly-stretch",
    description:
      "A groin and hip flexibility exercise.",
    howTo:
      "Sit with the soles of the feet together. Allow the knees to move gently toward the floor while maintaining an upright torso."
  },

  {
    type: "exercise",
    name: "doorway-chest-stretch",
    description:
      "A stretch for the pectorals and front of the shoulders.",
    howTo:
      "Place one forearm against a doorway and gently rotate the torso away until a stretch is felt across the chest."
  },

  {
    type: "exercise",
    name: "childs-pose-lat-stretch",
    description:
      "A stretch for the lats, shoulders and upper back.",
    howTo:
      "Sit the hips toward the heels with the arms reaching forward. Move the hands slightly to one side to emphasize the opposite lat."
  },

  {
    type: "exercise",
    name: "knee-to-wall-ankle-mobility",
    description:
      "An ankle dorsiflexion mobility exercise.",
    howTo:
      "Keep the heel flat and drive the knee toward the wall over the toes. Gradually move the foot farther from the wall as mobility improves."
  },

  {
    type: "exercise",
    name: "wrist-flexor-stretch",
    description:
      "A stretch for the wrist and forearm flexors.",
    howTo:
      "Extend one arm with the palm up. Use the opposite hand to gently extend the fingers and wrist until a mild forearm stretch is felt."
  },

  {
    type: "exercise",
    name: "wrist-extensor-stretch",
    description:
      "A stretch for the wrist and forearm extensors.",
    howTo:
      "Extend one arm with the palm downward. Gently flex the wrist using the opposite hand."
  },

  {
    type: "exercise",
    name: "dead-hang",
    description:
      "A hanging drill for grip, lats and overhead shoulder mobility.",
    howTo:
      "Hang from a secure bar using a comfortable grip. Maintain enough shoulder control to remain comfortable. Stop if shoulder, elbow or finger pain develops."
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
      "scapular-pull-up"
    ],
    comments:
      "Perform approximately 5 minutes of easy cardio first. Then complete cat-cow for 8 repetitions, thoracic rotations for 6-8 per side, band pull-aparts for 15-20, wall slides for 8-12 and scapular pull-ups for 5-8. Finish with 2-4 progressively heavier warm-up sets of the first compound lift."
  },

  {
    type: "subplan",
    name: "lower-body-dynamic-warmup",
    description:
      "A dynamic warm-up for lower-body training.",
    exercises: [
      "worlds-greatest-stretch",
      "deep-squat-hold",
      "knee-to-wall-ankle-mobility",
      "half-kneeling-hip-flexor-stretch"
    ],
    comments:
      "Begin with 5 minutes of easy walking or cycling. Perform world's greatest stretch for 4-5 repetitions per side, deep squat hold for 20-30 seconds, knee-to-wall mobility for 8-10 per side and hip-flexor mobility for 20-30 seconds per side. Finish with progressively heavier warm-up sets of the first compound lift."
  },

  {
    type: "subplan",
    name: "climbing-warmup",
    description:
      "A climbing-specific preparation routine for fingers, wrists, shoulders and hips.",
    exercises: [
      "wrist-circles",
      "finger-tendon-glides",
      "band-pull-apart",
      "scapular-pull-up",
      "deep-squat-hold"
    ],
    comments:
      "Complete wrist circles for 20-30 seconds in each direction, tendon glides for 5 controlled cycles, band pull-aparts for 2 x 12-15, scapular pull-ups for 2 x 5-8 and a supported deep squat hold for 20-30 seconds. Then complete several progressively harder easy boulders before attempting difficult problems."
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
      "pigeon-stretch"
    ],
    comments:
      "Hold each stretch for approximately 30-45 seconds per side. Keep intensity mild to moderate. This is recovery work, not maximal flexibility training."
  },

  {
    type: "subplan",
    name: "posture-and-mobility-routine",
    description:
      "A short routine emphasizing shoulder positioning, thoracic mobility, hip flexors and overhead range.",
    exercises: [
      "band-pull-apart",
      "wall-slide",
      "thoracic-rotation",
      "half-kneeling-hip-flexor-stretch",
      "dead-hang"
    ],
    comments:
      "Band pull-aparts: 2 x 15-20. Wall slides: 2 x 8-12. Thoracic rotations: 8 per side. Hip-flexor stretch: 30-45 seconds per side. Dead hang: 2 x 20-45 seconds."
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
      "wrist-extensor-stretch"
    ],
    comments:
      "Perform 1-2 rounds. Hold most static stretches for 45-90 seconds. Use approximately 6-7 out of 10 stretch intensity: strong enough to create adaptation but never painful. Progress duration and control before forcing deeper positions. Long-term flexibility targets may include palms-to-floor hamstring mobility, comfortable deep squat, strong overhead shoulder position, pancake progression and front-split progression."
  }
];