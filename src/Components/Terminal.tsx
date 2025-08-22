import { useState, useEffect, useRef } from "react";
import  wrongSound  from '../assets/sounds/zapsplat_multimedia_beep_soft_click_button_87548.mp3'
import  load  from '../assets/sounds/terminal-load.mp3'


export default function Terminal(){
    const loadAudio = new Audio(load)
    
    const arrowIndex = useRef(-1)

    const catUrl = 'https://catfact.ninja/fact'
    
    const inputRef = useRef<HTMLInputElement>(null)
    const isFirstLoad = useRef<boolean>(false)
    const terminalRef = useRef<HTMLDivElement>(null)

    const [randomFact, setRandomFact] = useState([''])
    const help = 
        [
            'Available commands:\n',
            ' + about: learn more about me\n',
            ' + projects: take a look of what I’ve built\n',
            ' + clear: clear the terminal\n',
            ' + contact: where can you reach me\n',
            ' + randomcat: get a random fact about cats'
        ]
    
    const [history, setHistory] = useState([
        "Type `help` to see available commands.",
      ])

    const [cmdHistory, setCmdHistory] = useState<string[]>([])

    const [input, setInput] = useState<string>('')
    
    const commands = {
        help: help,
        about: [
            'Hey, I’m Aintzane, but everyone just calls me Aint. I’m a software engineer with a frontend development focus and deep understanding of UX Design',
        ],
        projects: 
            [
                'Take a look at some of my work:',
                ' + [immersive]',
                ' + [queixos]',
                '',
                'To read the case studies, head to the Projects section:',
                ' + Age verification case study',
                ' + Farming friends app design',
            ],
        contact: ['You can drop me an email at [email] or find me on [linkdn]'],
        clear: [],
        randomcat: randomFact
    } as const
    
    const getRandomFact = async () => {
        const response = await  fetch(catUrl)
        const data = await response.json()
        setRandomFact([data.fact])
    }
    
    useEffect( () => {
        getRandomFact()
    }, [history])


    
    function handleCommand(cmd:string){
        const cmdFormatted = cmd.toLowerCase()
        
        if(Object.hasOwn(commands,cmdFormatted)){
          const cmdFormatted = cmd.toLowerCase() as keyof typeof commands
          
          if(cmdFormatted === 'clear'){
            setHistory([])
            setCmdHistory( prev => [...prev,cmdFormatted])
          }

          if (cmdFormatted === 'randomcat') {
            getRandomFact()
          }

          setHistory( prev => [...prev, `> ${cmd}`, ...commands[cmdFormatted]])
          setCmdHistory( prev => [...prev,cmdFormatted])
        }else{
          setHistory( prev => [...prev, `> ${cmdFormatted}`, `Command not found`])
        }        
    }
    
    useEffect( () => {
        const container = terminalRef.current
        if(container){
            container.scrollTop = container.scrollHeight
        }
    },[history])

    

    function focusInput(){
        if(inputRef.current){
            inputRef.current.focus()
        }
        
    }

    useEffect( () => {
        if(isFirstLoad.current === false){
            focusInput()
            loadAudio.play()
            isFirstLoad.current = true
        }
    },[])
    

    function renderTextWithLinks(text:string) {
        return text.split(/(\[email\]|\[linkdn\]|\[immersive\]|\[queixos\])/g).map((part, index) => {
          if (part === '[email]') {
            return (
              <a
                key={index}
                href="mailto:aintzz.im@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                aintzz.im@gmail.com
              </a>
            )
          }
          if (part === '[linkdn]') {
            return (
              <a
                key={index}
                href="https://www.linkedin.com/in/aintzaneiglesias/"
                target="_blank"
                rel="noreferrer"
              >
                Linkdn
              </a>
            );
          }
          if (part === '[immersive]') {
            return (
              <a
                key={index}
                href="https://www.immersiveplanet.com/"
                target="_blank"
                rel="noreferrer"
              >
                Immersive planet website
              </a>
            );
          }
          if (part === '[queixos]') {
            return (
              <a
                key={index}
                href="https://queixosbrigantia.es/"
                target="_blank"
                rel="noreferrer"
              >
                Queixos brigantia website
              </a>
            );
          }
          return part;
        })
    }

  
    function autoComplete(){
        const audio = new Audio(wrongSound)
        
        const commandMap = {
            a: 'about',
            h: 'help',
            c: {
              co: 'contact',
              cl: 'clear',
            },
            p: 'projects',
            r: 'randomcat',
        }
        const firstLetter = input.slice(0,1) as keyof typeof commandMap

        if( Object.keys(commandMap).includes(firstLetter)){
            if (firstLetter === 'c') {
                if (input.length < 2) {
                    audio.play();
                    setInput(input)
                }else{
                    if (input.slice(0, 2) === 'co') {
                        setInput('contact');
                    } else if (input.slice(0, 2) === 'cl') {
                        setInput('clear');
                    } else {
                        audio.play();
                        setInput(input)
                    }
                }
            }else{
                setInput(commandMap[firstLetter])
            } 
        }else{
            audio.play();
            setInput(input)
        }
        
    }
    function handleKeyDown (e: React.KeyboardEvent<HTMLDivElement>) {
        
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (cmdHistory.length === 0) return;
        
            arrowIndex.current = Math.min(arrowIndex.current + 1, cmdHistory.length - 1);
            const cmd = cmdHistory[cmdHistory.length - 1 - arrowIndex.current];
            setInput(cmd);
          }
        
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (arrowIndex.current <= 0) {
              arrowIndex.current = -1;
              setInput('');
            } else {
              arrowIndex.current -= 1;
              const cmd = cmdHistory[cmdHistory.length - 1 - arrowIndex.current];
              setInput(cmd);
            }
          }

        if (e.key === 'Tab') {
            e.preventDefault()
            autoComplete()
        }
        if (e.key === 'Enter') {
            handleCommand(input)
            setInput('')
        }
    }


    
    function handleOnChange(e:string) {
        setInput(e)
        
    }

    return(
        <div className="terminal-container">
            <div ref={terminalRef} className="terminal" onClick={focusInput}>
                <p>Last login: Wed Jul 16 11:43:27 - Thanks for passing by 🫰</p>
                <div className="terminal-content pdtop-12">
                    {history.map((line, i) => (
                        <p key={i}>{renderTextWithLinks(line)}</p>
                    ))}
                    
                </div>
            </div>
            <div className="terminal-input padlr-1">
                <span>@visitor ~ % </span>
                <input
                ref={inputRef}
                value={input}
                onChange={(e) => handleOnChange(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
                />
            </div>
        </div>
    )
}