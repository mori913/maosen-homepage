import * as d3 from 'd3'
import japanGeoJson from './../public/countries/japan.geo.json'
import chinaGeoJson from './../public/countries/china.geo.json'
import germanGeoJson from './../public/countries/geman.geo.json'
const Choropleth = ({ country }) => {
  const width = 400
  const height = 400
  const centerPos = [137.0, 38.2]
  const scale = 1000

  const projection = d3
    .geoMercator()
    .center(centerPos)
    .translate([width / 2, height / 2])
    .scale(scale)

  const path = d3.geoPath().projection(projection)
  const svg = d3
    .select(`#map-container`)
    .append(`svg`)
    .attr(`viewBox`, `0 0 ${width} ${height}`)
    .attr(`width`, `100%`)
    .attr(`height`, `100%`)

  // 都道府県の領域データをpathで描画
  svg
    .selectAll(`path`)
    .data(japanGeoJson.features)
    .enter()
    .append(`path`)
    .attr(`d`, path)
    .attr(`stroke`, `#666`)
    .attr(`stroke-width`, 0.25)
    .attr(`fill`, `#2566CC`)
    .attr(`fill-opacity`, (item) => {
      // メモ
      // item.properties.name_ja に都道府県名が入っている

      // 透明度をランダムに指定する (0.0 - 1.0)
      return Math.random()
    })
    return svg


}

export default Choropleth
