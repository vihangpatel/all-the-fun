const data = [
	{
		name: "Sunil Pai",
		imgPath: "sunil_pai.jpeg", // with extension
		github: "https://github.com/threepointone",
		twitter: "https://twitter.com/threepointone",
		description:
			"He built websites for myntra, yahoo, visa, and others.He’s also the author of glamor and a myriad of other cool open source projects.", // keep it simple
		jobrole: "Mad Scientist, Facebook", // only one line,
		tinySrc:
			"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7///8BEBAQEBEQEhQUEhkbGBsZJSIfHyIlOCgrKCsoOFU1PjU1PjVVS1tKRUpbS4dqXl5qh5yDfIOcvampve7i7v/////AABEIAB4AHgMBIgACEQEDEQH/xABhAAEBAQEAAAAAAAAAAAAAAAAGBQQBEAACAgICAwADAAAAAAAAAAABAgADBBESIQUTUSIjQQEBAQEAAAAAAAAAAAAAAAAAAQIDEQADAQEBAAAAAAAAAAAAAAAAARECEiH/2gAMAwEAAhEDEQA/AFTCG83ztWPc1VdJsKHTHeooIgrJ/SltYxyXRiC/3kZk/C8qlvBz6M+ovWCCvTKZqIhjwnKrLuUrrnWCR8IMVjRgxkKBEIeeoyEcunsauwDYX+ERTk3elOhsmZ8hBbWUfvqac1BlhHxNyUM4tB5Pr8vgETq+x0ZLODVXyKzvM0gcZLwxbP/Z",
	},
	{
		name: "Sara Vieira",
		imgPath: "sara_vieria.jpg",
		github: "https://github.com/saravieira",
		twitter: "https://twitter.com/NikkitaFTW",
		description:
			"Developer Advocate at @YLDio. GraphQL and Open Source enthusiast. Conference Speaker and Airport expert. I am also into drums and horror movies.",
		jobrole: "YLDio, Europe",
		tinySrc:
			"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7///8BEBAQEBEQEhQUEhkbGBsZJSIfHyIlOCgrKCsoOFU1PjU1PjVVS1tKRUpbS4dqXl5qh5yDfIOcvampve7i7v/////AABEIAB4AHgMBIgACEQEDEQH/xABkAAEBAQAAAAAAAAAAAAAAAAAGBQEQAAIBBAAGAwEAAAAAAAAAAAECAwAEBRESEyEiMUEUQmFRAQEBAQAAAAAAAAAAAAAAAAAAAgMRAQEAAwEBAAAAAAAAAAAAAAEAAgMhMRH/2gAMAwEAAhEDEQA/AFU0qQxvI50qqSaMQ5PLXrPLbQAQirGYkRLCcP4dSlH8LLE0SR7YEeQX4RxA1nkoWusF6STHXvzYFk0N9Q2v6Ko0WwcgeW7ZTpGkYqtJgao6U5nxjWenYmK3+hHE9RLAy2DMrwB+Yva9Uc0NXsZLHTw+vw1MLMyRroAqD1HsD0aIJXh5baxzwycw9hbXCVOqaWU5ntopD5I60PlcdxAIZAoB/DSHDsfinr0D6FDybC//2Q==",
	},
	{
		name: "Ken Wheeler",
		imgPath: "ken_wheeler.jpeg",
		github: "https://github.com/kenwheeler",
		twitter: "https://twitter.com/ken_wheeler",
		description: "Author of libraries like Slick Carousel, McFly, react-music, webpack-dashboard, Spectacle.",
		jobrole: "Google Developer Expert",
		tinySrc:
			"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7/////wAALCAAeAB4BAREA/8QAPQAAAgIDAAAAAAAAAAAAAAAAAwYEBQACBxAAAgEEAQMEAwAAAAAAAAAAAQIDAAQFESESIjEGExVBJDJi/9oACAEBAAA/AH+q+e9fbCLwtGxuSNyzQsAJFFSqx+oIxUbOuKUnmuE2VEfSdk7bndQsRc3nyUTqI9y6396Wnqod9krPHxl55QvHC/ZpFfJwXaTzEe0jO39VT2Wcnx10ZYAr9vT3CnW09cWbp+TA6NXObmee5mMk8rO7EbJoazPbyEp+p8qfBrSaQTsWVFQAeBQjxX//2Q==",
	},
	{
		name: "Nader Dabit",
		imgPath: "nader_dabit.jpg",
		github: "https://github.com/dabit3",
		twitter: "https://twitter.com/dabit3",
		description:
			"Nader has been developing with React Native for over 2.5 years. He has worked with and trained developers from fortune 500 companies like Amazon, Visa, American Express, and Microsoft, helping them to get up to speed with React Native as quickly as possible.",
		jobrole: "Developer Advocate @awsformobile",
		tinySrc:
			"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7///8BEBAQEBEQEhQUEhkbGBsZJSIfHyIlOCgrKCsoOFU1PjU1PjVVS1tKRUpbS4dqXl5qh5yDfIOcvampve7i7v/////AABEIAB4AHgMBIgACEQEDEQH/xABqAAABBAMAAAAAAAAAAAAAAAAEAAIDBgEFBxAAAgIBBAIBBQAAAAAAAAAAAQIAAwQFERIhMXFBBhMUIlEBAAMBAAAAAAAAAAAAAAAAAAECAwARAAMBAQEBAAAAAAAAAAAAAAABAhEhAxP/2gAMAwEAAhEDEQA/ALBIfx8+/wDeq+upPgFORPuTQykMqBefkdQjRKemqre5L2x71XmF5K69KwhMIvrHNWJ7VSPe8HgBaSYiQASSABM4WZj5Is+1YXCHiSviVL6lvflRQDshUuYLpWojTcLJdULWvaqr/PEovNudRorGXDUtRxcO2lb32Zx74iPrsrtQPW6sp+QdxOZ333ZFr22uWdjuSY/Hy8jFZjTaUJHe0r8OLvRKvXp//9k=",
	},
	{
		name: "Phil Plückthun",
		imgPath: "phil.png",
		github: "https://github.com/kitten",
		twitter: "https://twitter.com/_philpl",
		description:
			"core contributor for styled-components.Mad scientist focusing on GraphQL, CSS-in-JS, and Reason experiments",
		jobrole: "Tech Lead, FormidableLabs, London",
		tinySrc:
			"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7///8BEBAQEBEQEhQUEhkbGBsZJSIfHyIlOCgrKCsoOFU1PjU1PjVVS1tKRUpbS4dqXl5qh5yDfIOcvampve7i7v/////AABEIAB4AHgMBIgACEQEDEQH/xABhAAADAAMAAAAAAAAAAAAAAAAEBQYCAwcQAAICAgMAAQUAAAAAAAAAAAECAwQABRESURMGQWNxgQEBAQAAAAAAAAAAAAAAAAAAAAERAQEBAQAAAAAAAAAAAAAAAAABESH/2gAMAwEAAhEDEQA/AL/Emxu7IyvDrY4i0XHytJ74Md4ktotd5yjuhZ3lPGBlpNzNZlkp3YRDaQdj4y45yc09NjalvO7sxiEYLZR4AWwuilUefr2IIAHpOTk2xa3Vkd2jQDgA9fv4MJ+oXJ1wH50ycrhHSMsoJUcjAN1m4sUA8DEvGSf2pyt1N0z1n4nDkN/RnNJ3KFyPTmmO5YrP8kErIzLwSMmdl2rvLMj/2Q==",
	},
	{
		name: "Jani Eväkallio",
		imgPath: "jani.jpeg",
		github: "https://github.com/jevakallio",
		twitter: "https://twitter.com/jevakallio",
		description: "Show runner at Formidable in London",
		jobrole: "VP @FormidableLabs, UK",
		tinySrc:
			"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7/////wAALCAAeAB4BAREA/8QAOwABAAIDAAAAAAAAAAAAAAAABgIFAwQHEAACAgICAQMFAAAAAAAAAAABAgMEABEFEhMGFDEyQUJhcf/aAAgBAQAAPwB7amStWmmf6I0LHAEE3Mc1M0wn8EP4BTiqh7+KQw2pVmXptJANH9g5a5rXF81OzF894mXCfCK6VAscgQrvvvENWcSyKwmVtrrqMs8J3/UtWttYh5XwbV5aZJZDKoZXcswxAnPVI7Nd1ibooO9YzqXK92ISwPtc44Rk438ThwAWB+42D/czWrDWZfIyqu1A0o0Bl96YttDZnT5Vo8//2Q==",
	},
	{
		name: "Jason Lengstorf",
		imgPath: "jason.jpg",
		github: "https://github.com/jlengstorf",
		twitter: "https://twitter.com/jlengstorf",
		description:
			"Jason Lengstorf is a developer, architect, occasional designer, and frequent speaker. He creates high-performing teams by building tools, systems, and the training materials to make them accessible.",
		jobrole: "Developer Advocate @Gatsby",
		tinySrc:
			"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7///8BEBAQEBEQEhQUEhkbGBsZJSIfHyIlOCgrKCsoOFU1PjU1PjVVS1tKRUpbS4dqXl5qh5yDfIOcvampve7i7v/////AABEIAB4AHgMBIgACEQEDEQH/xABjAAEBAQEBAAAAAAAAAAAAAAAFBAMGAhAAAgEDBAMBAQAAAAAAAAAAAQIDAAQREiExQVFhcQUTAQADAQAAAAAAAAAAAAAAAAAAAQIDEQADAQEAAAAAAAAAAAAAAAAAAQIREv/aAAwDAQACEQMRAD8AUN9eQ3DwtjLdDgaqThSOEA5LydsxrmbhoR+kSH1LqWkWe81JiSMA9EbUjVTovczOqiVTkZAYVsJneJGO1AgyLbyuZfoxz4r0W/tDGFcqV5JPNGg4OWiYzSFdGy5yegPdWNdgFRKmYigaMHsHipHnZlZQFVSDsoxUkVzIsSxMqSRjhX6+GqqMSJm3oyszuhKJiJnCr4BqyCUqCuoig2vZphFCFSONTkKgrdbyTwD6O9OYWD7en//Z",
	},
	{
		name: "Ives van Hoorne",
		imgPath: "ives.jpg",
		github: "https://github.com/CompuIves",
		twitter: "https://twitter.com/CompuIves",
		description: "Loves Cookies",
		jobrole: "Creator of Codesandbox",
		tinySrc:
			"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7/////wAALCAAeAB4BAREA/8QAOwAAAgMBAAAAAAAAAAAAAAAABAYBAgUDEAACAgEEAQQDAAAAAAAAAAABAgMRAAQFIUESEyIxQiMywf/aAAgBAQAAPwAFJFjILKCPjBppdfTSQK0KLfv7OW2rXTSs6SUzVYbG7bLMrkn64qygeC1dXhcb+vAsUjnwQN7R/cydA6RvJRF44bQzGR7P0xTnl8VCDl+hloI9QunkdjdDnmvnrOBggkhLhli9woWSc1YN1j26/C5vqeszvEKi9sbtuzhZMcE0aGFXpA5s8EkZMm4OvoqsUQo3+mCNqxFFH+JWkcs5JHHJz//Z",
	},
	{
		name: "Rex Raphael",
		imgPath: "rex.jpg",
		github: "https://github.com/juicycleff",
		twitter: "https://twitter.com/rex_raph",
		description:
			"Currently working with Snowball. He builds mission critical applications with enterprise scale in mind, getting extra performance gain is his focus. He currently writes Graphql powered projects and mentor people locally and internationally in Fullstack Development.",
		jobrole: "Fullstack Developer @snowball, Nigeria",
		tinySrc:
			"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7///8BEBAQEBEQEhQUEhkbGBsZJSIfHyIlOCgrKCsoOFU1PjU1PjVVS1tKRUpbS4dqXl5qh5yDfIOcvampve7i7v/////AABEIAB4AHgMBIgACEQEDEQH/xABkAAEBAQEAAAAAAAAAAAAAAAAFBgQHEAACAgIBBAIDAAAAAAAAAAABAgADBBEFEhMxQSJxBiFRAQADAQAAAAAAAAAAAAAAAAABAgMAEQEBAQEBAQAAAAAAAAAAAAABABECIRL/2gAMAwEAAhEDEQA/AL+THJ80uPaURFOvJaPPk1hGIYfoGc9svFpsL+T7hEx9mOVTyseKzqc5CygK6+RGpE/jpC5b/wAKSxa6tfLCDSyY0ffbYxVQWCnfWQPUCuIpuur2GCsRuL99r9o4BTRHR6huRiV22Ftsv0ZMD4CqPR3tr4q5VZmLa+QES5bKNRqZCPkINVWKVCqTNPfJGmAP2IuGx6Fv/9k=",
	},
	{
		name: "Pavithra Kodmad",
		imgPath: "pavithra.jpg",
		github: "https://github.com/pksjce",
		twitter: "https://twitter.com/PKodmad",
		description: "React enthusiast, been writing Javascript for the past decade",
		jobrole: "Developer at Atlassian",
		tinySrc:
			"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7/////wAALCAAeAB4BAREA/8QANgAAAgMBAAAAAAAAAAAAAAAABgcCAwQFEAACAgMBAAMBAAAAAAAAAAABAwIEABESBRMhMSL/2gAIAQEAAD8AP8os2U1VSa6XMRmBHrobZFaamJbIbgJ6/oZ1Mlgv7LoFy5h4lBUT2sfepn8JwVqsnc9qn8fQCiOtn8AxoYN+1dsJ86wtkOJzUeJxOCFHyWPom0LvwwnvsZhX8dH1EFLw4RIJnHGVXtXJIhJdXoEb0ZgEZD3V7oFv1tMhPFjO+8drgQFblqJiDoE7yygZPtBR100xj1r8GNipHlZz/9k=",
	},
	{
		name: "Vladimir Novick",
		imgPath: "vladir.jpg",
		github: "https://github.com/VladimirNovick ",
		twitter: "https://twitter.com/VladimirNovick ",
		tinySrc:
			"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wEEEAAUABQAFAAUABUAFAAXABkAGQAXAB8AIgAeACIAHwAuACsAJwAnACsALgBGADIANgAyADYAMgBGAGoAQgBOAEIAQgBOAEIAagBeAHIAXQBWAF0AcgBeAKkAhQB2AHYAhQCpAMMApACbAKQAwwDsANMA0wDsASoBGwEqAYUBhQILEQAUABQAFAAUABUAFAAXABkAGQAXAB8AIgAeACIAHwAuACsAJwAnACsALgBGADIANgAyADYAMgBGAGoAQgBOAEIAQgBOAEIAagBeAHIAXQBWAF0AcgBeAKkAhQB2AHYAhQCpAMMApACbAKQAwwDsANMA0wDsASoBGwEqAYUBhQIL/8IAEQgAJAAeAwEiAAIRAQMRAf/EABkAAAMBAQEAAAAAAAAAAAAAAAIEBQADAf/aAAgBAQAAAACkAd9M8rjO7Nyo7jsAs3//xAAXAQADAQAAAAAAAAAAAAAAAAAAAQMC/9oACAECEAAAALDK7//EABUBAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDEAAAAIET/8QAJBAAAwACAQMDBQAAAAAAAAAAAQIDAAQREjEyISJBBRATUXH/2gAIAQEAAT8A4ylJRXqowUZLYhckToCRnGDH6LbxWq+PCoDm9KcpyvrJ7kp8fYZeiJvS9wB45OfUdj8WqGTj1bp5/uTYPNGHYqM3t8wIlPz+T+sFqHZF6N1Zt7p2kVGUKmam5OcxNk4A7EZR2pdnbuWJz5XG81wegz//xAAbEQADAAIDAAAAAAAAAAAAAAAAAQIDESExQf/aAAgBAgEBPwCnpE1sqW54Ix2hdE+n/8QAGBEBAQEBAQAAAAAAAAAAAAAAAgEAERD/2gAIAQMBAT8AM7cjzFSXNm+Xf//Z",
		description:
			'Google Developer Expert, independent consultant, worldwide speaker, entrepreneur, Author of "React Native - Build mobile apps with JavaScript" book and several workshops and courses. He brings years of experience in JavaScript ecosystem and is one of early React and React Native adopters. On daily basis Vladimir works in Web, Mobile, VR/AR and IoT fields both for customers and on personal projects. Previously he worked in Sports, Gaming & Video industries as Lead Architect & Team Leader',
		jobrole: "Independent Consultant",
	},
	{
		name: "Shruti Kapoor",
		imgPath: "shruti.jpg",
		github: "https://github.com/shrutikapoor08 ",
		twitter: "https://twitter.com/shrutikapoor08",
		description: "She likes JavaScript and DevJokes.",
		jobrole: "Software Engineer, PayPal",
		tinySrc:
			"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wEEEAByAHIAcgByAHkAcgCBAI8AjwCBALMAwQCrAMEAswEIAPMA3QDdAPMBCAGQAR4BMwEeATMBHgGQAl8BegG7AXoBegG7AXoCXwIYAooCEAHtAhACigIYA8QC9QKfAp8C9QPEBFoDpwN1A6cEWgVFBLcEtwVFBqMGTgajCK0IrQupEQByAHIAcgByAHkAcgCBAI8AjwCBALMAwQCrAMEAswEIAPMA3QDdAPMBCAGQAR4BMwEeATMBHgGQAl8BegG7AXoBegG7AXoCXwIYAooCEAHtAhACigIYA8QC9QKfAp8C9QPEBFoDpwN1A6cEWgVFBLcEtwVFBqMGTgajCK0IrQup/8IAEQgAHgAeAwEiAAIRAQMRAf/EABgAAQEBAQEAAAAAAAAAAAAAAAMCBAAB/9oACAEBAAAAANJ+3IzqMY2HHJ//xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAhAAAAAl/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMQAAAAK//EAB0QAAICAwADAAAAAAAAAAAAAAABAgMQERIhIjL/2gAIAQEAAT8AJ2ckJqeJPlEG+SHizFnwQZv32J7RaVjgVn//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AB//xAAVEQEBAAAAAAAAAAAAAAAAAAAQAf/aAAgBAwEBPwAh/9k=",
	},
	{
		name: "CALL FOR SPEAKERS",
		imgPath: "you.png",
		description: "COMING SOON!",
	},
]

export default data
