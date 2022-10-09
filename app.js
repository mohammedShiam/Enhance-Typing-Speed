        // Selection

        const headTitle = document.querySelector('#head-title')
        const headSubtitle = document.querySelector('#head-subtitle')
        const outputWords = document.querySelector('#output-words')
        const outputCharacter = document.querySelector('#output-character')
        const outputerror = document.querySelector('#output-errors')
        const displayPragraph = document.querySelector('#display-pragraph')
        const textArea = document.querySelector('#text-area')
        const startBtn = document.querySelector('#start-btn')
        const displayOutput = document.querySelector('#display-ouput')
        const reloadBtn = document.querySelector('#Try Again')
        const displayOutputContent = document.querySelector('#diplay-output-content')


        // Pragraph
        const pragraphs = [

            `The day had begun on a bright note. The sun finally peeked through the rain for the first time in a week, and the birds were singing in its warmth. There was no way to anticipate what was about to happen. It was a worst-case scenario and there was no way out of it. “Ingredients for life,” said the backside of the truck. They mean food, but really food is only 1 ingredient of life. Life has so many more ingredients such as pain, happiness, laughter, joy, tears, and smiles. Life also has hard work, easy play, sleepless nights, and sunbathing by the ocean. Love, hatred, envy, self-assurance, and fear could be just down aisle 3 ready to be bought when needed. How I wish I could pull ingredients like these off shelves in a store.`,

            `"Begin today!" That's all the note said. There was no indication from where it came or who may have written it. Had it been meant for someone else? Meghan looked around the room, but nobody made eye contact back. For a brief moment, she thought it might be a message for her to follow her dreams, but ultimately decided it was easier to ignore it as she crumpled it up and threw it away. April seriously wondered about her sleeping partner choices. She looked at her bed and what a mess it had become. How did she get to the point in her life where she had two dogs, three cats, and a raccoon sleeping with her every night?`,

            `You can decide what you want to do in life, but I suggest doing something that creates. Something that leaves a tangible thing once you're done. That way even after you're gone, you will still live on in the things you created. She counted. One. She could hear the steps coming closer. Two. Puffs of breath could be seen coming from his mouth. Three. He stopped beside her. Four. She pulled the trigger of the gun. Matt told her to reach for the stars, but Veronica thought it was the most ridiculous advice she'd ever received. Sure, it had been well-meaning when he said it, but she didn't understand why anyone would want to suggest something that would literally kill you if you actually managed to achieve it.`,

            `Do you really listen when you are talking with someone? I have a friend who listens in an unforgiving way. She actually takes every word you say as being something important and when you have a friend that listens like that, words take on a whole new meaning.  Trees. It was something about the trees. The way they swayed with the wind in unison. The way they shaded the area around them. The sounds of their leaves in the wind and the creaks from the branches as they sway, The trees were making a statement that I just couldn't understand. The rain was coming. Everyone thought this would be a good thing. It hadn't rained in months and the earth was dry as a bone. It wasn't a surprise that everyone thought a good rain was what was needed, but they never expected how much rain would actually arrive.`,

            `Don't forget that gifts often come with costs that go beyond their purchase price. When you purchase a child the latest smartphone, you're also committing to a monthly phone bill. When you purchase the latest gaming system, you're likely not going to be satisfied with the games that come with it for long and want to purchase new titles to play. When you buy gifts it's important to remember that some come with additional costs down the road that can be much more expensive than the initial gift itself. April seriously wondered about her sleeping partner choices. She looked at her bed and what a mess it had become. How did she get to the point in her life where she had two dogs, three cats, and a raccoon sleeping with her every night?`
        ]
        let finalOutput = '';
        let typingMistake = 0
        startBtn.addEventListener('click', () => {
            // Hide start button
            startBtn.classList.add('hide');

            // Remove hide text aria
            textArea.classList.remove('hide')

            // Add hide head subtitle
            headSubtitle.classList.add('hide')
            displayPragraph.style.color = 'black'


            displayOutputContent.innerHTML = null
            typingMistake = 0
            textArea.focus()



            // Clear Text Area
            textArea.value = ''


            // Genarate random namber
            const arrRanNum = Number(Math.floor(Math.random() * 4))


            let count = 0
            const timeRange = setInterval(() => {
                count++;

                if (count < 120) {
                    headTitle.innerHTML = count
                    displayPragraph.classList.remove('hide')

                    displayPragraph.innerHTML = pragraphs[arrRanNum]


                } else if (count == 121) {
                    clearInterval(timeRange)
                    const isGreen = displayPragraph.style.color == 'green'
                    displayPragraph.classList.add('hide')
                    textArea.classList.add('hide')

                    // Split Final Result
                    const words = finalOutput.split(' ')
                    const char = finalOutput.split('')

                    resultDisplay(isGreen, words, char, typingMistake)
                    displayOutput.classList.remove('hide')
                    displayOutputContent.innerHTML = words.join(' ')
                    // reloadBtn.addEventListener('click', )
                    startBtn.classList.remove('hide');
                    startBtn.innerHTML = 'Try Again'


                }

            }, 1000);


            let temTypeMissCount = 0
            textArea.addEventListener('input', () => {
                const paraContext = pragraphs[arrRanNum]
                const inputFromVield = textArea.value
               

                if (paraContext[inputFromVield.length - 1] == inputFromVield[inputFromVield.length -
                    1] && paraContext.slice(0, inputFromVield.length - 1) == inputFromVield.slice(0,
                        inputFromVield.length - 1)) {
                    displayPragraph.style.color = 'green'

                } else {
                    displayPragraph.style.color = 'red'

                    temTypeMissCount++

                }
                finalOutput = inputFromVield
                typingMistake = temTypeMissCount



            })


        })

        function resultDisplay(isGreen, words, char, err){

            headSubtitle.classList.remove('hide')

            if(isGreen){



                if(words.length >= 120){
                    headTitle.innerHTML = `Mashallah, Well Done. <strong<em>You are Expert.</em></strong> .👌😊`
                    outputWords.innerHTML = words.length
                    outputCharacter.innerHTML = char.length
                    outputerror.innerHTML = `${err} Times` 
                    headSubtitle.style.backgroundColor = 'green'

                }else if(words.length >= 80){
                    headTitle.innerHTML = `Mashallah, You type well. <strong<em>Keep Practicing</em></strong> 👍`
                    outputWords.innerHTML = words.length
                    outputCharacter.innerHTML = char.length
                    outputerror.innerHTML = `${err} Times`
                    headSubtitle.style.backgroundColor = 'yellow'
                    headSubtitle.style.color = 'black'




                }else if(words.length >= 50){
                    headTitle.innerHTML = `Mashallah, Your typing speed is Average. <strong<em>Keep Practicing</em></strong> 👍`
                    outputWords.innerHTML = words.length
                    outputCharacter.innerHTML = char.length
                    outputerror.innerHTML = `${err} Times` 
                    headSubtitle.style.backgroundColor = '#f1f0f0'
                    headSubtitle.style.color = 'black'

                    


                }else{
                    headTitle.innerHTML = `Subhanallah, Your typing speed is very poor. <strong<em>Keep More Practicing</em></strong> 👍`
                    outputWords.innerHTML = words.length
                    outputCharacter.innerHTML = char.length
                    outputerror.innerHTML = `${err} Times` 
                    headSubtitle.style.backgroundColor = 'red'
                    headSubtitle.style.color = 'white'




                }

            }else{


                if(char.length > 0){


                    headTitle.innerHTML = `Sorry! Your typing was Incorrect. Do it properly in Next Time.`
                    outputWords.innerHTML = words.length
                    outputCharacter.innerHTML = char.length
                    outputerror.innerHTML = `${err} Times` 
                    headSubtitle.style.backgroundColor = 'red'
                    headSubtitle.style.color = 'white'


                }else{

                    headTitle.innerHTML = `You did not typed.`
                    outputWords.innerHTML = words.length
                    outputCharacter.innerHTML = char.length
                    outputerror.innerHTML = `${err} Times`
                    headSubtitle.style.backgroundColor = 'red'
                    headSubtitle.style.color = 'white' 

                }


            }

        }
