<script>
  // Per-icon subpath imports keep the bundle tree-shaken to only what we use.
  import Camera from 'lucide-svelte/icons/camera'
  import SlidersHorizontal from 'lucide-svelte/icons/sliders-horizontal'
  import PersonStanding from 'lucide-svelte/icons/person-standing'
  import Zap from 'lucide-svelte/icons/zap'
  import Activity from 'lucide-svelte/icons/activity'
  import Shield from 'lucide-svelte/icons/shield'
  import Mic from 'lucide-svelte/icons/mic'
  import Image from 'lucide-svelte/icons/image'
  import Landmark from 'lucide-svelte/icons/landmark'
  import User from 'lucide-svelte/icons/user'
  import Globe from 'lucide-svelte/icons/globe'
  import Video from 'lucide-svelte/icons/video'
  import Sparkles from 'lucide-svelte/icons/sparkles'
  import Bug from 'lucide-svelte/icons/bug'
  import Monitor from 'lucide-svelte/icons/monitor'
  import Webcam from 'lucide-svelte/icons/webcam'
  import Circle from 'lucide-svelte/icons/circle'
  import Square from 'lucide-svelte/icons/square'
  import Eye from 'lucide-svelte/icons/eye'
  import EyeOff from 'lucide-svelte/icons/eye-off'
  import FolderOpen from 'lucide-svelte/icons/folder-open'
  import Info from 'lucide-svelte/icons/info'
  import X from 'lucide-svelte/icons/x'
  import Settings from 'lucide-svelte/icons/settings'
  import RefreshCw from 'lucide-svelte/icons/refresh-cw'

  const ICONS = {
    Camera, SlidersHorizontal, PersonStanding, Zap, Activity, Shield, Mic, Image,
    Landmark, User, Globe, Video, Sparkles, Bug, Monitor, Webcam, Circle, Square,
    Eye, EyeOff, FolderOpen, Info, X, Settings, RefreshCw
  }

  let { name = 'Circle', size = 16, strokeWidth = 2, class: klass = '' } = $props()
  const Cmp = $derived(ICONS[name] ?? Circle)
</script>

<Cmp size={size} stroke-width={strokeWidth} class={klass} />
