//Recipe app with JSX
const data=
	[
	{
	"name":"Baked Salmon",
	"ingredients":
		[
		{"name":"Salmon","amount":1,"measurement":"1 lb"},
		{"name":"Pine Nuts","amount":1,"measurement":"1 cup"}
		],
	"steps":
		[	
		"Heat",
		"Steam",
		"Eat"	
		]
	},
	{
	"name":"Poha Cutlet",
	"ingredients":
		[
		{"name":"Whitefish","amount":1,"measurement":"1 lb"},
		{"name":"Cheese","amount":2,"measurement":"2 cubes"}
		],
	"steps":
		[
		"Heat",
		"Steam",
		"Eat"
		]
	}
	]
const Recipe=({name,ingredients,steps})=>
	<section id={name.toLowerCase().replace(/ /g,"-")}>
		<h1>{name}</h1>
		<ul className="ingredients">
			{ingredients.map((ingredient,i)=>
				<li key={i}>{ingredient.name}</li>
			)}
		</ul>
		<section className="Instructions">
		<h2>Cooking Instructions</h2>
			{steps.map((step,i)=>
				<p key={i}>{step}</p>
			})
		</section>	
	</section>
	const Menu=({title,recipes})=>
		<article>
			<header>
				<h1>{title}</h1>
			</header>
			<div className="recipes">
				{recipes.map((recipes,i)=>
					<Recipe key={i} {...recipe}/>
				)}
			</div>
		</article>
	ReactDOM.render(
			<Menu recipes={data}
				title="Decicious Recipes"/>,
			document.getElementById("react-container")
			)