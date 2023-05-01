import {FiPhoneCall} from "react-icons/fi"
import {GiNetworkBars} from "react-icons/gi"
import {FaRegLightbulb} from "react-icons/fa"
import TvIcon from '@mui/icons-material/Tv';
import {BsCodeSlash} from "react-icons/bs"
import {BsChatDots} from "react-icons/bs"
import {FiPrinter} from "react-icons/fi"
import {BiWalletAlt} from "react-icons/bi"

export const services = [
    {
        id: 1,
        logo: <FiPhoneCall />,
        title: 'Buy Airtime'
    },
    {
        id: 2,
        logo: <GiNetworkBars />,
        title: 'Buy Data'
    },
    {
        id: 3,
        logo: <FaRegLightbulb />,
        title: 'Buy Electricity'
    },
    {
        id: 4,
        logo: <TvIcon />,
        title: 'Cable Tv'
    },
    {
        id: 5,
        logo: <BiWalletAlt />,
        title: 'Wallet Summary'
    },
    {
        id: 6,
        logo: <BsCodeSlash />,
        title: "Developer's API"
    },
    {
        id: 7,
        logo: <BsChatDots />,
        title: 'Bulk SMS'
    },
    {
        id: 8,
        logo: <FiPrinter />,
        title: 'Recharge Card Printing'
    },
]