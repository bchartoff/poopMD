function drawFig2(expertType){
	d3.selectAll("svg").remove()
	d3.csv("data/fig2.csv",function(error,data){
		var normalNormal = data
			.filter(function(o){return parseInt(o.poopmd_type) == 1 && parseInt(o[expertType]) == 1})
			.sort(function(a,b){
				return a.color < b.color
			})
		var normalAbnormal = data
			.filter(function(o){return parseInt(o.poopmd_type) == 1 && parseInt(o[expertType]) == 2})
			.sort(function(a,b){
				return a.color < b.color
			})
		var normalIndeterminate = data
			.filter(function(o){return parseInt(o.poopmd_type) == 1 && parseInt(o[expertType]) == 3})
			.sort(function(a,b){
				return a.color < b.color
			})

		var abnormalNormal = data
			.filter(function(o){return parseInt(o.poopmd_type) == 2 && parseInt(o[expertType]) == 1})
			.sort(function(a,b){
				return a.color < b.color
			})
		var abnormalAbnormal = data
			.filter(function(o){return parseInt(o.poopmd_type) == 2 && parseInt(o[expertType]) == 2})
			.sort(function(a,b){
				return a.color < b.color
			})
		var abnormalIndeterminate = data
			.filter(function(o){return parseInt(o.poopmd_type) == 2 && parseInt(o[expertType]) == 3})
			.sort(function(a,b){
				return a.color < b.color
			})

		var indeterminateNormal = data
			.filter(function(o){return parseInt(o.poopmd_type) == 3 && parseInt(o[expertType]) == 1})
			.sort(function(a,b){
				return a.color < b.color
			})
		var indeterminateAbnormal = data
			.filter(function(o){return parseInt(o.poopmd_type) == 3 && parseInt(o[expertType]) == 2})
			.sort(function(a,b){
				return a.color < b.color
			})
		var indeterminateIndeterminate = data
			.filter(function(o){return parseInt(o.poopmd_type) == 3 && parseInt(o[expertType]) == 3})
			.sort(function(a,b){
				return a.color < b.color
			})



		var width = 750;
		var height = 750;
		var cellSize = 15;
		var margin = {"left": 80, "top": 50, "right": 60, "bottom": 20}
		var svg = d3.select("#figure1")
			.append("svg")
			.attr("width",width)
			.attr("height",height)
			.append("g")


		svg
			.selectAll(".normalNormalRect")
			.data(normalNormal)
			.enter()
			.append("rect")
			.attr("class","normalNormalRect")
			.attr("width",cellSize)
			.attr("height",cellSize)
			.style("fill", function(d){ return d.color})
			.attr("x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 20 - margin.right) / cellSize) )
				console.log(rowCount)
				return margin.left + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 20 - margin.right) / cellSize) )
				return margin.top + ( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})
		svg
			.selectAll(".abnormalNormalRect")
			.data(abnormalNormal)
			.enter()
			.append("rect")
			.attr("class","abnormalNormalRect")
			.attr("width",cellSize)
			.attr("height",cellSize)
			.style("fill", function(d){ return d.color})
			.attr("x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 20 - margin.right) / cellSize) )
				console.log(rowCount)
				return margin.left + width/3 + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 20 - margin.right) / cellSize) )
				return margin.top + ( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})
		svg
			.selectAll(".indeterminateNormalRect")
			.data(indeterminateNormal)
			.enter()
			.append("rect")
			.attr("class","indeterminateNormalRect")
			.attr("width",cellSize)
			.attr("height",cellSize)
			.style("fill", function(d){ return d.color})
			.attr("x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 20 - margin.right) / cellSize) )
				console.log(rowCount)
				return margin.left + 2*width/3 + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 20 - margin.right) / cellSize) )
				return margin.top + ( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})





		svg
			.selectAll(".normalAbnormalRect")
			.data(normalAbnormal)
			.enter()
			.append("rect")
			.attr("class","normalAbnormalRect")
			.attr("width",cellSize)
			.attr("height",cellSize)
			.style("fill", function(d){ return d.color})
			.attr("x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 20 - margin.right) / cellSize) )
				console.log(rowCount)
				return margin.left + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 20 - margin.right) / cellSize) )
				return margin.top + height/3 + ( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})
		svg
			.selectAll(".abnormalAbnormalRect")
			.data(abnormalAbnormal)
			.enter()
			.append("rect")
			.attr("class","abnormalAbnormalRect")
			.attr("width",cellSize)
			.attr("height",cellSize)
			.style("fill", function(d){ return d.color})
			.attr("x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 20 - margin.right) / cellSize) )
				console.log(rowCount)
				return margin.left + width/3 + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 20 - margin.right) / cellSize) )
				return margin.top + height/3 +( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})
		svg
			.selectAll(".indeterminateAbnormalRect")
			.data(indeterminateAbnormal)
			.enter()
			.append("rect")
			.attr("class","indeterminateAbnormalRect")
			.attr("width",cellSize)
			.attr("height",cellSize)
			.style("fill", function(d){ return d.color})
			.attr("x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 20 - margin.right) / cellSize) )
				console.log(rowCount)
				return margin.left + 2*width/3 + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 20 - margin.right) / cellSize) )
				return margin.top + height/3 +( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})




		svg
			.selectAll(".normalIndeterminateRect")
			.data(normalIndeterminate)
			.enter()
			.append("rect")
			.attr("class","normalIndeterminateRect")
			.attr("width",cellSize)
			.attr("height",cellSize)
			.style("fill", function(d){ return d.color})
			.attr("x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 20 - margin.right) / cellSize) )
				console.log(rowCount)
				return margin.left + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 20 - margin.right) / cellSize) )
				return margin.top + 2*height/3 + ( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})
		svg
			.selectAll(".abnormalIndeterminateRect")
			.data(abnormalIndeterminate)
			.enter()
			.append("rect")
			.attr("class","abnormalIndeterminateRect")
			.attr("width",cellSize)
			.attr("height",cellSize)
			.style("fill", function(d){ return d.color})
			.attr("x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 20 - margin.right) / cellSize) )
				console.log(rowCount)
				return margin.left + width/3 + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 20 - margin.right) / cellSize) )
				return margin.top + 2*height/3 +( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})
		svg
			.selectAll(".indeterminateIndeterminateRect")
			.data(indeterminateIndeterminate)
			.enter()
			.append("rect")
			.attr("class","indeterminateIndeterminateRect")
			.attr("width",cellSize)
			.attr("height",cellSize)
			.style("fill", function(d){ return d.color})
			.attr("x", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 20 - margin.right) / cellSize) )
				console.log(rowCount)
				return margin.left + 2*width/3 + ( (((i-1)%rowCount)) * (cellSize) )
			})
			.attr("y", function(d,i){
				i += 1;
				var rowCount = Math.floor( ((width/3 - 20 - margin.right) / cellSize) )
				return margin.top + 2*height/3 +( (Math.ceil(i/rowCount)-1) * (cellSize) )
			})


		svg.append("text")
			.attr("y",20)
			.attr("x",width/2)
			.attr("class","subtitle")
			.text("PoopMD Classification")
		svg
			.append("text")
			.attr("y",40)
			.attr("x",margin.left)
			.attr("class","subtitle")
			.text("Normal")
		svg
			.append("text")
			.attr("y",40)
			.attr("x",width/3 + margin.left)
			.attr("class","subtitle")
			.text("Abnormal")
		svg
			.append("text")
			.attr("y",40)
			.attr("x",2*width/3 + margin.left)
			.attr("class","subtitle")
			.text("Indeterminate")


		svg.append("text")
			.attr("class","subtitle")	
			.attr("dy", ".35em")
			.attr("text-anchor", "middle")
			.attr("transform", "translate(20," + height/2 + ") rotate(270)")
			.text("Expert Classification");
		svg.append("text")
			.attr("class","subtitle")	
			.attr("dy", ".35em")
			.attr("text-anchor", "middle")
			.attr("transform", "translate(60," + 130 + ") rotate(270)")
			.text("Normal");
		svg.append("text")
			.attr("class","subtitle")	
			.attr("dy", ".35em")
			.attr("text-anchor", "middle")
			.attr("transform", "translate(60," + 330 + ") rotate(270)")
			.text("Abnormal");
		svg.append("text")
			.attr("class","subtitle")	
			.attr("dy", ".35em")
			.attr("text-anchor", "middle")
			.attr("transform", "translate(60," + 530 + ") rotate(270)")
			.text("Indeterminate");

	d3.selectAll("rect")
		.on("mouseover", function(d){
			console.log(d.color)
			d3.select("#tooltip span").text(d.color)
		})

	})

}



drawFig2("five_expert_type");
