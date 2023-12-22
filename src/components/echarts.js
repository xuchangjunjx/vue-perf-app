
import { use } from 'echarts/lib/extension.js';
export *  from 'echarts/lib/export/core.js';

import { CanvasRenderer } from 'echarts/lib/export/renderers.js';
import { LineChart, BarChart } from 'echarts/lib/export/charts.js';
import { GridComponent, GraphicComponent,MarkAreaComponent, TooltipComponent, TitleComponent, LegendComponent, AriaComponent } from 'echarts/lib/export/components.js';
use([CanvasRenderer]);
use([LineChart, BarChart]);
use(GridComponent);
use(GraphicComponent);
use(TooltipComponent);
use(TitleComponent);
use(MarkAreaComponent);
use(LegendComponent);
use(AriaComponent);
