const data = [
  {
    name: 'Sunil Pai',
    imgPath: 'sunil_pai.jpg', // with extension
    github: 'https://github.com/threepointone',
    twitter: 'https://twitter.com/threepointone',
    description: 'He built websites for myntra, yahoo, visa, and others.He’s also the author of glamor and a myriad of other cool open source projects.', // keep it simple
    jobrole: 'Mad Scientist, Facebook', // only one line,
    tinySrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7///8BEBAQEBEQEhQUEhkbGBsZJSIfHyIlOCgrKCsoOFU1PjU1PjVVS1tKRUpbS4dqXl5qh5yDfIOcvampve7i7v/////AABEIAB4AHgMBIgACEQEDEQH/xABhAAEBAQEAAAAAAAAAAAAAAAAGBQQBEAACAgICAwADAAAAAAAAAAABAgADBBESIQUTUSIjQQEBAQEAAAAAAAAAAAAAAAAAAQIDEQADAQEBAAAAAAAAAAAAAAAAARECEiH/2gAMAwEAAhEDEQA/AFTCG83ztWPc1VdJsKHTHeooIgrJ/SltYxyXRiC/3kZk/C8qlvBz6M+ovWCCvTKZqIhjwnKrLuUrrnWCR8IMVjRgxkKBEIeeoyEcunsauwDYX+ERTk3elOhsmZ8hBbWUfvqac1BlhHxNyUM4tB5Pr8vgETq+x0ZLODVXyKzvM0gcZLwxbP/Z'
  },
  {
    name: 'Sara Vieira',
    imgPath: 'sara_vieria.jpg',
    github: 'https://github.com/saravieira',
    twitter: 'https://twitter.com/NikkitaFTW',
    description: 'Developer Advocate at @YLDio. GraphQL and Open Source enthusiast. Conference Speaker and Airport expert. I am also into drums and horror movies.',
    jobrole: 'YLDio, Europe',
    tinySrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7///8BEBAQEBEQEhQUEhkbGBsZJSIfHyIlOCgrKCsoOFU1PjU1PjVVS1tKRUpbS4dqXl5qh5yDfIOcvampve7i7v/////AABEIAB4AHgMBIgACEQEDEQH/xABkAAEBAQAAAAAAAAAAAAAAAAAGBQEQAAIBBAAGAwEAAAAAAAAAAAECAwAEBRESEyEiMUEUQmFRAQEBAQAAAAAAAAAAAAAAAAAAAgMRAQEAAwEBAAAAAAAAAAAAAAEAAgMhMRH/2gAMAwEAAhEDEQA/AFU0qQxvI50qqSaMQ5PLXrPLbQAQirGYkRLCcP4dSlH8LLE0SR7YEeQX4RxA1nkoWusF6STHXvzYFk0N9Q2v6Ko0WwcgeW7ZTpGkYqtJgao6U5nxjWenYmK3+hHE9RLAy2DMrwB+Yva9Uc0NXsZLHTw+vw1MLMyRroAqD1HsD0aIJXh5baxzwycw9hbXCVOqaWU5ntopD5I60PlcdxAIZAoB/DSHDsfinr0D6FDybC//2Q=='
  },
  {
    name: 'Ken Wheeler',
    imgPath: 'ken_wheeler.jpg',
    github: 'https://github.com/kenwheeler',
    twitter: 'https://twitter.com/ken_wheeler',
    description: 'Author of libraries like Slick Carousel, McFly, react-music, webpack-dashboard, Spectacle.',
    jobrole: 'Google Developer Expert',
    tinySrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7/////wAALCAAeAB4BAREA/8QAPQAAAgIDAAAAAAAAAAAAAAAAAwYEBQACBxAAAgEEAQMEAwAAAAAAAAAAAQIDAAQFESESIjEGExVBJDJi/9oACAEBAAA/AH+q+e9fbCLwtGxuSNyzQsAJFFSqx+oIxUbOuKUnmuE2VEfSdk7bndQsRc3nyUTqI9y6396Wnqod9krPHxl55QvHC/ZpFfJwXaTzEe0jO39VT2Wcnx10ZYAr9vT3CnW09cWbp+TA6NXObmee5mMk8rO7EbJoazPbyEp+p8qfBrSaQTsWVFQAeBQjxX//2Q=='
  },
  {
    name: 'Nader Dabit',
    imgPath: 'nader_dabit.jpg',
    github: 'https://github.com/dabit3',
    twitter: 'https://twitter.com/dabit3',
    description: 'Nader has been developing with React Native for over 2.5 years. He has worked with and trained developers from fortune 500 companies like Amazon, Visa, American Express, and Microsoft, helping them to get up to speed with React Native as quickly as possible.',
    jobrole: 'Developer Advocate @awsformobile',
    tinySrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7///8BEBAQEBEQEhQUEhkbGBsZJSIfHyIlOCgrKCsoOFU1PjU1PjVVS1tKRUpbS4dqXl5qh5yDfIOcvampve7i7v/////AABEIAB4AHgMBIgACEQEDEQH/xABqAAABBAMAAAAAAAAAAAAAAAAEAAIDBgEFBxAAAgIBBAIBBQAAAAAAAAAAAQIAAwQFERIhMXFBBhMUIlEBAAMBAAAAAAAAAAAAAAAAAAECAwARAAMBAQEBAAAAAAAAAAAAAAABAhEhAxP/2gAMAwEAAhEDEQA/ALBIfx8+/wDeq+upPgFORPuTQykMqBefkdQjRKemqre5L2x71XmF5K69KwhMIvrHNWJ7VSPe8HgBaSYiQASSABM4WZj5Is+1YXCHiSviVL6lvflRQDshUuYLpWojTcLJdULWvaqr/PEovNudRorGXDUtRxcO2lb32Zx74iPrsrtQPW6sp+QdxOZ333ZFr22uWdjuSY/Hy8jFZjTaUJHe0r8OLvRKvXp//9k='
  },
  {
    name: 'Phil Plückthun',
    imgPath: 'phill.jpg',
    github: 'https://github.com/kitten',
    twitter: 'https://twitter.com/_philpl',
    description: 'core contributor for styled-components.Mad scientist focusing on GraphQL, CSS-in-JS, and Reason experiments',
    jobrole: 'Tech Lead, FormidableLabs, London',
    tinySrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7///8BEBAQEBEQEhQUEhkbGBsZJSIfHyIlOCgrKCsoOFU1PjU1PjVVS1tKRUpbS4dqXl5qh5yDfIOcvampve7i7v/////AABEIAB4AHgMBIgACEQEDEQH/xABhAAADAAMAAAAAAAAAAAAAAAAEBQYCAwcQAAICAgMAAQUAAAAAAAAAAAECAwQABRESURMGQWNxgQEBAQAAAAAAAAAAAAAAAAAAAAERAQEBAQAAAAAAAAAAAAAAAAABESH/2gAMAwEAAhEDEQA/AL/Emxu7IyvDrY4i0XHytJ74Md4ktotd5yjuhZ3lPGBlpNzNZlkp3YRDaQdj4y45yc09NjalvO7sxiEYLZR4AWwuilUefr2IIAHpOTk2xa3Vkd2jQDgA9fv4MJ+oXJ1wH50ycrhHSMsoJUcjAN1m4sUA8DEvGSf2pyt1N0z1n4nDkN/RnNJ3KFyPTmmO5YrP8kErIzLwSMmdl2rvLMj/2Q=='
  },
  {
    name: 'Jani Eväkallio',
    imgPath: 'jani.jpg',
    github: 'https://github.com/jevakallio',
    twitter: 'https://twitter.com/jevakallio',
    description: 'Show runner at Formidable in London',
    jobrole: 'VP @FormidableLabs, UK',
    tinySrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7/////wAALCAAeAB4BAREA/8QAOwABAAIDAAAAAAAAAAAAAAAABgIFAwQHEAACAgICAQMFAAAAAAAAAAABAgMEABEFEhMGFDEyQUJhcf/aAAgBAQAAPwB7amStWmmf6I0LHAEE3Mc1M0wn8EP4BTiqh7+KQw2pVmXptJANH9g5a5rXF81OzF894mXCfCK6VAscgQrvvvENWcSyKwmVtrrqMs8J3/UtWttYh5XwbV5aZJZDKoZXcswxAnPVI7Nd1ibooO9YzqXK92ISwPtc44Rk438ThwAWB+42D/czWrDWZfIyqu1A0o0Bl96YttDZnT5Vo8//2Q=='
  },
  {
    name: 'Jason Lengstorf',
    imgPath: 'jason.jpg',
    github: 'https://github.com/jlengstorf',
    twitter: 'https://twitter.com/jlengstorf',
    description: 'Jason Lengstorf is a developer, architect, occasional designer, and frequent speaker. He creates high-performing teams by building tools, systems, and the training materials to make them accessible.',
    jobrole: 'Developer Advocate @Gatsby',
    tinySrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7///8BEBAQEBEQEhQUEhkbGBsZJSIfHyIlOCgrKCsoOFU1PjU1PjVVS1tKRUpbS4dqXl5qh5yDfIOcvampve7i7v/////AABEIAB4AHgMBIgACEQEDEQH/xABjAAEBAQEBAAAAAAAAAAAAAAAFBAMGAhAAAgEDBAMBAQAAAAAAAAAAAQIDAAQREiExQVFhcQUTAQADAQAAAAAAAAAAAAAAAAAAAQIDEQADAQEAAAAAAAAAAAAAAAAAAQIREv/aAAwDAQACEQMRAD8AUN9eQ3DwtjLdDgaqThSOEA5LydsxrmbhoR+kSH1LqWkWe81JiSMA9EbUjVTovczOqiVTkZAYVsJneJGO1AgyLbyuZfoxz4r0W/tDGFcqV5JPNGg4OWiYzSFdGy5yegPdWNdgFRKmYigaMHsHipHnZlZQFVSDsoxUkVzIsSxMqSRjhX6+GqqMSJm3oyszuhKJiJnCr4BqyCUqCuoig2vZphFCFSONTkKgrdbyTwD6O9OYWD7en//Z'
  },
  {
    name: 'Ives van Hoorne',
    imgPath: 'ives.jpg',
    github: 'https://github.com/CompuIves',
    twitter: 'https://twitter.com/CompuIves',
    description: 'Loves Cookies',
    jobrole: 'Creator of Codesandbox',
    tinySrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7/////wAALCAAeAB4BAREA/8QAOwAAAgMBAAAAAAAAAAAAAAAABAYBAgUDEAACAgEEAQQDAAAAAAAAAAABAgMRAAQFIUESEyIxQiMywf/aAAgBAQAAPwAFJFjILKCPjBppdfTSQK0KLfv7OW2rXTSs6SUzVYbG7bLMrkn64qygeC1dXhcb+vAsUjnwQN7R/cydA6RvJRF44bQzGR7P0xTnl8VCDl+hloI9QunkdjdDnmvnrOBggkhLhli9woWSc1YN1j26/C5vqeszvEKi9sbtuzhZMcE0aGFXpA5s8EkZMm4OvoqsUQo3+mCNqxFFH+JWkcs5JHHJz//Z'
  },
  {
    name: 'Rex Raphael',
    imgPath: 'rex.jpg',
    github: 'https://github.com/juicycleff',
    twitter: 'https://twitter.com/rex_raph',
    description: 'Currently working with Snowball. He builds mission critical applications with enterprise scale in mind, getting extra performance gain is his focus. He currently writes Graphql powered projects and mentor people locally and internationally in Fullstack Development.',
    jobrole: 'Fullstack Developer @snowball, Nigeria',
    tinySrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7///8BEBAQEBEQEhQUEhkbGBsZJSIfHyIlOCgrKCsoOFU1PjU1PjVVS1tKRUpbS4dqXl5qh5yDfIOcvampve7i7v/////AABEIAB4AHgMBIgACEQEDEQH/xABkAAEBAQEAAAAAAAAAAAAAAAAFBgQHEAACAgIBBAIDAAAAAAAAAAABAgADBBEFEhMxQSJxBiFRAQADAQAAAAAAAAAAAAAAAAABAgMAEQEBAQEBAQAAAAAAAAAAAAABABECIRL/2gAMAwEAAhEDEQA/AL+THJ80uPaURFOvJaPPk1hGIYfoGc9svFpsL+T7hEx9mOVTyseKzqc5CygK6+RGpE/jpC5b/wAKSxa6tfLCDSyY0ffbYxVQWCnfWQPUCuIpuur2GCsRuL99r9o4BTRHR6huRiV22Ftsv0ZMD4CqPR3tr4q5VZmLa+QES5bKNRqZCPkINVWKVCqTNPfJGmAP2IuGx6Fv/9k='
  },
  {
    name: 'Pavithra Kodmad',
    imgPath: 'pavithra.jpg',
    github: 'https://github.com/pksjce',
    twitter: 'https://twitter.com/PKodmad',
    description: 'React enthusiast, been writing Javascript for the past decade',
    jobrole: 'Developer at Atlassian',
    tinySrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7/////wAALCAAeAB4BAREA/8QANgAAAgMBAAAAAAAAAAAAAAAABgcCAwQFEAACAgMBAAMBAAAAAAAAAAABAwIEABESBRMhMSL/2gAIAQEAAD8AP8os2U1VSa6XMRmBHrobZFaamJbIbgJ6/oZ1Mlgv7LoFy5h4lBUT2sfepn8JwVqsnc9qn8fQCiOtn8AxoYN+1dsJ86wtkOJzUeJxOCFHyWPom0LvwwnvsZhX8dH1EFLw4RIJnHGVXtXJIhJdXoEb0ZgEZD3V7oFv1tMhPFjO+8drgQFblqJiDoE7yygZPtBR100xj1r8GNipHlZz/9k='
  },
  {
    name: 'Vladimir Novick',
    imgPath: 'vladir.jpg',
    github: 'https://github.com/VladimirNovick ',
    twitter: 'https://twitter.com/VladimirNovick ',
    tinySrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAcHBwcHBwgICAgLCwoLCxAODQ0OEBgREhESERgkFhoWFhoWJCAmHx0fJiA5LScnLTlCNzQ3Qk9HR09kX2SDg7ABBwcHBwcHCAgICAsLCgsLEA4NDQ4QGBESERIRGCQWGhYWGhYkICYfHR8mIDktJyctOUI3NDdCT0dHT2RfZIODsP/AABEIAB4AHgMBIgACEQEDEQH/xABqAAEAAwEAAAAAAAAAAAAAAAAGAwQHBRAAAgEEAgECBwEAAAAAAAAAAQIDAAQFEQYScSExByM0UVJhgUIBAQEBAQAAAAAAAAAAAAAAAAIBAwQRAAMBAQEBAAAAAAAAAAAAAAECAwARBEH/2gAMAwEAAhEDEQA/AHBKorOx0qgkn7AVnr5HlmblaXEotrajYjB6l3H5MWphnbaa7wuQggfq7wn+gepH9FcjjE901rcrFbxd4OnTbnTlq670ZSoB5h5pK/S2q4rM5WyyUeIz6fMn+mn0B2P4t1px1ofzDE3l7PiL5JEgltHE0vqSoVCCNU1YDZ804OWU9+YXmEYc1aSaOCGSWQgIikt4FAOH5O0eWfbSgu2lVFLNtfAobkeUZrKLcBbtoIJhoQx60F8+9R8XzQ487qUeV5GOtNoEN96vohRgpAB189lQt0518Q8ncWhxQDvEkrs0ig+6oQR2p7a3MV5bxXETh0kUMCP3WLZvMTcinilu4kSOIERRp/n9kn3NM8DyWGKBbSa20ETatEAN+RWkfJaaknmF7pQjnd//2Q==',
    description: 'Developer advocate @Hasura.io, Google Developer Expert, consultant, worldwide speaker, published book author, 3factorRadio podcast host, OSS contributor. On daily basis, Vladimir works in Web, Mobile, VR, AR, and IoT fields advocating usage of GraphQL and serverless architectures as well as functional languages such as ReasonML.',
    jobrole: 'Developer Advocate at Hasura'
  },
  {
    name: 'Shruti Kapoor',
    imgPath: 'shruti.jpg',
    github: 'https://github.com/shrutikapoor08 ',
    twitter: 'https://twitter.com/shrutikapoor08',
    description: 'She likes JavaScript and DevJokes.',
    jobrole: 'Software Engineer, PayPal',
    tinySrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wEEEAByAHIAcgByAHkAcgCBAI8AjwCBALMAwQCrAMEAswEIAPMA3QDdAPMBCAGQAR4BMwEeATMBHgGQAl8BegG7AXoBegG7AXoCXwIYAooCEAHtAhACigIYA8QC9QKfAp8C9QPEBFoDpwN1A6cEWgVFBLcEtwVFBqMGTgajCK0IrQupEQByAHIAcgByAHkAcgCBAI8AjwCBALMAwQCrAMEAswEIAPMA3QDdAPMBCAGQAR4BMwEeATMBHgGQAl8BegG7AXoBegG7AXoCXwIYAooCEAHtAhACigIYA8QC9QKfAp8C9QPEBFoDpwN1A6cEWgVFBLcEtwVFBqMGTgajCK0IrQup/8IAEQgAHgAeAwEiAAIRAQMRAf/EABgAAQEBAQEAAAAAAAAAAAAAAAMCBAAB/9oACAEBAAAAANJ+3IzqMY2HHJ//xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAhAAAAAl/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMQAAAAK//EAB0QAAICAwADAAAAAAAAAAAAAAABAgMQERIhIjL/2gAIAQEAAT8AJ2ckJqeJPlEG+SHizFnwQZv32J7RaVjgVn//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AB//xAAVEQEBAAAAAAAAAAAAAAAAAAAQAf/aAAgBAwEBPwAh/9k='
  },
  {
    name: 'Carolyn Stransky',
    imgPath: 'carolyn.jpg',
    github: 'https://github.com/carolstran',
    twitter: 'https://twitter.com/carolstran',
    description: 'Carolyn Stransky is a frontend developer based in Berlin, Germany. She currently works at Blacklane, organizes BerlinJS and teaches at ReDI School of Digital Integration. You’ll usually find her looking at memes or taking selfies in the nearest restroom.',
    jobrole: 'Blacklane, Frontend Developer',
    tinySrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAcHBwcHBwgICAgLCwoLCxAODQ0OEBgREhESERgkFhoWFhoWJCAmHx0fJiA5LScnLTlCNzQ3Qk9HR09kX2SDg7ABBwcHBwcHCAgICAsLCgsLEA4NDQ4QGBESERIRGCQWGhYWGhYkICYfHR8mIDktJyctOUI3NDdCT0dHT2RfZIODsP/AABEIAB0AHgMBIgACEQEDEQH/xABtAAADAQEAAAAAAAAAAAAAAAAFBgcIBBAAAgEEAgECBgMAAAAAAAAAAQIDAAQFEQYSITFxExQiMkFhIyVRAQEBAQEAAAAAAAAAAAAAAAAFAQADEQACAgMBAQAAAAAAAAAAAAABAgADBBEhEjL/2gAMAwEAAhEDEQA/AK5GKTeS8su8Zepi8TZi5vBCZpewYqin7R9P5NOCPoVMrYSwcm5BdyzOjm+QKvUEPF02tSwlF2J0oUWOFML8S5he5O8fE5yy+UvwhePSlVkUVQ9VnzlWQks81hrpLvtcRH4wcL1KqW9Kv0codQQfBG6lTe1mvQVvoRMyvIYscVgVDJOydtb0FH+mlFcs9zeNLduqdkCLpOyqAd+QaBchuZBmp/aJR7da5QzOVTfrrzTCYtT0aYdYdMHOVdVeGU/J4Iq8kuIpc1MyTPOv0gO36q88PzYyOJiDH+WBVjb9gDwaz3k4v7Pe/u1+KduL3k1lI3wj6xEa9mFHV4+rnQHixK3I9Uo5HW7P/9k='
  },
  {
    name: 'Siddharth Kshetrapal',
    imgPath: 'siddharth.jpg',
    github: 'https://github.com/siddharthkp',
    twitter: 'https://twitter.com/siddharthkp',
    description: 'Design systems with React @Auth0 ∙ running frontend.army and @atinyconf on the side ∙ past: frontend architect @practo',
    tinySrc: 'data:image/jpeg;base64,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'
  },
  {
    name: 'Prateek Bhatnagar',
    imgPath: 'prateek.jpg',
    github: 'https://github.com/prateekbh',
    twitter: 'https://twitter.com/_prateekbh',
    description: 'Works on AMP ⚡️⚡️⚡️. Mobile web lover/developer , matching web against every native. @google-r, ex @flipkart-ian, @workboxjs-er Preact-cli core team member.',
    tinySrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wEEEAAcABwAHAAcAB4AHAAgACQAJAAgAC0AMAArADAALQBCAD0ANwA3AD0AQgBkAEcATQBHAE0ARwBkAJcAXgBuAF4AXgBuAF4AlwCGAKIAhAB7AIQAogCGAPAAvQCnAKcAvQDwARYA6QDdAOkBFgFQAS0BLQFQAagBkgGoAioCKgLoEQAcABwAHAAcAB4AHAAgACQAJAAgAC0AMAArADAALQBCAD0ANwA3AD0AQgBkAEcATQBHAE0ARwBkAJcAXgBuAF4AXgBuAF4AlwCGAKIAhAB7AIQAogCGAPAAvQCnAKcAvQDwARYA6QDdAOkBFgFQAS0BLQFQAagBkgGoAioCKgLo/8IAEQgAHgAeAwEiAAIRAQMRAf/EABoAAAICAwAAAAAAAAAAAAAAAAIEAwUAAQb/2gAIAQEAAAAA5tqMQuN02Nu1kZOLf//EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oACAECEAAAAIWP/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAECA//aAAgBAxAAAADQV//EACEQAAIDAAAGAwAAAAAAAAAAAAECAAMRBBASEyIxQWGh/9oACAEBAAE/AJVw73DxEeooxVvYmgD45cPdqBEHlksq8Q9x50XlV6NzDoMZg2Juk/gltRrYrPc6clbduk2AfULl2JPsz//EABgRAQEBAQEAAAAAAAAAAAAAAAEAAhEh/9oACAECAQE/ANKFl7J2yet//8QAGBEBAQEBAQAAAAAAAAAAAAAAAQACEiH/2gAIAQMBAT8AwC+288sKNtEL/9k='
  },
  {
    name: 'Kiran Abburi',
    imgPath: 'kiranAbburi.jpg',
    github: 'https://github.com/akiran',
    twitter: 'https://twitter.com/kiran_abburi',
    description: 'Kiran Abburi works as a consultant primarily on Reactjs and GraphQL projects. He contributes to open source projects and organises reactjs Bangalore meetup, which is an active meetup group with 9000 members',
    tinySrc: ''
  }
]

export default data
