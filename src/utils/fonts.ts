//= Fonts
import { Inter, Noto_Serif, Montserrat } from 'next/font/google'

const noto_serif = Noto_Serif({ weight: ["400", "700"], subsets: ['latin'] }); //= Main Font
const inter = Inter({ subsets: ['latin'] }); //= Text Font
const montserrat = Montserrat({ subsets: ['latin'], weight: ["400", "700", "200", "300", "600", "900"] }); //= Text Font

export const noto_serif_font = noto_serif.className;
export const inter_font = inter.className;
export const montserrat_font = montserrat.className