export const actions = {

0x000 :   "DEADDOWN", //DeadDown 
0x001 :   "DEADLEFT", //DeadLeft    Standard leftward death
0x002 :   "DEADRIGHT", //DeadRight    Standard rightward death
0x003 :   "DEADUP", //DeadUp    Upward death used in 1P "Team Kirby", etc.
0x004 :   "DAMAGEFALL", //DeadUpStar    Standard Star KO
0x005 :   "DEADUP", //DeadUpStarIce    Star KO while encased in ice (Freezie)
0x006 :   "DEADUP", //DeadUpFall    64-esque front fall, unused, I believe
0x007 :   "DEADUP", //DeadUpFallHitCamera
0x008 :   "DEADUP", //DeadUpFallHitCameraFlat
0x009 :   "DEADUP", //DeadUpFallIce
0x00A :   "DEADUP", //DeadUpFallHitCameraIce
0x00B :   "SLEEP", //Sleep    "Nothing" state, probably - it is the state Shiek/Zelda is in when their counterpart is the one currently playing
0x00C :   "REBIRTH", //Rebirth    Entering on halo
0x00D :   "REBIRTHWAIT", //RebirthWait    Waiting on halo
0x00E :   "WAIT", //Wait    Standing state
0x00F :   "WALK", //WalkSlow
0x010 :   "WALK", //WalkMiddle
0x011 :   "WALK", //WalkFast
0x012 :   "SMASHTURN", //Turn
0x013 :   "RUNTURN", //TurnRun
0x014 :   "DASH", //Dash
0x015 :   "RUN", //Run
0x016 :   "RUN", //RunDirect
0x017 :   "RUNBRAKE", //RunBrake
0x018 :   "KNEEBEND", //KneeBend    Pre-jump animation
0x019 :   "JUMPF", //JumpF    First jump forward
0x01A :   "JUMPB", //JumpB    First jump backward
0x01B :   "JUMPAERIALF", //JumpAerialF    Aerial jump forward
0x01C :   "JUMPAERIALB", //JumpAerialB    Aerial jump backward
0x01D :   "FALL", //Fall    Falling straight down
0x01E :   "FALL", //FallF    Falling with forward DI
0x01F :   "FALL", //FallB    Falling with backward DI
0x020 :   "FALLAERIAL", //FallAerial    Falling after the second jump
0x021 :   "FALLAERIAL", //FallAerialF    Falling after the second jump with forward DI
0x022 :   "FALLAERIAL", //FallAerialB    Falling after the second jump with backward DI
0x023 :   "FALLSPECIAL", //FallSpecial    Special fall after UpB or airdodge
0x024 :   "FALLSPECIAL", //FallSpecialF    Special fall with forward DI
0x025 :   "FALLSPECIAL", //FallSpecialB    Special fall with backward DI
0x026 :   "DAMAGEFALL", //DamageFall    Tumbling
0x027 :   "SQUAT", //Squat    Going from stand to crouch
0x028 :   "SQUATWAIT", //SquatWait    Crouching
0x029 :   "SQUATRV", //SquatRv    Going from crouch to stand
0x02A :   "LANDING", //Landing    Landing state, can be cancelled
0x02B :   "LANDINGFALLSPECIAL", //LandingFallSpecial    Landing from special fall
0x02C :   "JAB1", //Attack11    Standard attack 1
0x02D :   "JAB2", //Attack12    Standard attack 2
0x02E :   "JAB3", //Attack13    Standard attack 3
0x02F :   "JAB3", //Attack100Start    Start of a looping standard attack
0x030 :   "JAB3", //Attack100Loop    Middle of a looping standard attack
0x031 :   "JAB3", //Attack100End    End of a looping standard attack
0x032 :   "ATTACKDASH", //AttackDash    Dash attack
0x033 :   "FORWARDTILT", //AttackS3Hi    High Ftilt
0x034 :   "FORWARDTILT", //AttackS3HiS    High-mid Ftilt
0x035 :   "FORWARDTILT", //AttackS3S    Mid Ftilt
0x036 :   "FORWARDTILT", //AttackS3LwS    Low-mid Ftilt
0x037 :   "FORWARDTILT", //AttackS3Lw    Low Ftilt
0x038 :   "UPTILT", //AttackHi3    Uptilt
0x039 :   "DOWNTILT", //AttackLw3    Downtilt
0x03A :   "FORWARDSMASH", //AttackS4Hi    High Fsmash
0x03B :   "FORWARDSMASH", //AttackS4HiS    High-mid Fsmash
0x03C :   "FORWARDSMASH", //AttackS4S    Mid Fsmash
0x03D :   "FORWARDSMASH", //AttackS4LwS    Low-mid Fsmash
0x03E :   "FORWARDSMASH", //AttackS4Lw    Low Fsmash
0x03F :   "UPSMASH", //AttackHi4    Upsmash
0x040 :   "DOWNSMASH", //AttackLw4    Downsmash
0x041 :   "ATTACKAIRN", //AttackAirN    Nair
0x042 :   "ATTACKAIRF", //AttackAirF    Fair
0x043 :   "ATTACKAIRB", //AttackAirB    Bair
0x044 :   "ATTACKAIRU", //AttackAirHi    Uair
0x045 :   "ATTACKAIRD", //AttackAirLw    Dair
0x046 :   "LANDINGATTACKAIRN", //LandingAirN    Landing during Nair
0x047 :   "LANDINGATTACKAIRF", //LandingAirF    Landing during Fair
0x048 :   "LANDINGATTACKAIRB", //LandingAirB    Landing during Bair
0x049 :   "LANDINGATTACKAIRU", //LandingAirHi    Landing during Uair
0x04A :   "LANDINGATTACKAIRD", //LandingAirLw    Landing during Dair
0x04B :   "DAMAGEN2", //DamageHi1
0x04C :   "DAMAGEN2", //DamageHi2
0x04D :   "DAMAGEN2", //DamageHi3
0x04E :   "DAMAGEN2", //DamageN1
0x04F :   "DAMAGEN2", //DamageN2
0x050 :   "DAMAGEN2", //DamageN3
0x051 :   "DAMAGEN2", //DamageLw1
0x052 :   "DAMAGEN2", //DamageLw2
0x053 :   "DAMAGEN2", //DamageLw3
0x054 :   "DAMAGEN2", //DamageAir1
0x055 :   "DAMAGEN2", //DamageAir2
0x056 :   "DAMAGEN2", //DamageAir3
0x057 :   "DAMAGEFLYN", //DamageFlyHi
0x058 :   "DAMAGEFLYN", //DamageFlyN
0x059 :   "DAMAGEFLYN", //DamageFlyLw
0x05A :   "DAMAGEFLYN", //DamageFlyTop
0x05B :   "DAMAGEFLYN", //DamageFlyRoll
/*0x05C :   LightGet    Picking up an item
0x05D :   HeavyGet    Picking up a heavy item (barrel)
0x05E :   LightThrowF    Throwing items at standard speed
0x05F :   LightThrowB
0x060 :   LightThrowHi
0x061 :   LightThrowLw
0x062 :   LightThrowDash
0x063 :   LightThrowDrop
0x064 :   LightThrowAirF
0x065 :   LightThrowAirB
0x066 :   LightThrowAirHi
0x067 :   LightThrowAirLw
0x068 :   HeavyThrowF
0x069 :   HeavyThrowB
0x06A :   HeavyThrowHi
0x06B :   HeavyThrowLw
0x06C :   LightThrowF4    Throwing items at Smash speed
0x06D :   LightThrowB4
0x06E :   LightThrowHi4
0x06F :   LightThrowLw4
0x070 :   LightThrowAirF4
0x071 :   LightThrowAirB4
0x072 :   LightThrowAirHi4
0x073 :   LightThrowAirLw4
0x074 :   HeavyThrowF4
0x075 :   HeavyThrowB4
0x076 :   HeavyThrowHi4
0x077 :   HeavyThrowLw4
0x078 :   SwordSwing1    Beam sword swings
0x079 :   SwordSwing3
0x07A :   SwordSwing4
0x07B :   SwordSwingDash
0x07C :   BatSwing1    Home Run Bat swings
0x07D :   BatSwing3
0x07E :   BatSwing4
0x07F :   BatSwingDash
0x080 :   ParasolSwing1    Parasol swings
0x081 :   ParasolSwing3
0x082 :   ParasolSwing4
0x083 :   ParasolSwingDash
0x084 :   HarisenSwing1    Fan swings
0x085 :   HarisenSwing3
0x086 :   HarisenSwing4
0x087 :   HarisenSwingDash
0x088 :   StarRodSwing1    Star Rod swings
0x089 :   StarRodSwing3
0x08A :   StarRodSwing4
0x08B :   StarRodSwingDash
0x08C :   LipStickSwing1    Lip's Stick swings
0x08D :   LipStickSwing3
0x08E :   LipStickSwing4
0x08F :   LipStickSwingDash
0x090 :   ItemParasolOpen
0x091 :   ItemParasolFall
0x092 :   ItemParasolFallSpecial
0x093 ;   ItemParasolDamageFall
0x094 :   LGunShoot    Raygun shots
0x095 :   LGunShootAir
0x096 :   LGunShootEmpty
0x097 :   LGunShootAirEmpty
0x098 :   FireFlowerShoot
0x099 :   FireFlowerShootAir
0x09A :   ItemScrew
0x09B :   ItemScrewAir
0x09C :   DamageScrew
0x009 :    DamageScrewAir
0x09E :   ItemScopeStart
0x09F :   ItemScopeRapid
0x0A0 :   ItemScopeFire
0x0A1 :   ItemScopeEnd
0x0A2 :   ItemScopeAirStart
0x0A3 :   ItemScopeAirRapid
0x0A4 :   ItemScopeAirFire
0x0A5 :   ItemScopeAirEnd
0x0A6 :   ItemScopeStartEmpty
0x0A7 :   ItemScopeRapidEmpty
0x0A8 :   ItemScopeFireEmpty
0x0A9 :   ItemScopeEndEmpty
0x0AA :   ItemScopeAirStartEmpty
0x0AB :   ItemScopeAirRapidEmpty
0x0AC :   ItemScopeAirFireEmpty
0x0AD :   ItemScopeAirEndEmpty
0x0AE :   LiftWait
0x0AF :   LiftWalk1
0x0B0 :   LiftWalk2
0x0B1 :   LiftTurn*/
0x0B2 :   "GUARDON", //GuardOn
0x0B3 :   "GUARD", //Guard    Holding shield
0x0B4 :   "GUARDOFF", //GuardOff
0x0B5 :   "GUARD", //GuardSetOff    Shield stun
0x0B6 :   "GUARD", //GuardReflect
0x0B7 :   "DOWNBOUND", //DownBoundU    The "failed to tech" bounce, facing up
0x0B8 :   "DOWNWAIT", //DownWaitU    Laying on ground facing up
0x0B9 :   "DOWNDAMAGE", //DownDamageU    Getting hit laying on ground facing up
0x0BA :   "DOWNSTANDN", //DownStandU
0x0BB :   "DOWNATTACK", //DownAttackU    Get up attack from ground face up
0x0BC :   "DOWNSTANDF", //DownFowardU
0x0BD :   "DOWNSTANDB", //DownBackU
//0x0BE :   DownSpotU
0x0BF :   "DOWNBOUND", //DownBoundD    The "failed to tech" bounce, facing down
0x0C0 :   "DOWNWAIT", //DownWaitD
0x0C1 :   "DOWNDAMAGE", //DownDamageD
0x0C2 :   "DOWNSTANDN", //DownStandD
0x0C3 :   "DOWNATTACK", //DownAttackD
0x0C4 :   "DOWNSTANDF", //DownFowardD
0x0C5 :   "DOWNSTANDB", //DownBackD
//0x0C6 :   DownSpotD
0x0C7 :   "TECHN", //Passive    Neutral tech
0x0C8 :   "TECHF", //PassiveStandF    Forward tech
0x0C9 :   "TECHB", //PassiveStandB    Backward tech
0x0CA :   "WALLTECH", //PassiveWall    Wall tech
0x0CB :   "WALLTECHJUMP", //PassiveWallJump    Walljump tech/plain walljump
0x0CC :   "TECHU", //PassiveCeil    Ceiling tech
0x0CD :   "SHIELDBREAKFALL", //ShieldBreakFly
0x0CE :   "SHIELDBREAKFALL", //ShieldBreakFall
0x0CF :   "SHIELDBREAKDOWNBOUND", //ShieldBreakDownU
0x0D0 :   "SHIELDBREAKDOWNBOUND", //ShieldBreakDownD
0x0D1 :   "SHIELDBREAKSTAND", //ShieldBreakStandU
0x0D2 :   "SHIELDBREAKSTAND", //ShieldBreakStandD
0x0D3 :   "FURAFURA", //FuraFura    Shield-break tottering
0x0D4 :   "GRAB", //Catch    Grab
0x0D5 :   "CATCHWAIT", //CatchPull    Successfully grabbing a character - pulling them in
0x0D6 :   "GRAB", //CatchDash
0x0D7 :   "CATCHWAIT", //CatchDashPull
0x0D8 :   "CATCHWAIT", //CatchWait    Grabbing and holding a character
0x0D9 :   "CATCHATTACK", //CatchAttack    Pummel
0x0DA :   "CATCHCUT", //CatchCut    When opponent breaks of a character's grab
0x0DB :   "THROWFORWARD", //ThrowF
0x0DC :   "THROWBACK", //ThrowB
0x0DD :   "THROWUP", //ThrowHi
0x0DE :   "THROWDOWN", //ThrowLw
0x0DF :   "CAPTUREPULLED", //CapturePulledHi
0x0E0 :   "CAPTUREWAIT", //CaptureWaitHi
0x0E1 :   "CAPTUREDAMAGE", //CaptureDamageHi
0x0E2 :   "CAPTUREPULLED", //CapturePulledLw
0x0E3 :   "CAPTUREWAIT", //CaptureWaitLw
0x0E4 :   "CAPTUREDAMAGE", //CaptureDamageLw
0x0E5 :   "CAPTURECUT", //CaptureCut
0x0E6 :   "CAPTURECUT", //CaptureJump
0x0E7 :   "CAPTUREWAIT", //CaptureNeck
0x0E8 :   "CAPTUREWAIT", //CaptureFoot
0x0E9 :   "ESCAPEF", //EscapeF
0x0EA :   "ESCAPEB", //EscapeB
0x0EB :   "ESCAPEN", //Escape
0x0EC :   "ESCAPEAIR", //EscapeAir    airdodge
0x0ED :   "CATCHCUT", //ReboundStop
0x0EE :   "CATCHCUT", //Rebound
0x0EF :   "THROWNFORWARD", //ThrownF
0x0F0 :   "THROWNBACK", //ThrownB
0x0F1 :   "THROWNUP", //ThrownHi
0x0F2 :   "THROWNDOWN", //ThrownLw
0x0F3 :   "THROWNDOWN", //ThrownLwWomen
0x0F4 :   "PASS", //Pass    Drop through platform
0x0F5 :   "OTTOTTO", //Ottotto    Ledge teeter
0x0F6 :   "OTTOTTOWAIT", //OttottoWait
0x0F7 :   "WALLDAMAGE", //FlyReflectWall
0x0F8 :   "STOPCEIL", //FlyReflectCeil
0x0F9 :   "WALLDAMAGE", //StopWall
0x0FA :   "STOPCEIL", //StopCeil
0x0FB :   "MISSFOOT", //MissFoot
0x0FC :   "CLIFFCATCH", //CliffCatch    Catching the ledge
0x0FD :   "CLIFFWAIT", //CliffWait    Hanging on the ledge
0x0FE :   "CLIFFGETUPSLOW", //CliffClimbSlow    Climbing the ledge, >100%
0x0FF :   "CLIFFGETUPQUICK", //CliffClimbQuick    Climbing the ledge, <100%
0x100 :   "CLIFFATTACKSLOW", //CliffAttackSlow    Ledge attack, >100%
0x101 :   "CLIFFATTACKQUICK", //CliffAttackQuick    Ledge attack, <100%
0x102 :   "CLIFFESCAPESLOW", //CliffEscapeSlow    Ledge roll, >100%
0x103 :   "CLIFFESCAPEQUICK", //CliffEscapeQuick    Ledge roll, <100%
0x104 :   "CLIFFJUMPSLOW", //CliffJumpSlow1
0x105 :   "CLIFFJUMPSLOW", //CliffJumpSlow2
0x106 :   "CLIFFJUMPQUICK", //CliffJumpQuick1
0x107 :   "CLIFFJUMPQUICK", //CliffJumpQuick2
0x108 :   "APPEAL", //AppealR    Taunt right
0x109 :   "APPEAL", //AppealL    Taunt left
/*0x10A :   ShoulderedWait
0x10B :   ShoulderedWalkSlow
0x10C :   ShoulderedWalkMiddle
0x10D :   ShoulderedWalkFast
0x10E :   ShoulderedTurn
0x10F :   ThrownFF
0x110 :   ThrownFB
0x111 :   ThrownFHi
0x112 :   ThrownFLw
0x113 :   CaptureCaptain
0x114 :   CaptureYoshi
0x115 :   YoshiEgg
0x116 :   CaptureKoopa
0x117 :   CaptureDamageKoopa
0x118 :   CaptureWaitKoopa
0x119 :   ThrownKoopaF
0x11A :   ThrownKoopaB
0x11B :   CaptureKoopaAir
0x11C :   CaptureDamageKoopaAir
0x11D :   CaptureWaitKoopaAir
0x11E :   ThrownKoopaAirF
0x11F :   ThrownKoopaAirB
0x120 :   CaptureKirby
0x121 :   CaptureWaitKirby
0x122 :   ThrownKirbyStar
0x123 :   ThrownCopyStar
0x124 :   ThrownKirby
0x125 :   BarrelWait
0x126 :   Bury
0x127 :   BuryWait
0x128 :   BuryJump
0x129 :   DamageSong
0x12A :   DamageSongWait
0x12B :   DamageSongRv
0x12C :   DamageBind
0x12D :   CaptureMewtwo
0x12E :   CaptureMewtwoAir
0x12F :   ThrownMewtwo
0x130 :   ThrownMewtwoAir
0x131 :   WarpStarJump
0x132 :   WarpStarFall
0x133 :   HammerWait
0x134 :   HammerWalk
0x135 :   HammerTurn
0x136 :   HammerKneeBend
0x137 :   HammerFall
0x138 :   HammerJump
0x139 :   HammerLanding
0x13A :   KinokoGiantStart    Super/Poison mushroom states
0x13B :   KinokoGiantStartAir
0x13C :   KinokoGiantEnd
0x13D :   KinokoGiantEndAir
0x13E :   KinokoSmallStart
0x13F :   KinokoSmallStartAir
0x140 :   KinokoSmallEnd
0x141 :   KinokoSmallEndAir*/
0x142 :   "ENTRANCE", //Entry    Warp in at beginning of match.
0x143 :   "ENTRANCE", //EntryStart
0x144 :   "ENTRANCE", //EntryEnd
/*0x145 :   DamageIce
0x146 :   DamageIceJump
0x147 :   CaptureMasterhand
0x148 :   CapturedamageMasterhand
0x149 :   CapturewaitMasterhand
0x14A :   ThrownMasterhand
0x14B :   CaptureKirbyYoshi
0x14C :   KirbyYoshiEgg
0x14D :   CaptureLeadead
0x14E :   CaptureLikelike
0x14F :   DownReflect
0x150 :   CaptureCrazyhand
0x151 :   CapturedamageCrazyhand
0x152 :   CapturewaitCrazyhand
0x153 :   ThrownCrazyhand
0x154 :   BarrelCannonWait*/

// APPARENTLY THE FOLLOWING ARE ONLY SUBACTIONS
/*

0x155 :   "WAIT", //Wait1
0x156 :   "WAIT", //Wait2
0x157 :   "WAIT", //Wait3
0x158 :   "WAIT", //Wait4
0x159 :   "WAIT", //WaitItem
0x15A :   "SQUATWAIT", //SquatWait1
0x15B :   "SQUATWAIT", //SquatWait2
0x15C :   "SQUATWAIT", //SquatWaitItem
0x15D :   "GUARD", //GuardDamage
0x15E :   "ESCAPEN", //EscapeN
0x15F :   "FORWARDSMASH", //AttackS4Hold
0x160 :   HeavyWalk1
0x161 :   HeavyWalk2
0x162 :   ItemHammerWait
0x163 :   ItemHammerMove
0x164 :  ItemBlind
0x165 :   DamageElec
0x166 :   "FURASLEEPSTART", //FuraSleepStart
0x167 :   "FURASLEEPLOOP", //FuraSleepLoop
0x168 :   "FURASLEEPEND", //FuraSleepEnd
0x169 :   "WALLDAMAGE", //WallDamage
0x16A :   "CLIFFWAIT", //CliffWait1
0x16B :   "CLIFFWAIT", //CliffWait2
0x16C :   SlipDown
0x16D :   Slip
0x16E :   SlipTurn
0x16F :   SlipDash
0x170 :   SlipWait
0x171 :   SlipStand
0x172 :   SlipAttack
0x173 :   SlipEscapeF
0x174 :   SlipEscapeB
0x175 :   "APPEAL", //AppealS
0x176 :   Zitabata
0x177 :   CaptureKoopaHit
0x178 :   ThrownKoopaEndF
0x179 :   ThrownKoopaEndB
0x17A :   CaptureKoopaAirHit
0x17B :   ThrownKoopaAirEndF
0x17C :   ThrownKoopaAirEndB
0x17D :   ThrownKirbyDrinkSShot
0x17E :   ThrownKirbySpitSShot
*/
};

export const specials = {

  "MARTH" : {
    341 : "NEUTRALSPECIALGROUND", //SPECIALNSTART
    342 : "NEUTRALSPECIALGROUND", //SPECIALNLOOP
    343 : "NEUTRALSPECIALGROUND", //SPECIALNEND
    344 : "NEUTRALSPECIALGROUND", //SPECIALNEND   fully charged
    345 : "NEUTRALSPECIALAIR", //SPECIALAIRNSTART
    346 : "NEUTRALSPECIALAIR", //SPECIALAIRNLOOP
    347 : "NEUTRALSPECIALAIR", //SPECIALAIRNEND
    348 : "NEUTRALSPECIALAIR", //SPECIALAIRNEND   fully charged
    349 : "SIDESPECIALGROUND", //SPECIALS1
    350 : "SIDESPECIALGROUND2UP", //SPECIALS2HI
    351 : "SIDESPECIALGROUND2FORWARD", //SPECIALS2LW
    352 : "SIDESPECIALGROUND3UP", //SPECIALS3HI
    353 : "SIDESPECIALGROUND3FORWARD", //SPECIALS3S
    354 : "SIDESPECIALGROUND3DOWN", //SPECIALS3LW
    355 : "SIDESPECIALGROUND4UP", //SPECIALS4HI
    356 : "SIDESPECIALGROUND4FORWARD", //SPECIALS4S
    357 : "SIDESPECIALGROUND4DOWN", //SPECIALS4LW
    358 : "SIDESPECIALAIR", //SPECIALAIRS1
    359 : "SIDESPECIALAIR2UP", //SPECIALAIRS2HI
    360 : "SIDESPECIALAIR2FORWARD", //SPECIALAIRS2LW
    361 : "SIDESPECIALAIR3UP", //SPECIALAIRS3HI
    362 : "SIDESPECIALAIR3FORWARD", //SPECIALAIRS3S
    363 : "SIDESPECIALAIR3DOWN", //SPECIALAIRS3LW
    364 : "SIDESPECIALAIR4UP", //SPECIALAIRS4HI
    365 : "SIDESPECIALAIR4FORWARD", //SPECIALAIRS4S
    366 : "SIDESPECIALAIR4DOWN", //SPECIALAIRS4LW
    367 : "UPSPECIAL", //SPECIALHI
    368 : "UPSPECIAL", //SPECIALAIRHI
    369 : "DOWNSPECIALGROUND", //SPECIALLW
    370 : "DOWNSPECIALGROUND2", //SPECIALLWHIT
    371 : "DOWNSPECIALAIR", //SPECIALAIRLW
    372 : "DOWNSPECIALAIR2", //SPECIALAIRLWHIT
  },

  "FOX" : {
    341 : "NEUTRALSPECIALGROUND", //SPECIALNSTART
    342 : "NEUTRALSPECIALGROUND", //SPECIALNLOOP
    343 : "NEUTRALSPECIALGROUND", //SPECIALNEND
    344 : "NEUTRALSPECIALAIR", //SPECIALAIRNSTART
    345 : "NEUTRALSPECIALAIR", //SPECIALAIRNLOOP
    346 : "NEUTRALSPECIALAIR", //SPECIALAIRNEND
    347 : "SIDESPECIALGROUND", //SPECIALSSTART
    348 : "SIDESPECIALGROUND", //SPECIALS
    349 : "SIDESPECIALGROUND", //SPECIALSEND
    350 : "SIDESPECIALAIR", //SPECIALAIRSSTART
    351 : "SIDESPECIALAIR", //SPECIALAIRS
    352 : "SIDESPECIALAIR", //SPECIALAIRSEND
    353 : "UPSPECIALCHARGE", //SPECIALHIHOLD
    354 : "UPSPECIALCHARGE", //SPECIALHIHOLDAIR
    355 : "UPSPECIALLAUNCH", //SPECIALHI   ground version
    356 : "UPSPECIALLAUNCH", //SPECIALHI   air version
    357 : "LANDINGFALLSPECIAL", //SPECIALHILANDING
    358 : "FALL", //SPECIALHIFALL
    359 : "FIREFOXBOUNCE", //SPECIALHIBOUND
    360 : "DOWNSPECIALGROUND", //SPECIALLWSTART
    361 : "DOWNSPECIALGROUND", //SPECIALLWLOOP
    362 : "DOWNSPECIALGROUND", //SPECIALLWHIT
    363 : "DOWNSPECIALGROUND", //SPECIALLWEND
    364 : "DOWNSPECIALGROUND", //SPECIALLWLOOP   turning
    365 : "DOWNSPECIALAIR", //SPECIALAIRLWSTART
    366 : "DOWNSPECIALAIR", //SPECIALAIRLWLOOP
    367 : "DOWNSPECIALAIR", //SPECIALAIRLWHIT
    368 : "DOWNSPECIALAIR", //SPECIALAIRLWEND
    369 : "DOWNSPECIALAIR", //SPECIALAIRLWLOOP   turning
  },

  "FALCO" : {
    341 : "NEUTRALSPECIALGROUND", //SPECIALNSTART
    342 : "NEUTRALSPECIALGROUND", //SPECIALNLOOP
    343 : "NEUTRALSPECIALGROUND", //SPECIALNEND
    344 : "NEUTRALSPECIALAIR", //SPECIALAIRNSTART
    345 : "NEUTRALSPECIALAIR", //SPECIALAIRNLOOP
    346 : "NEUTRALSPECIALAIR", //SPECIALAIRNEND
    347 : "SIDESPECIALGROUND", //SPECIALSSTART
    348 : "SIDESPECIALGROUND", //SPECIALS
    349 : "SIDESPECIALGROUND", //SPECIALSEND
    350 : "SIDESPECIALAIR", //SPECIALAIRSSTART
    351 : "SIDESPECIALAIR", //SPECIALAIRS
    352 : "SIDESPECIALAIR", //SPECIALAIRSEND
    353 : "UPSPECIALCHARGE", //SPECIALHIHOLD
    354 : "UPSPECIALCHARGE", //SPECIALHIHOLDAIR
    355 : "UPSPECIALLAUNCH", //SPECIALHI   ground version
    356 : "UPSPECIALLAUNCH", //SPECIALHI   air version
    357 : "LANDINGFALLSPECIALG", //SPECIALHILANDING
    358 : "FALL", //SPECIALHIFALL
    359 : "FIREFOXBOUNCE", //SPECIALHIBOUND
    360 : "DOWNSPECIALGROUNDSTART", //SPECIALLWSTART
    361 : "DOWNSPECIALGROUNDLOOP", //SPECIALLWLOOP
    362 : "DOWNSPECIALGROUNDLOOP", //SPECIALLWHIT
    363 : "DOWNSPECIALGROUNDEND", //SPECIALLWEND
    364 : "DOWNSPECIALGROUNDTURN", //SPECIALLWLOOP   turning
    365 : "DOWNSPECIALAIRSTART", //SPECIALAIRLWSTART
    366 : "DOWNSPECIALAIRLOOP", //SPECIALAIRLWLOOP
    367 : "DOWNSPECIALAIRLOOP", //SPECIALAIRLWHIT
    368 : "DOWNSPECIALAIREND", //SPECIALAIRLWEND
    369 : "DOWNSPECIALAIRTURN", //SPECIALAIRLWLOOP   turning
  },

  "PUFF" : {
    341 : "JUMPAERIAL1", //JUMPAERIALF1 NOTE: DOING A TURNING MULTIJUMP ONLY ROTATES THE MODEL, IT IS NOT A SEPERATE STATE OR ANIMATION
    342 : "JUMPAERIAL2", //JUMPAERIALF2
    343 : "JUMPAERIAL3", //JUMPAERIALF3
    344 : "JUMPAERIAL4", //JUMPAERIALF4
    345 : "JUMPAERIAL5", //JUMPAERIALF5
    346 : "NEUTRALSPECIALGROUND", //SPECIALNSTARTR
    347 : "NEUTRALSPECIALGROUND", //SPECIALNSTARTL
    348 : "NEUTRALSPECIALGROUND", //SPECIALN  (ground charge start)
    349 : "NEUTRALSPECIALGROUND", //SPECIALN  (ground charge loop)
    350 : "NEUTRALSPECIALGROUND", //SPECIALN  (ground launch)
    351 : "NEUTRALSPECIALGROUNDTURN", //SPECIALN  (ground turn)
    352 : "NEUTRALSPECIALGROUND", //SPECIALNENDR
    353 : "NEUTRALSPECIALGROUND", //SPECIALNENDL
    354 : "NEUTRALSPECIALAIR", //SPECIALAIRNSTARTR
    355 : "NEUTRALSPECIALAIR", //SPECIALAIRNSTARTL
    356 : "NEUTRALSPECIALAIR", //SPECIALN  (air charge start)
    357 : "NEUTRALSPECIALAIR", //SPECIALN  (air charge loop)
    358 : "NEUTRALSPECIALAIR", //SPECIALN  (air launch)
    359 : "NEUTRALSPECIALAIR", //SPECIALN  (air turn) (can only be activated if the ground is removed whilst your are ground turning)
    360 : "NEUTRALSPECIALAIR", //SPECIALAIRNENDR
    361 : "NEUTRALSPECIALAIR", //SPECIALAIRNENDL
    362 : "NEUTRALSPECIALAIR", //SPECIALN  (hit)
    363 : "SIDESPECIALGROUND", //SPECIALS
    364 : "SIDESPECIALAIR", //SPECIALAIRS
    365 : "UPSPECIAL", //SPECIALHIL
    366 : "UPSPECIAL", //SPECIALAIRHIL
    367 : "UPSPECIAL", //SPECIALHIR
    368 : "UPSPECIAL", //SPECIALAIRHIR
    369 : "DOWNSPECIALGROUND", //SPECIALLWL
    370 : "DOWNSPECIALAIR", //SPECIALAIRLWL
    371 : "DOWNSPECIALGROUND", //SPECIALLWR
    372 : "DOWNSPECIALAIR" //SPECIALAIRLWR
  },

  "FALCON" : {
    347 : "NEUTRALSPECIALGROUND", //SPECIALN
    348 : "NEUTRALSPECIALAIR", //SPECIALAIRN
    349 : "SIDESPECIALGROUND", //SPECIALSSTART  (launch inert detection)
    350 : "SIDESPECIALGROUNDHIT", //SPECIALS   (follow through hit)
    351 : "SIDESPECIALAIR", //SPECIALAIRSSTART
    352 : "SIDESPECIALAIRHIT", //SPECIALAIRS
    353 : "UPSPECIAL", //SPECIALHI
    354 : "UPSPECIAL", //SPECIALAIRHI
    355 : "UPSPECIALCATCH", //SPECIALHICATCH
    356 : "UPSPECIALTHROW", //SPECIALHITHROW
    357 : "DOWNSPECIALGROUND", //SPECIALLW
    358 : "DOWNSPECIALGROUNDENDGROUND", //SPECIALLWEND   (grounded falcon kick that ends on the ground)
    359 : "DOWNSPECIALAIR", //SPECIALAIRLW
    360 : "DOWNSPECIALAIRENDGROUND", //SPECIALAIRLWEND  (air falcon kick that ends on the ground)
    361 : "DOWNSPECIALAIRENDEND", //SPECIALAIRLWENDAIR  (air fakcon kick that ends in the air)
    362 : "DOWNSPECIALGROUNDENDAIR", //SPECIALLWENDAIR   (grounded falcon kick that ends in the air)
    363 : "UPSPECIALTHROW" //SPECIALHITHROW  (falcon kick into wall)
  }

};