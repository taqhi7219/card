const cl = console.log;

const postsary = [
    {
	    title:"Apple",
		content:`Apples May Lower High Cholesterol and Blood Pressure.
                 Eating Foods With Fiber, Including Apples, Can Aid Digestion.
                 Apples Can Support a Healthy Immune System.
                 Apples Are a Diabetes-Friendly Fruit.
                 The Antioxidants in Apples May Play a Role in Cancer Prevention.`
    },
	{
		title:"Custard Apple",
		content:`High in antioxidants. Cherimoya is loaded with antioxidants, which fight free radicals in your body.
                 May boost your mood.
                 May benefit eye health.
                 May prevent high blood pressure.
                 May promote good digestion.
                 May have anticancer properties.
                 May fight inflammation.
                 May support immunity.`
	},
	{
		title:"Banana",
		content:`improve blood sugar levels. prevent constipation. improve gut, kidney, and heart health. aid in weight loss. keep you feeling full. support post-exercise recovery. Vitamin B6: A medium banana gives you about a quarter of the vitamin B6 you should get each day. `
	},
	{
	    title:"orange",
		content:`Forms blood vessels, muscles, cartilage, and collagen in your bones. Fights inflammation and can reduce the severity of conditions like asthma, rheumatoid arthritis, and cancer. Boosts the body's immune system to protect against viruses and germs.`
    },
	{
		title:"Grapes",
		content:`Grapes are rich in nutrients, boost your immunity, provide antioxidants, promote better sleeps, improve the heath of your heart, and keep you well hydrated. A lot of benefits fits into these small. Grapes are a good source of potassium, a mineral that helps balance fluids in your body.`
	},
	{
		title:"Dragon Fruit",
		content:`Reduces Risk of Diabetes. This fruit contains high amounts of fibre that maintains blood sugar levels and avoids spikes among people suffering from diabetes.
Reduces Risks of Cancer.
Helps boost Immunity.
Good for Digestion.
Good For Heart.
Fights Ageing Skin.
`
	},
]

let result = ``;
for (let a = 0; a < postsary.length; a++){
	result += `	   
	            <div class="col-md-4">
		            <div class="card mb-4">
			            <div class="card-header alert-primary">
				            <h2 class="m-0">${postsary[a].title}</h2>
				    </div>
				        <div class="card-body alert-info">
				            <p class="m-0">${postsary[a].content}</p>
				        </div>
				        <div class="card-footer d-flex justify-content-between alert-warning">
				            <button class="btn btn-success">Edit</button>
					        <button class="btn btn-danger">Delete</button>
				        </div>
			        </div>
		        </div>`
}

const card = document.getElementById ("card");
card.innerHTML = result;