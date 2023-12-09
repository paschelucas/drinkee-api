import Database from "@ioc:Adonis/Lucid/Database";
import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

export default class extends BaseSeeder {
  public async run() {
    await Database.table("drinks").insert([
      {
        name: "ABC",
        recipe: "Layered in a shot glass.",
        image_url:
          "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
        category_id: 4,
      },
      {
        name: "ACID",
        recipe:
          "Poor in the 151 first followed by the 101 served with a Coke or Dr Pepper chaser.",
        image_url:
          "https://www.thecocktaildb.com/images/media/drink/xuxpxt1479209317.jpg",
        category_id: 4,
      },
      {
        name: "B-52",
        recipe: "Layer ingredients into a shot glass. Serve with a stirrer.",
        image_url:
          "https://www.thecocktaildb.com/images/media/drink/5a3vg61504372070.jpg",
        category_id: 4,
      },
      {
        name: "Adam",
        recipe:
          "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
        image_url:
          "https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg",
        category_id: 1,
      },
      {
        name: "A. J.",
        recipe:
          "Shake ingredients with ice, strain into a cocktail glass, and serve.",
        image_url:
          "https://www.thecocktaildb.com/images/media/drink/l74qo91582480316.jpg",
        category_id: 1,
      },
      {
        name: "Karsk",
        recipe:
          "Put a copper coin in a coffe-cup and fill up with coffee until you no longer see the coin, then add alcohol until you see the coin. Norwegian speciality.",
        image_url:
          "https://www.thecocktaildb.com/images/media/drink/808mxk1487602471.jpg",
        category_id: 1,
      },
      {
        name: "Gimlet",
        recipe:
          "Add all the ingredients to a shaker and fill with ice.\\r\\n\\r\\nShake, and strain into a chilled cocktail glass or an Old Fashioned glass filled with fresh ice.\\r\\n\\r\\nGarnish with a lime wheel.",
        image_url:
          "https://www.thecocktaildb.com/images/media/drink/3xgldt1513707271.jpg",
        category_id: 2,
      },
      {
        name: "Vesper",
        recipe:
          "Shake over ice until well chilled, then strain into a deep goblet and garnish with a thin slice of lemon peel.",
        image_url:
          "https://www.thecocktaildb.com/images/media/drink/mtdxpa1504374514.jpg",
        category_id: 2,
      },
      {
        name: "Afterglow",
        recipe: "Mix. Serve over ice.",
        image_url:
          "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
        category_id: 2,
      },
      {
        name: "Downshift",
        recipe:
          "Start with the Sprite. Next comes the tequila. After that, add the Minute Maid Fruit Punch, then float the 151. Rocks optional.",
        image_url:
          "https://www.thecocktaildb.com/images/media/drink/y36z8c1503563911.jpg",
        category_id: 3,
      },
      {
        name: "Brain Fart",
        recipe:
          "Mix all ingredients together. Slowly and gently. Works best if ice is added to punch bowl and soda's are very cold.",
        image_url:
          "https://www.thecocktaildb.com/images/media/drink/rz5aun1504389701.jpg",
        category_id: 3,
      },
      {
        name: "Sangria",
        recipe:
          "Mix all together in a pitcher and refrigerate. Add cloves and cinnamon sticks to taste. Serve in wine glasses.",
        image_url:
          "https://www.thecocktaildb.com/images/media/drink/xrvxpp1441249280.jpg",
        category_id: 3,
      },
      {
        name: "Zinger",
        recipe:
          "Get a shot glass and pour in three shots of the schnapps. Do the same with the Surge Cola. Then down it like Scheetz would.",
        image_url:
          "https://www.thecocktaildb.com/images/media/drink/iixv4l1485620014.jpg",
        category_id: 5,
      },
      {
        name: "Zoksel",
        recipe:
          "No specific mixinginstructions, just poor every ingredient in one glass. The lemon goes with it.",
        image_url:
          "https://www.thecocktaildb.com/images/media/drink/ft8ed01485620930.jpg",
        category_id: 5,
      },
      {
        name: "Citrus Coke",
        recipe:
          "Pour half of coke in a glass. Then add Bacardi and top it off with the remaining coke. Stir and drink up!",
        image_url:
          "https://www.thecocktaildb.com/images/media/drink/uyrvut1479473214.jpg",
        category_id: 5,
      },
      {
        name: "Danbooka",
        recipe: "pour it in and mix it.",
        image_url:
          "https://www.thecocktaildb.com/images/media/drink/vurrxr1441246074.jpg",
        category_id: 6,
      },
      {
        name: "Kurant Tea",
        recipe:
          "Pour Absolut Kurant into a comfortably big tea-cup. Add the not too hot(!) apple tea and, if you like, some sugar. Enjoy!",
        image_url:
          "https://www.thecocktaildb.com/images/media/drink/xrsrpr1441247464.jpg",
        category_id: 6,
      },
      {
        name: "Zorro",
        recipe: "add all and pour black coffee and add whipped cream on top.",
        image_url:
          "https://www.thecocktaildb.com/images/media/drink/kvvd4z1485621283.jpg",
        category_id: 6,
      },
    ]);
  }
}