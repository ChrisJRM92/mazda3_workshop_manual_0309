import {
    MdDirectionsCar,
    MdSettings,
    MdHeight,
    MdSwapHoriz,
    MdAlbum,
    MdAllInclusive,
    MdControlCamera,
    MdAcUnit,
    MdBuild,
    MdOndemandVideo,
    MdMenuBook,
} from 'react-icons/md';
import { PiEngineFill } from "react-icons/pi";
import { PiWarningCircleFill } from "react-icons/pi";
import { TbCarSuspension } from "react-icons/tb";
import { FaGears } from "react-icons/fa6";
import { GiCarWheel } from "react-icons/gi";
import { PiSteeringWheelFill } from "react-icons/pi";
import { engineGroups } from './engineGroups';
import { generalGroups } from './generalGroups';
import { suspensionGroups } from './suspensionGroups';
import { transmissionGroups } from './transmissionGroups';
import { diferChangeGroups } from './diferChangeGroups';
import { brakesGroups } from './brakesGroups';
import { directionGroups } from './directionGroups';
import { airGroups } from './airGroups';
import { bodyWorkGroups } from './bodyWorkGroups';
import { GoChecklist } from "react-icons/go";
import { MdElectricBolt } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";


export const manualSections = [
    {
        id: 'general', type: 'section', label: 'Información General', icon: PiWarningCircleFill,
        groups: generalGroups,
    },
    {
        id: 'engine', type: 'section', label: 'Motor', icon: PiEngineFill,
        groups: engineGroups,
    },
    {
        id: 'suspension', type: 'section', label: 'Suspensión', icon: TbCarSuspension,
        groups: suspensionGroups,
    },
    {
        id: 'transmission', type: 'section', label: 'Transmisión', icon: FaGears,
        groups: transmissionGroups,
    },
    {
        id: 'brakes', type: 'section', label: 'Frenos', icon: GiCarWheel,
        groups: brakesGroups,
    },
    {
        id: 'differential', type: 'section', label: 'Diferencial', icon: FaGears,
        groups: diferChangeGroups,
    },
    {
        id: 'steering', type: 'section', label: 'Dirección', icon: PiSteeringWheelFill,
        groups: directionGroups,
    },
    {
        id: 'ac', type: 'section', label: 'Aire Acondicionado', icon: MdAcUnit,
        groups: airGroups,
    },
    {
        id: 'bodywork', type: 'section', label: 'Carrocería', icon: MdDirectionsCar,
        groups: bodyWorkGroups,
    },
    {
        id: 'divider-1',
        type: 'divider',
    },
    {
        id: 'user-manual', type: 'link', label: 'Manual del Usuario', icon: MdMenuBook, href: '/content/pdfViewerJS/web/viewer.html?file=/content/manuals/[EN]Mazda-3-2006-Owners-Manual.pdf',
    },
    {
        id: 'videos',
        type: 'link',
        label: 'Videos',
        icon: MdOndemandVideo,
        href: '/content/VideoTutorials.html',
    },
    {
        id: 'maintenance', type: 'limk', label: 'Mantenimiento', icon: GoChecklist, href: '/content/esicont/es/srvc/html/B3E000000013W01.html',
    },
    {
        id: 'electric-manual', type: 'link', label: 'Diagrama Electrico', icon: MdElectricBolt, href: '/content/pdfViewerJS/web/viewer.html?file=/content/manuals/2006-mazda3-facelift-wiring-diagram.pdf',
    },
    {
        id: 'about', type: 'link', label: 'Acerca de', icon: FaInfoCircle, href: '/content/about.html',
    },
]