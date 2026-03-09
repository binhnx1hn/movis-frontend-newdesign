# 🎨 Visual Mockup & Wireframe
## Bản Đồ Số Trại Giam - Sci-Fi Dashboard

---

## 📐 LAYOUT OVERVIEW

### Desktop Layout (1920x1080)

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ HEADER                                                                          │
│ ┌──────────────────────────────────────────────────────────────────────────┐  │
│ │ 🏛️ TRẠI GIAM DASHBOARD    [Search]    [Notifications] [User] [Settings] │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────┐   │
│ │ 🚨 THÔNG BÁO KHẨN CẤP                                    [Filter] [×]   │   │
│ ├─────────────────────────────────────────────────────────────────────────┤   │
│ │ 🔴 10:05 - Khu Nam B, Buồng 12: Xô xát giữa phạm nhân  [Đang xử lý]   │   │
│ │ 🟠 09:45 - Khu Cách Ly: Camera số 7 mất tín hiệu       [Đã kiểm soát] │   │
│ │ 🟡 09:30 - Canteen: Chậm tiến độ phục vụ ca trưa       [Đã giải quyết]│   │
│ └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
│ ┌──────────────────────────────────────────┐  ┌──────────────────────────┐    │
│ │                                          │  │ 💻 SERVER STATUS         │    │
│ │   🗺️ BẢN ĐỒ SỐ TRẠI GIAM               │  │ ┌──────────────────────┐ │    │
│ │   ┌────────────────────────────────┐    │  │ │ Main Server          │ │    │
│ │   │  🏛️ CỔNG CHÍNH                 │    │  │ │ CPU:  [████████░░] 78%│ │    │
│ │   ├──────┬──────┬──────┬──────────┤    │  │ │ RAM:  [██████████] 92%│ │    │
│ │   │ NAM A│ NAM B│  NỮ  │   Y TẾ   │    │  │ │ Disk: [█████░░░░░] 45%│ │    │
│ │   │ 450  │ 380  │ 120  │   15     │    │  │ └──────────────────────┘ │    │
│ │   │ 📹45 │ 📹38 │ 📹28 │  📹8     │    │  │ ┌──────────────────────┐ │    │
│ │   │ 90%🟡│ 95%🔴│ 80%🟢│  75%🟢   │    │  │ │ Camera Server        │ │    │
│ │   ├──────┼──────┼──────┼──────────┤    │  │ │ CPU:  [██████░░░░] 65%│ │    │
│ │   │ LAO  │ CÁCH │CANTEEN│ VĂN PHÒNG│    │  │ │ Storage: 18.5/24 TB  │ │    │
│ │   │ ĐỘNG │  LY  │       │          │    │  │ └──────────────────────┘ │    │
│ │   │ 200  │  25  │  🍽️  │   👮120  │    │  │ ┌──────────────────────┐ │    │
│ │   │ 📹25 │ 📹12 │ 📹15  │  📹20    │    │  │ │ Database Server      │ │    │
│ │   │ 80%🟢│ 50%🟢│100%🟢 │  100%🟢  │    │  │ │ CPU:  [█████░░░░░] 52%│ │    │
│ │   └──────┴──────┴──────┴──────────┘    │  │ │ DB: 2.8 TB           │ │    │
│ │                                          │  │ └──────────────────────┘ │    │
│ │   Tổng: 1,175/1,500 (78%)               │  │                          │    │
│ │   Camera: 193/210 (91.9%)               │  │ [📈 Chi tiết]            │    │
│ │   [🔍] [➕] [➖] [⛶]                    │  └──────────────────────────┘    │
│ └──────────────────────────────────────────┘                                  │
│                                              ┌──────────────────────────┐    │
│ ┌──────────────────────────────────────────┐ │ 🍽️ CANTEEN STATUS       │    │
│ │ 📊 BIỂU ĐỒ QUÂN SỐ                       │ │ ┌──────────────────────┐ │    │
│ │ ┌────────────────────────────────────┐   │ │ │ 🔴 LIVE - Bữa Trưa   │ │    │
│ │ │     500│    ■■■■■      ■■■■■       │   │ │ │ 856/1,175 suất       │ │    │
│ │ │     400│    ■■■■■      ■■■■■       │   │ │ │ [████████░░] 73%     │ │    │
│ │ │     300│    ■■■■■      ■■■■■  ■■■  │   │ │ │ Còn lại: 35 phút     │ │    │
│ │ │     200│ █1 ■■■■■   █2 ■■■■■  ■■■  │   │ │ └──────────────────────┘ │    │
│ │ │     100│ █1 ■■■■■   █2 ■■■■■  ■■■  │   │ │ ┌──────────────────────┐ │    │
│ │ │      ─┼──────────────────────────  │   │ │ │ 🏪 KHO NGUYÊN LIỆU   │ │    │
│ │ │        │ Nam A  Nam B   Nữ  Cách Ly│   │ │ │ 🍚 Gạo:  850kg  🟢   │ │    │
│ │ └────────────────────────────────────┘   │ │ │ 🥩 Thịt: 120kg  🟡   │ │    │
│ │ █1=Phạm nhân █2=Công suất █3=Cán bộ      │ │ │ 🥬 Rau:  200kg  🔴   │ │    │
│ └──────────────────────────────────────────┘ │ └──────────────────────┘ │    │
│                                              │                          │    │
│ ┌──────────────────────────────────────────┐ │ Chi phí hôm nay:        │    │
│ │ 📹 CAMERA THEO KHU VỰC                   │ │ 35,250,000 VNĐ          │    │
│ │ ┌────────────────────────────────────┐   │ │                          │    │
│ │ │  50┤   ▓▓▓▓▓                       │   │ │ [📊 Chi tiết]            │    │
│ │ │  40┤   ▓▓▓▓▓   ░░░░                │   │ └──────────────────────────┘    │
│ │ │  30┤   ▓▓▓▓▓   ░░░░   ▓▓▓          │   │                                  │
│ │ │  20┤   ▓▓▓▓▓   ▓▓▓▓   ▓▓▓    ▓▓    │   │                                  │
│ │ │  10┤   ▓▓▓▓▓   ▓▓▓▓   ▓▓▓    ▓▓    │   │                                  │
│ │ │   ─┴────────────────────────────   │   │                                  │
│ │ │      Nam A  Nam B   Nữ  Cách Ly   │   │                                  │
│ │ └────────────────────────────────────┘   │                                  │
│ │ ▓=Hoạt động ░=Hỏng                       │                                  │
│ │ ⚠️ 17 camera cần sửa chữa                │                                  │
│ └──────────────────────────────────────────┘                                  │
│                                                                                 │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🎨 COLOR SCHEME VISUALIZATION

### Primary Palette
```
┌─────────────────────────────────────────────────────────────┐
│ CYBER BLUE (#00D9FF)     ████████████████████████████████  │
│ Used for: Main accents, borders, active states              │
│                                                              │
│ ELECTRIC CYAN (#00FFF7)  ████████████████████████████████  │
│ Used for: Highlights, hover states, important elements      │
│                                                              │
│ NEON GREEN (#00FF9D)     ████████████████████████████████  │
│ Used for: Success states, normal status, positive metrics   │
│                                                              │
│ WARNING AMBER (#FFB800)  ████████████████████████████████  │
│ Used for: Warning states, caution, medium priority          │
│                                                              │
│ CRITICAL RED (#FF004D)   ████████████████████████████████  │
│ Used for: Critical alerts, errors, high priority            │
└─────────────────────────────────────────────────────────────┘
```

### Background Palette
```
┌─────────────────────────────────────────────────────────────┐
│ DEEP NAVY (#0A1628)      ████████████████████████████████  │
│ Used for: Main background                                   │
│                                                              │
│ DARK SLATE (#1A2332)     ████████████████████████████████  │
│ Used for: Cards, panels, secondary backgrounds              │
│                                                              │
│ NEUTRAL GRAY (#6B7A8F)   ████████████████████████████████  │
│ Used for: Text, borders, inactive elements                  │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎭 COMPONENT STATES

### Zone Card States

#### Normal State (< 80% occupancy)
```
┌─────────────────────────────────┐
│ KHU NAM A                       │ ← Green glow border
│ MALE                            │
│                                 │
│ 👤 Phạm nhân    450/500         │
│ 📹 Camera       45/50           │
│ 🚪 Phòng        25/28           │
│                                 │
│ Tỷ lệ lấp đầy   90% 🟢         │
│ [████████████░░░░░░] ← Green   │
│                                 │
│ Camera hoạt động 90% 🟢        │
│ [████████████░░░░░░] ← Cyan    │
└─────────────────────────────────┘
```

#### Warning State (80-95% occupancy)
```
┌─────────────────────────────────┐
│ KHU NAM B                  🟡  │ ← Amber glow border
│ MALE                            │
│                                 │
│ 👤 Phạm nhân    380/400         │
│ 📹 Camera       38/40           │
│ 🚪 Phòng        22/24           │
│                                 │
│ Tỷ lệ lấp đầy   95% 🟡         │
│ [██████████████████░] ← Amber  │
│                                 │
│ Camera hoạt động 95% 🟢        │
│ [██████████████████░] ← Cyan   │
└─────────────────────────────────┘
```

#### Critical State (> 95% occupancy + Alert)
```
┌─────────────────────────────────┐
│ KHU CÁCH LY           🚨 2      │ ← Red glow border (pulsing)
│ ISOLATION                       │
│                                 │
│ 👤 Phạm nhân    48/50           │
│ 📹 Camera       12/15           │
│ 🚪 Phòng        10/10           │
│                                 │
│ Tỷ lệ lấp đầy   96% 🔴         │
│ [████████████████████] ← Red   │
│                                 │
│ Camera hoạt động 80% 🟡        │
│ [████████████████░░░] ← Amber  │
└─────────────────────────────────┘
```

### Alert Banner States

#### Critical Alert (Pulsing Animation)
```
┌────────────────────────────────────────────────────────────┐
│ 🔴 CRITICAL  [Đang xử lý]                            [×]   │ ← Red glow (pulsing)
│                                                             │
│ 10:05 - Khu Nam B, Buồng 12: Xô xát giữa phạm nhân        │
│                                                             │
│ 🕐 2 phút trước  📍 Khu Nam B - Buồng 12  👮 Nguyễn Văn A │
│                                                             │
│ [Xem chi tiết] [Báo cáo sự cố]                            │
└────────────────────────────────────────────────────────────┘
```

#### High Priority Alert
```
┌────────────────────────────────────────────────────────────┐
│ 🟠 HIGH  [Đã kiểm soát]                              [×]   │ ← Amber glow
│                                                             │
│ 09:45 - Khu Cách Ly: Camera số 7 mất tín hiệu             │
│                                                             │
│ 🕐 20 phút trước  📍 Khu Cách Ly  👮 Trần Thị B           │
└────────────────────────────────────────────────────────────┘
```

#### Medium Priority Alert
```
┌────────────────────────────────────────────────────────────┐
│ 🟡 MEDIUM  [Đã giải quyết]                           [×]   │ ← Cyan glow
│                                                             │
│ 09:30 - Canteen: Chậm tiến độ phục vụ ca trưa             │
│                                                             │
│ 🕐 35 phút trước  📍 Canteen  👨‍🍳 Lê Văn C               │
└────────────────────────────────────────────────────────────┘
```

---

## 📱 RESPONSIVE BREAKPOINTS

### Tablet Layout (1024x768)

```
┌──────────────────────────────────────────┐
│ HEADER                            [☰]    │
├──────────────────────────────────────────┤
│ 🚨 ALERTS (Collapsed)            [▼]    │
├──────────────────────────────────────────┤
│                                          │
│ 🗺️ PRISON MAP                           │
│ ┌────────────────────────────────────┐  │
│ │  🏛️ CỔNG CHÍNH                     │  │
│ │  ┌──────┬──────┬──────┬──────┐    │  │
│ │  │ NAM A│ NAM B│  NỮ  │  Y TẾ │    │  │
│ │  └──────┴──────┴──────┴──────┘    │  │
│ │  ┌──────┬──────┬──────┬──────┐    │  │
│ │  │ LAO  │ CÁCH │CANTEEN│ VĂN  │    │  │
│ │  │ ĐỘNG │  LY  │       │PHÒNG │    │  │
│ │  └──────┴──────┴──────┴──────┘    │  │
│ └────────────────────────────────────┘  │
│                                          │
├──────────────────────────────────────────┤
│ 📊 CHARTS (Stacked)                     │
├──────────────────────────────────────────┤
│ 💻 WIDGETS (Accordion)           [▼]    │
└──────────────────────────────────────────┘
```

### Mobile Layout (375x667)

```
┌─────────────────────────┐
│ HEADER            [☰]   │
├─────────────────────────┤
│ 🚨 ALERTS         [▼]   │
│ • 3 cảnh báo            │
├─────────────────────────┤
│                         │
│ 🗺️ MAP (Simplified)     │
│ ┌─────────────────────┐ │
│ │ 🏛️ CỔNG CHÍNH       │ │
│ │ ┌─────┬─────┐       │ │
│ │ │NAM A│NAM B│       │ │
│ │ ├─────┼─────┤       │ │
│ │ │ NỮ  │ Y TẾ│       │ │
│ │ └─────┴─────┘       │ │
│ │ [Xem đầy đủ]        │ │
│ └─────────────────────┘ │
│                         │
├─────────────────────────┤
│ 📊 KEY METRICS          │
│ • Phạm nhân: 1,175     │
│ • Camera: 193/210      │
│ • Cảnh báo: 3          │
├─────────────────────────┤
│ [Xem chi tiết] ▼       │
└─────────────────────────┘
```

---

## 🎬 ANIMATION SEQUENCES

### Page Load Animation

```
Timeline:
0.0s  │ Background fade in
0.2s  │ Header slides down
0.4s  │ Alert banner fades in
0.6s  │ Map container appears
0.8s  │ Zone cards animate in (staggered)
1.0s  │ Charts draw
1.2s  │ Widgets slide in from right
1.5s  │ Scanning lines start
```

### Zone Card Hover Animation

```
State: Default
┌─────────────┐
│   ZONE A    │  ← Border: 2px solid cyan
│   [Data]    │     Shadow: 0 0 20px cyan
└─────────────┘

State: Hover (0.3s transition)
┌─────────────┐
│   ZONE A    │  ← Border: 2px solid cyan (brighter)
│   [Data]    │     Shadow: 0 0 40px cyan (stronger)
│ [Details]   │     Scale: 1.02
└─────────────┘     Transform: translateY(-4px)
```

### Alert Pulse Animation

```
Critical Alert Animation (1.5s loop):

Frame 1 (0.0s):  ┌────────┐  Scale: 1.0,   Opacity: 1.0
                 │ ALERT  │  Glow: 20px
                 └────────┘

Frame 2 (0.75s): ┌────────┐  Scale: 1.05,  Opacity: 0.8
                 │ ALERT  │  Glow: 40px
                 └────────┘

Frame 3 (1.5s):  ┌────────┐  Scale: 1.0,   Opacity: 1.0
                 │ ALERT  │  Glow: 20px
                 └────────┘
```

### Progress Bar Fill Animation

```
Initial (0.0s):
[░░░░░░░░░░░░░░░░░░░░] 0%

Animating (1.0s ease-out):
[████████████░░░░░░░░] 60%

Final (1.0s):
[████████████░░░░░░░░] 60%
     ↑
   Glow effect
```

---

## 🖼️ ICON SYSTEM

### Status Icons
```
🟢 Normal    - Green circle (< 80%)
🟡 Warning   - Yellow circle (80-95%)
🔴 Critical  - Red circle (> 95%)
🚨 Alert     - Pulsing red triangle
⚠️ Caution   - Yellow triangle
✅ Success   - Green checkmark
❌ Error     - Red X
⏳ Pending   - Hourglass
🔄 Processing - Rotating arrows
```

### Functional Icons
```
👤 Inmates   - User icon
👮 Officers  - Police officer
👨‍⚕️ Medical   - Doctor
👨‍🍳 Kitchen   - Chef
📹 Camera    - Video camera
🚪 Room      - Door
🛏️ Bed       - Hospital bed
🍽️ Canteen   - Fork and knife
💻 Server    - Computer
🏛️ Gate      - Building
```

### Action Icons
```
🔍 Search    - Magnifying glass
➕ Zoom In   - Plus
➖ Zoom Out  - Minus
⛶ Fullscreen - Expand
📊 Chart     - Bar chart
📈 Trend     - Line chart up
📉 Decline   - Line chart down
🔔 Notify    - Bell
⚙️ Settings  - Gear
👁️ View      - Eye
✏️ Edit      - Pencil
🗑️ Delete    - Trash
```

---

## 🎯 INTERACTIVE ELEMENTS

### Zone Card Click Flow

```
1. User clicks zone card
   ↓
2. Card scales down (0.98) - tap feedback
   ↓
3. Modal slides up from bottom
   ↓
4. Modal content fades in
   ↓
5. Background blurs
   ↓
6. Zone details displayed

Modal Content:
┌─────────────────────────────────────────┐
│ KHU NAM A - CHI TIẾT              [×]   │
├─────────────────────────────────────────┤
│                                         │
│ 📊 THỐNG KÊ TỔNG QUAN                   │
│ • Phạm nhân: 450/500 (90%)             │
│ • Cán bộ: 35 người                     │
│ • Phòng giam: 25/28                    │
│ • Camera: 45/50 (90%)                  │
│                                         │
│ 🚪 DANH SÁCH PHÒNG GIAM                │
│ ┌─────────────────────────────────┐   │
│ │ Phòng 01  [20/20] 🔴 Đầy        │   │
│ │ Phòng 02  [18/20] 🟡 Gần đầy    │   │
│ │ Phòng 03  [15/20] 🟢 Bình thường│   │
│ └─────────────────────────────────┘   │
│                                         │
│ 📹 CAMERA STATUS                        │
│ • Hoạt động: 45                        │
│ • Offline: 3                           │
│ • Bảo trì: 2                           │
│                                         │
│ [Xem camera] [Báo cáo] [Đóng]         │
└─────────────────────────────────────────┘
```

### Search Interaction

```
1. User focuses search input
   ↓
2. Input border glows cyan
   ↓
3. User types "Nam"
   ↓
4. Zones filter in real-time
   ↓
5. Non-matching zones fade out (opacity: 0.3)
   ↓
6. Matching zones highlight (border pulse)
   ↓
7. User clears search
   ↓
8. All zones fade back in
```

---

## 🎨 THEME VARIATIONS

### Dark Mode (Default)
```
Background: #0A1628 (Deep Navy)
Cards: #1A2332 (Dark Slate)
Text: #FFFFFF (White)
Accent: #00D9FF (Cyber Blue)
```

### Light Mode (Optional)
```
Background: #F0F4F8 (Light Gray)
Cards: #FFFFFF (White)
Text: #1A2332 (Dark Slate)
Accent: #0088CC (Blue)
```

### High Contrast Mode (Accessibility)
```
Background: #000000 (Black)
Cards: #1A1A1A (Dark Gray)
Text: #FFFFFF (White)
Accent: #00FFFF (Bright Cyan)
Border: 3px (Thicker)
```

---

## 📏 SPACING SYSTEM

```
┌─────────────────────────────────────────┐
│ Spacing Scale (Tailwind-based)         │
├─────────────────────────────────────────┤
│ xs:   4px   (0.25rem)  - Tight spacing │
│ sm:   8px   (0.5rem)   - Small gaps    │
│ md:   16px  (1rem)     - Default       │
│ lg:   24px  (1.5rem)   - Section gaps  │
│ xl:   32px  (2rem)     - Large gaps    │
│ 2xl:  48px  (3rem)     - Major sections│
│ 3xl:  64px  (4rem)     - Page sections │
└─────────────────────────────────────────┘
```

### Component Spacing Example

```
┌─────────────────────────────────────────┐ ← 24px padding
│ COMPONENT HEADER                        │
│                                         │ ← 16px gap
│ ┌─────────────────────────────────┐    │
│ │ Content Block 1                 │    │ ← 16px padding
│ └─────────────────────────────────┘    │
│                                         │ ← 16px gap
│ ┌─────────────────────────────────┐    │
│ │ Content Block 2                 │    │ ← 16px padding
│ └─────────────────────────────────┘    │
│                                         │
└─────────────────────────────────────────┘ ← 24px padding
```

---

## 🎭 LOADING STATES

### Skeleton Loading

```
┌─────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░       │ ← Shimmer animation
│                                 │
│ ░░░░░░░░░░  ░░░░░░░░░░         │
│ ░░░░░░░░░░  ░░░░░░░░░░         │
│ ░░░░░░░░░░  ░░░░░░░░░░         │
│                                 │
│ ░░░░░░░░░░░░░░░░░░░░░░░░       │
│ ░░░░░░░░░░░░░░░░░░░░░░░░       │
└─────────────────────────────────┘
```

### Spinner Loading

```
     ⟳
   Loading...
```

### Progress Loading

```
Loading data...
[████████████░░░░░░░░] 60%
```

---

**Document Version**: 1.0  
**Last Updated**: 2026-03-09  
**Status**: ✅ Ready for Design Review
