function getHCL(hex){
 	var color = d3.hsl(hex);
 	return [color.h, color.s, color.l]
}

function sortData(data, poopmd_type, expertType){
	sorted = data
			.filter(function(o){console.log(o, poopmd_type, expertType); return parseInt(o.poopmd_type) == poopmd_type && parseInt(o.six_expert_type) == expertType})
			.sort(function(a,b){
				return getHCL(a.color)[0] < getHCL(b.color)[0]
			})
	var finalSorted = sorted
	var arrays = [], size = 14;

	while (sorted.length > 0){
    	arrays.push(sorted.splice(0, size));
	}
    var finalSorted = []
    for(var i = 0; i < arrays.length; i++){
    	var array = arrays[i]
    	array = array.sort(function(a,b){
				return getHCL(a.color)[2] < getHCL(b.color)[2]
			})
    	finalSorted = finalSorted.concat(array)
    }


	return finalSorted
}


function drawFig2(expertType){
	d3.selectAll("svg g").remove()
	d3.csv("data/fig2.csv",function(error,data){
		var normalNormal = sortData(data, 1, 1)

		var normalAbnormal = sortData(data, 1, 2)

		var normalIndeterminate = sortData(data, 1, 3)

		var abnormalNormal = sortData(data, 2, 1)

		var abnormalAbnormal = sortData(data, 2, 2)

		var abnormalIndeterminate = sortData(data, 2, 3)

		var indeterminateNormal = sortData(data, 3, 1)

		var indeterminateAbnormal = sortData(data, 3, 2)

		var indeterminateIndeterminate = sortData(data, 3, 3)

		var width = 700;
		var height = 560;
		var cellSize = 15;
		var margin = {"left": 80, "top": 50, "right": 60, "bottom": 20}
		var svg = d3.select("svg")
			.attr("width",width + margin.left + margin.right)
			.attr("height",height + margin.top + margin.bottom)
			.append("g")

		var cw = 50;
		var ch = 30;
		svg.append("rect")
			.attr("class","cornerLabel")
			.attr("width", cw)
			.attr("height",ch)
			.attr("x", width/3 + margin.left-cw -2)
			.attr("y", height/3 + margin.top-ch -2)
		svg.append("text")
			.attr("class","cornerLabelText")
			.attr("x", width/3 + margin.left-cw + 11)
			.attr("y", height/3 + margin.top-ch  + 20)
			.text(normalNormal.length)

		svg.append("rect")
			.attr("class","cornerLabel")
			.attr("width", cw)
			.attr("height",ch)
			.attr("x", 2*width/3 + margin.left-cw -2)
			.attr("y", height/3 + margin.top-ch -2)
		svg.append("text")
			.attr("class","cornerLabelText")
			.attr("x", 2*width/3 + margin.left-cw + 16)
			.attr("y", height/3 + margin.top-ch  + 20)
			.text(abnormalNormal.length)

		svg.append("rect")
			.attr("class","cornerLabel")
			.attr("width", cw)
			.attr("height",ch)
			.attr("x", 3*width/3 + margin.left-cw -2)
			.attr("y", height/3 + margin.top-ch -2)
		svg.append("text")
			.attr("class","cornerLabelText")
			.attr("x", 3*width/3 + margin.left-cw + 16)
			.attr("y", height/3 + margin.top-ch  + 20)
			.text(indeterminateNormal.length)

		svg.append("rect")
			.attr("class","cornerLabel")
			.attr("width", cw)
			.attr("height",ch)
			.attr("x", width/3 + margin.left-cw -2)
			.attr("y", 2*height/3 + margin.top-ch -2)
		svg.append("text")
			.attr("class","cornerLabelText")
			.attr("x", width/3 + margin.left-cw + 19)
			.attr("y", 2*height/3 + margin.top-ch  + 20)
			.text(normalAbnormal.length)

		svg.append("rect")
			.attr("class","cornerLabel")
			.attr("width", cw)
			.attr("height",ch)
			.attr("x", 2*width/3 + margin.left-cw -2)
			.attr("y", 2*height/3 + margin.top-ch -2)
		svg.append("text")
			.attr("class","cornerLabelText")
			.attr("x", 2*width/3 + margin.left-cw + 16)
			.attr("y", 2*height/3 + margin.top-ch  + 20)
			.text(abnormalAbnormal.length)

		svg.append("rect")
			.attr("class","cornerLabel")
			.attr("width", cw)
			.attr("height",ch)
			.attr("x", 3*width/3 + margin.left-cw -2)
			.attr("y", 2*height/3 + margin.top-ch -2)
		svg.append("text")
			.attr("class","cornerLabelText")
			.attr("x", 3*width/3 + margin.left-cw + 19)
			.attr("y", 2*height/3 + margin.top-ch  + 20)
			.text(indeterminateAbnormal.length)

		svg.append("rect")
			.attr("class","cornerLabel")
			.attr("width", cw)
			.attr("height",ch)
			.attr("x", width/3 + margin.left-cw -2)
			.attr("y", 3*height/3 + margin.top-ch -2)
		svg.append("text")
			.attr("class","cornerLabelText")
			.attr("x", width/3 + margin.left-cw + 19)
			.attr("y", 3*height/3 + margin.top-ch  + 20)
			.text(normalIndeterminate.length)

		svg.append("rect")
			.attr("class","cornerLabel")
			.attr("width", cw)
			.attr("height",ch)
			.attr("x", 2*width/3 + margin.left-cw -2)
			.attr("y", 3*height/3 + margin.top-ch -2)
		svg.append("text")
			.attr("class","cornerLabelText")
			.attr("x", 2*width/3 + margin.left-cw + 16)
			.attr("y", 3*height/3 + margin.top-ch  + 20)
			.text(abnormalIndeterminate.length)

		svg.append("rect")
			.attr("class","cornerLabel")
			.attr("width", cw)
			.attr("height",ch)
			.attr("x", 3*width/3 + margin.left-cw -2)
			.attr("y", 3*height/3 + margin.top-ch -2)
		svg.append("text")
			.attr("class","cornerLabelText")
			.attr("x", 3*width/3 + margin.left-cw + 19)
			.attr("y", 3*height/3 + margin.top-ch  + 20)
			.text(indeterminateIndeterminate.length)



		svg.append("rect")
			.attr("class","lightBG")
			.attr("width", width/3)
			.attr("height", height/3)
			.attr("x", margin.left-2)
			.attr("y", margin.top-2)
		svg.append("rect")
			.attr("class","lightBG")
			.attr("width", width/3 )
			.attr("height", height/3 )
			.attr("x", 2*width/3+margin.left-2)
			.attr("y", margin.top -2)
		svg.append("rect")
			.attr("class","lightBG")
			.attr("width", width/3)
			.attr("height", height/3)
			.attr("x", margin.left -2)
			.attr("y", 2*height/3 +margin.top -2)
		svg.append("rect")
			.attr("class","lightBG")
			.attr("width", width/3 )
			.attr("height", height/3)
			.attr("x", 2*width/3+margin.left -2)
			.attr("y", 2*height/3 +margin.top-2)
		svg.append("rect")
			.attr("class","lightBG")
			.attr("width", width/3)
			.attr("height", height/3)
			.attr("x", width/3+margin.left -2)
			.attr("y", height/3 +margin.top -2)


		svg.append("rect")
			.attr("class","bgBorder")
			.attr("width", width)
			.attr("height", height)
			.attr("x", margin.left-2)
			.attr("y", margin.top-2)
		svg
			.selectAll(".normalNormalRect")
			.data(normalNormal)
			.enter()
			.append("rect")
			.attr("class","normalNormalRect pooRect")
			.attr("width",cellSize)
			.attr("height",cellSize)
			.style("fill", function(d){ return d.color})
			.attr("x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				return margin.left + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				return margin.top + ( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})
			.attr("data-x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				return margin.left + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("data-y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				return margin.top + ( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})
		svg
			.selectAll(".abnormalNormalRect")
			.data(abnormalNormal)
			.enter()
			.append("rect")
			.attr("class","abnormalNormalRect pooRect")
			.attr("width",cellSize)
			.attr("height",cellSize)
			.style("fill", function(d){ return d.color})
			.attr("x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				console.log(rowCount)
				return margin.left + width/3 + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				return margin.top + ( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})
			.attr("data-x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				console.log(rowCount)
				return margin.left + width/3 + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("data-y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				return margin.top + ( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})
		svg
			.selectAll(".indeterminateNormalRect")
			.data(indeterminateNormal)
			.enter()
			.append("rect")
			.attr("class","indeterminateNormalRect pooRect")
			.attr("width",cellSize)
			.attr("height",cellSize)
			.style("fill", function(d){ return d.color})
			.attr("x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				return margin.left + 2*width/3 + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				return margin.top + ( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})
			.attr("data-x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				return margin.left + 2*width/3 + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("data-y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				return margin.top + ( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})





		svg
			.selectAll(".normalAbnormalRect")
			.data(normalAbnormal)
			.enter()
			.append("rect")
			.attr("class","normalAbnormalRect pooRect")
			.attr("width",cellSize)
			.attr("height",cellSize)
			.style("fill", function(d){ return d.color})
			.attr("x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				console.log(rowCount)
				return margin.left + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				return margin.top + height/3 + ( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})
			.attr("data-x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				console.log(rowCount)
				return margin.left + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("data-y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				return margin.top + height/3 + ( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})
		svg
			.selectAll(".abnormalAbnormalRect")
			.data(abnormalAbnormal)
			.enter()
			.append("rect")
			.attr("class","abnormalAbnormalRect pooRect")
			.attr("width",cellSize)
			.attr("height",cellSize)
			.style("fill", function(d){ return d.color})
			.attr("x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				console.log(rowCount)
				return margin.left + width/3 + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				return margin.top + height/3 +( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})
			.attr("data-x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				console.log(rowCount)
				return margin.left + width/3 + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("data-y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				return margin.top + height/3 +( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})
		svg
			.selectAll(".indeterminateAbnormalRect")
			.data(indeterminateAbnormal)
			.enter()
			.append("rect")
			.attr("class","indeterminateAbnormalRect pooRect")
			.attr("width",cellSize)
			.attr("height",cellSize)
			.style("fill", function(d){ return d.color})
			.attr("x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				console.log(rowCount)
				return margin.left + 2*width/3 + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				return margin.top + height/3 +( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})
			.attr("data-x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				console.log(rowCount)
				return margin.left + 2*width/3 + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("data-y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				return margin.top + height/3 +( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})




		svg
			.selectAll(".normalIndeterminateRect")
			.data(normalIndeterminate)
			.enter()
			.append("rect")
			.attr("class","normalIndeterminateRect pooRect")
			.attr("width",cellSize)
			.attr("height",cellSize)
			.style("fill", function(d){ return d.color})
			.attr("x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				console.log(rowCount)
				return margin.left + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				return margin.top + 2*height/3 + ( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})
			.attr("data-x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				console.log(rowCount)
				return margin.left + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("data-y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				return margin.top + 2*height/3 + ( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})
		svg
			.selectAll(".abnormalIndeterminateRect")
			.data(abnormalIndeterminate)
			.enter()
			.append("rect")
			.attr("class","abnormalIndeterminateRect pooRect")
			.attr("width",cellSize)
			.attr("height",cellSize)
			.style("fill", function(d){ return d.color})
			.attr("x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				console.log(rowCount)
				return margin.left + width/3 + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				return margin.top + 2*height/3 +( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})
			.attr("data-x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				console.log(rowCount)
				return margin.left + width/3 + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("data-y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				return margin.top + 2*height/3 +( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})
		svg
			.selectAll(".indeterminateIndeterminateRect")
			.data(indeterminateIndeterminate)
			.enter()
			.append("rect")
			.attr("class","indeterminateIndeterminateRect pooRect")
			.attr("width",cellSize)
			.attr("height",cellSize)
			.style("fill", function(d){ return d.color})
			.attr("x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				console.log(rowCount)
				return margin.left + 2*width/3 + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				return margin.top + 2*height/3 +( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})
			.attr("data-x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				console.log(rowCount)
				return margin.left + 2*width/3 + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("data-y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 10) / cellSize) )
				return margin.top + 2*height/3 +( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})


		svg.append("text")
			.attr("y",20)
			.attr("x",width/3 + margin.left + width/6 - 78)
			.attr("class","subtitle")
			.text("PoopMD Classification")
		svg
			.append("text")
			.attr("y",40)
			.attr("x",margin.left + width/6 - 26)
			.attr("class","subtitle")
			.text("Normal")
		svg
			.append("text")
			.attr("y",40)
			.attr("x",width/3 + margin.left + width/6 - 35)
			.attr("class","subtitle")
			.text("Abnormal")
		svg
			.append("text")
			.attr("y",40)
			.attr("x",2*width/3 + margin.left + width/6 - 50)
			.attr("class","subtitle")
			.text("Indeterminate")




		svg.append("text")
			.attr("class","subtitle")	
			.attr("dy", ".35em")
			.attr("text-anchor", "middle")
			.attr("transform", "translate(20," + 335 + ") rotate(270)")
			.text("Expert Classification");
		svg.append("text")
			.attr("class","subtitle")	
			.attr("dy", ".35em")
			.attr("text-anchor", "middle")
			.attr("transform", "translate(60," + 135 + ") rotate(270)")
			.text("Normal");
		svg.append("text")
			.attr("class","subtitle")	
			.attr("dy", ".35em")
			.attr("text-anchor", "middle")
			.attr("transform", "translate(60," + 327 + ") rotate(270)")
			.text("Abnormal");
		svg.append("text")
			.attr("class","subtitle")	
			.attr("dy", ".35em")
			.attr("text-anchor", "middle")
			.attr("transform", "translate(60," + 514 + ") rotate(270)")
			.text("Indeterminate");

	d3.selectAll(".pooRect")
		.on("mouseover", function(d){
			console.log(d.color, cellSize)
			d3.select("#tooltip span").text(d.color)
			d3.select(this).node().parentNode.appendChild(this)
			d3.select(this)
				.transition()
				.delay(300)
				.attr("x", function(){
					return parseFloat(d3.select(this).attr("data-x")) - cellSize*1.5
				})
				.attr("y", function(){
					return parseFloat(d3.select(this).attr("data-y")) - cellSize*1.5
				})
				.attr("width",String(cellSize * 5) + "px")
				.attr("height",String(cellSize * 5) + "px")
				.style("filter","url(#dropshadow)")
		})
		.on("mouseout", function(d){
			d3.select(this)
				.transition()
				.attr("x", function(){
					return parseFloat(d3.select(this).attr("data-x"))
				})
				.attr("y", function(){
					return parseFloat(d3.select(this).attr("data-y"))
				})
				.attr("width",String(cellSize) + "px")
				.attr("height",String(cellSize) + "px")
				.style("filter","none")
				// .on("start",function(){
				// 	d3.selectAll(".lightBG").nodes().forEach(function(o){ o.parentNode.appendChild(o)})
				// 	d3.select(".bgBorder").node().parentNode.appendChild(d3.select(".bgBorder").node())
				// })
		})

	})

}



drawFig2("six_expert_type");
