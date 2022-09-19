import * as d3 from 'd3'
import React from 'react'
import japanGeoJson from './../public/countries/japan.geo.json'
import chinaGeoJson from './../public/countries/china.geo.json'
import germanGeoJson from './../public/countries/geman.geo.json'
const Choropleth = (svgRef, country) => {
  const width = 400
  const height = 400
  let scale = 1000
  let geoJson
  let centerPos = [137.0, 38.2]
  switch (country) {
    case 'Japan':
      centerPos = [137.0, 38.2]
      geoJson = japanGeoJson
      break
    case 'China':
      centerPos = [105.0, 38.2]
      width = 1100
      height = 1000
      geoJson = chinaGeoJson
      break
    case 'German':
      centerPos = [10.0, 51.2]
      geoJson = germanGeoJson
      break
  }

  const projection = d3
    .geoMercator()
    .center(centerPos)
    .translate([width / 2, height / 2])
    .scale(scale)

  const path = d3.geoPath().projection(projection)
  const svg = d3
    .select(svgRef.current)
    .attr(`viewBox`, `0 0 ${width} ${height}`)
    .attr(`width`, `100%`)
    .attr(`height`, `100%`)

  // the map of prefecture
  svg
    .selectAll(`path`)
    .data(geoJson.features)
    .enter()
    .append(`path`)
    .attr(`d`, path)
    .attr(`stroke`, `#666`)
    .attr(`stroke-width`, 0.25)
    .attr(`fill`, `#2566CC`)
    .attr(`fill-opacity`, item => {
      // メモ
      // item.properties.name_ja に都道府県名が入っている
      if (item.properties.name_ja === "和歌山県" || item.properties.name_ja === "愛知県" || item.properties.name_ja === "東京都") {
        return 1;
        
      }
      // 透明度をランダムに指定する (0.0 - 1.0)
      return 0.1
    })
    .on(`mouseover`, function()  {

      // マウス位置の都道府県領域を赤色に変更
      d3.select(this).attr(`fill`, `#CC4C39`);
      d3.select(this).attr(`stroke-width`, `1`);
    })


    /**
     * 都道府県領域の MouseOut イベントハンドラ
     */
    .on(`mouseout`, function () {
      // ラベルグループを削除
      svg.select('#label-group').remove();

      // マウス位置の都道府県領域を青色に戻す
      d3.select(this).attr(`fill`, `#2566CC`);
      d3.select(this).attr(`stroke-width`, `0.25`);
    });
}

const Chart = ({ country }) => {
  const svg = React.useRef(null)

  // eslint-disable-next-line no-use-before-define
  React.useEffect(() => {
    Choropleth(svg, country)
  }, [ svg, country ])

  return <svg ref={svg} />
}
export default Chart
