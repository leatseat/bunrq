
const BKR4="BROKER4"
const language={
    page:{
        title:'',
        prefooter:'',
        footer:'',
        policy:'',
        cookie:''
    },
    header:{title:''},
    content:{
        title:'',
        button:''
    },
    platform:{
        xtb:{
            odds:{
                ul:{
                    1:"",
                    2:"",
                    3:""
                }
            },
            title:'',
            content:''
        },
        skilling:{
            odds:{
                ul:{
                    1:"",
                    2:"",
                    3:""
                }
            },
            title:'',
            content:''
        },
        etoro:{
            odds:{
                ul:{
                    1:"",
                    2:"",
                    3:""
                }
            },
            title:'',
            content:''
        },
        bkr4:{
            odds:{
                ul:{
                    1:"",
                    2:"",
                    3:""
                }
            },
            title:'',
            content:''
        }
    },
    set:function(){
       
        document.querySelector("title").innerText=language.page.title
        document.querySelector(".htitle").innerText=language.header.title
  
        const li=document.querySelectorAll("li")
        const li0=Object.keys(li)
        const li_=[
            language.platform.xtb.odds.ul[1],
            language.platform.xtb.odds.ul[2],
            language.platform.xtb.odds.ul[3],
            language.platform.skilling.odds.ul[1],
            language.platform.skilling.odds.ul[2],
            language.platform.skilling.odds.ul[3],
            language.platform.etoro.odds.ul[1],
            language.platform.etoro.odds.ul[2],
            language.platform.etoro.odds.ul[3],
            language.platform.bkr4.odds.ul[1],
            language.platform.bkr4.odds.ul[2],
            language.platform.bkr4.odds.ul[3]
        ]
        let index=0
        li0.map(x=>{
            li[x].innerText=li_[index]
            index++
        })


        document.querySelector(".h1Linear").innerText=language.platform.xtb.title
        document.querySelector(".desc").innerText=language.platform.xtb.content

        document.querySelectorAll(".content_title")[1].innerText=language.platform.etoro.title
        document.querySelectorAll(".desc ")[1].innerText=language.platform.etoro.content
       
        document.querySelectorAll(".content_title")[2].innerText=language.platform.skilling.title
        document.querySelectorAll(".desc ")[2].innerText=language.platform.skilling.content

        document.querySelectorAll(".content_title")[3].innerText=language.platform.bkr4.title
        document.querySelectorAll(".desc ")[3].innerText=language.platform.bkr4.content

        document.querySelector(".warning").innerText=language.page.prefooter
        document.querySelector(".address").innerText=language.page.footer
        document.querySelector(".policy").innerText=language.page.policy
        document.querySelector(".cookie").innerText=language.page.cookie

        const gos=document.querySelectorAll(".go")
        const gos_=Object.keys(gos)

        gos_.map(x=>{
            const tar=gos[x].innerText
            const a=language.content.button+" "+gos[x].innerText
            if(a.toLowerCase().includes("xtb"))
            gos[x].innerText=language.content.button+" xtb"
            else if(a.toLowerCase().includes("skilling"))
            gos[x].innerText=language.content.button+" skilling"
            else if(a.toLowerCase().includes("etoro"))
            gos[x].innerText=language.content.button+" etoro"
            else if(a.toLowerCase().includes("${BKR4}"))
            gos[x].innerText=language.content.button+" ${BKR4}"
        })

        language.page.title=this.page.title 
        console.log(this.content.title)
         document.querySelector(".content_title").innerText=this.content.title


    }
}

const en={
    page:{
        title:'MyWalletInvest - 4 Best Trading Platforms - ${BKR4} - etoro - xtb - skilling',
        prefooter:`Risk Warning: Investing involves high risks, including the risk of losing some or all of the amount invested, and may not be suitable for all investors.

        Between 64% and 80.5% of retail investor accounts lose money investing with these providers. You should consider whether you can afford to take the high risk of losing money. Before making a trading decision, you should fully understand the risks and costs associated with investing in the financial markets.
       
        The data on this website is not always accurate or real-time. Neither we nor any provider of data contained on this website shall be liable for any loss or damage of any kind arising from your investment in or reliance on the information contained on this website.
       
        Contact: info@mywallet.network
        `,
        footer:'Intraprendere Srl - P.IVA 11820790017, Corso Tassoni 31/A, 10142 Torino - Italy',
        policy:'Privacy Policy',
        cookie:'Cookies use policy'
    },
    header:{title:'MyWalletInvest'},
    content:{
        title:'4 Robust Platforms to Invest',
        button:'Visit'
    },
    platform:{
        xtb:{
            odds:{
                ul:{
                    1:"No commissions on stocks or ETFs",
                    2:"Regulated by CNMV",
                    3:"5000 instruments to invest"
                }
            },
            title:'XTB: Regulated platform with a history of more than two decades',
            content:`In our list of the best trading platforms, we could not not include XTB. This is one of the most sought after sites by investors globally. This is for a number of reasons, such as the variety of assets on offer. This broker has licenses for all the markets offered, among which we can mention cryptocurrencies and shares. It was founded in 2002 and has bases in Warsaw and London.
             
            In addition to this, the broker also has a very good customer service. This is not only easy to contact, but also responds without waiting and without automatic voices, so any inconvenience or question is resolved almost instantly. This is one of the main reasons why users from all over the world rate the XTB broker positively.
            `
        },
        skilling:{
            odds:{
                ul:{
                    1:"It has a very intuitive interface.",
                    2:"Advanced trading technology.",
                    3:"Offers courses and events for its users"
                }
            },
            title:'Skilling - Offers good conditions in robust environments ',
            content:`
            The Scandinavian platform offers a type of investment that moves outside of market trends. It has more than 700 shares and has a very competitive structure where 0 commissions apply. You will be able to operate in a completely secure way, since it is a regulated platform, where the safety of your funds is guaranteed.
            
             Skilling allows you to operate 24 hours a day, without costs or complications. Their spreads are very competitive with fractional shares. This is not all, since it offers a leverage of 5:1. This is a great point in favor, since you will be able to have a greater amount of assets with the same money that you would use on any other platform.
            `
          
        },
        etoro:{
            odds:{
                ul:{
                    1:"CYSEC International License",
                    2:"Friendly and easy to use platform",
                    3:"Highly regulated broker"
                }
            },
            title:'ETORO, a good reliable and effective platform',
            content:`
            eToro is without a doubt the best trading platform in 2023. This broker is ideal for beginners, but it also has an interesting variety of tools for more advanced users. The reason is that the platform is very easy to use and allows you to carry out small operations. However, those more experienced users will find the ideal site to carry out their operations with all the tools at their disposal. The great variety of assets that the platform has makes it the most recurring choice by users in the region.
            
            With a minimum deposit of just $200, this platform allows you to trade as low as $25. eToro has a wide variety of assets. With these amounts, it is possible to invest in an infinite number of securities, from the most important markets in the world, such as the United States, Canada, and the United Kingdom. Although its supply of assets is constantly growing, we can currently state that it has more than 2,000 securities.
            `
        },
        bkr4:{
            odds:{
                ul:{
                    1:"STP License",
                    2:"Intuitive platform",
                    3:"Variety of state-of-the-art instruments"
                }
            },
            title:`${BKR4} - Offers an excellent platform, good commissions and acceptable profitability`,
            content:`
            The ${BKR4} platform is a platform with time in the market, which offers different environments, ${BKR4} is focused on the rule that says
             Since customer service is fundamental, ${BKR4} helps the customer focus on what is necessary. ${BKR4} allows the customer
             take control and take advantage of it.
            
             ${BKR4} is specifically designed for clients who value comfort, reliability, elegance and above all, attention.
             ${BKR4} believes that customer service and good effective communication allow us to achieve goals in the short and medium term that otherwise
             they would take much longer.
             ${BKR4} gives its users a good redemption time while allowing other users to interact on the platform and exchange
             different communication channels on the ${BKR4} platform.
            
             ${BKR4} allows you to access from any mobile or desktop device and be able to operate comfortably.
             ${BKR4} is designed for users who want to reach their full level and exploit it to the maximum of its limits.
             ${BKR4} is not designed for industry standard users who mimic the standards behavior model.
             ${BKR4} breaks molds and standards in terms of the instrumentation that ${BKR4} offers to different users.
             ${BKR4} has an excellent spread on fractional share value.
             ${BKR4} offers high leverage.
             ${BKR4} allows you to invest in an infinite number of values.
             ${BKR4} handles an immediate question and answer system so you don't have to wait for slow answers.
             ${BKR4} handles a wide variety of deposits and withdrawals.
             ${BKR4} allows you to earn loyalty points that can be exchanged for cash prizes.
             ${BKR4} has a long history in the market and plans to continue like this for a long time.
            `
        }
    },
    set:function(){
        document.querySelector(".select").value="en" 
        language.page.title=this.page.title 
        language.content.button=this.content.button 

        const lang=Object.keys(language)
        lang.map(x=>{
            const a=Object.keys(language[x])
            
             a.map(y=>{
                const b=Object.keys(language[x][y])
                if(b.length != 0)
                {
                    b.map(z=>{
                        language[x][y][z]=this[x][y][z]
                        
                    })
                } else {
                    language[x][y]=this[x][y]
                }
                
             })
             language.content.title=this.content.title
             language.page.prefooter=this.page.prefooter
             language.page.footer=this.page.footer
             language.page.policy=this.page.policy
             language.page.cookie=this.page.cookie
                 language.set()
        })

    }

}

const es={
    page:{
        title:`MyWalletInvest - 4 Mejores plataformas de tradeo - ${BKR4} - etoro - xtb - skilling`,
        prefooter:`Advertencia de riesgo: Invertir implica altos riesgos, incluido el riesgo de perder parte o la totalidad del monto invertido, y puede no ser adecuado para todos los inversores.

        Entre el 64% y el 80,5% de las cuentas de inversores minoristas pierden dinero invirtiendo con estos proveedor. Debe considerar si puede permitirse asumir el alto riesgo de perder dinero. Antes de tomar una decisión comercial, debe comprender completamente los riesgos y costos asociados con la inversión en los mercados financieros. 
        
        Los datos en este sitio web no siempre son precisos o en tiempo real. Ni nosotros ni ningún proveedor de datos contenidos en este sitio web seremos responsables de ninguna pérdida o daño de ningún tipo que surja de su inversión o confianza en la información contenida en este sitio web.
        
        Contacto: info@mywallet.network
        `,
        footer:'Intraprendere Srl - P.IVA 11820790017, Corso Tassoni 31/A, 10142 Torino - Italy',
        policy:'Politica de Privacidad',
        cookie:'Politica de uso de Cookies'
    },
    header:{title:'MyWalletInvest'},
    content:{
        title:'4 Plataformas robustas para invertir',
        button:'Visitar'
    },
    platform:{
        xtb:{
            odds:{
                ul:{
                    1:"Sin comisiones en acciones ni ETFs",
                    2:"Regulado por CNMV",
                    3:"5000 instrumentos para invertir"
                }
            },
            title:'XTB: Plataforma regulada con una trayectoria de más de dos décadas',
            content:`En nuestro listado de mejores plataformas de trading, no podríamos no incluir a XTB. Este es uno de los sitios más buscados por los inversores a nivel global. Esto se debe a un diverso número de razones, como la variedad de activos ofrecida. Este bróker cuenta con licencias para todos los mercados ofrecidos, entre los cuales podemos mencionar a las criptomonedas y las acciones. Fue fundado en 2002 y cuenta con bases en Varsovia y Londres. 
             
            Además de esto, el bróker tiene también un muy buen servicio de atención al cliente. Este no es solamente fácil de contactar, sino que también responde sin esperas y sin voces automáticas, por lo que cualquier inconveniente o duda se resuelve de manera casi instantánea. Esta es una de las razones principales por las cuales usuarios de todo el mundo valoran positivamente el bróker XTB. 
            `
        },
        skilling:{
            odds:{
                ul:{
                    1:"Posee una interfaz muy intuitiva.",
                    2:"Tecnología avanzada de trading.",
                    3:"Ofrece cursos y eventos para sus usuarios"
                }
            },
            title:'Skilling - Ofrece buenas condiciones en entornos robustos ',
            content:`
            La plataforma escandinava ofrece un tipo de inversión que se mueve al margen de las tendencias del mercado. Cuenta con más de 700 acciones y posee una estructura muy competitiva en donde aplica 0 de comisiones. Podrás operar de manera completamente segura, ya que se trata de una plataforma regulada, en donde la seguridad de tus fondos está garantizada.
            
            Skilling te permite operar las 24 horas del día, sin costes ni complicaciones. Sus spreads son muy competitivos con acciones fraccionadas. Esto no es todo, ya que ofrece un apalancamiento de 5:1. Esto es un gran punto a favor, ya que podrás disponer de una mayor cantidad de activos con el mismo dinero que utilizarías en cualquier otra plataforma.
            
            `
          
        },
        etoro:{
            odds:{
                ul:{
                    1:"Licencia Internacional CYSEC",
                    2:"Plataforma amigable y fácil de usar",
                    3:"Corredora altamente regulado"
                }
            },
            title:'ETORO, una buena plataforma confiable y eficaz',
            content:`
            eToro es sin duda alguna la mejor plataforma de trading en 2023. Este bróker es ideal para principiantes, pero también posee una interesante variedad de herramientas para usuarios más avanzados. La razón está en que la plataforma es muy sencilla de usar y permite realizar operaciones pequeñas. No obstante, aquellos usuarios más experimentados, encontrarán el sitio ideal para hacer sus operaciones con todas las herramientas a su alcance. La gran variedad de activos que posee la plataforma, la convierte en la elección más recurrente por parte de los usuarios de la region.
            
            Con un depósito mínimo de tan solo 200 USD, esta plataforma le permite operar a partir de 25 USD. eToro cuenta con una gran variedad de activos. Con estos montos, es posible invertir en una infinidad de valores, provenientes de los mercados más importantes del mundo, tales como Estados Unidos, Canadá, y Reino Unido. Si bien su oferta de activos se mantiene en constante crecimiento, actualmente podemos afirmar que dispone de más de 2.000 valores.
            `
        },
        bkr4:{
            odds:{
                ul:{
                    1:"Licencia STP",
                    2:"Plataforma intuitiva",
                    3:"Variedad de instrumentos de vanguardia"
                }
            },
            title:`${BKR4} - Ofrece una excelente plataforma, buenas comisiones y aceptable rentabilidad`,
            content:`
            La plataforma ${BKR4} es una plataforma con tiempo en el mercado, que ofrece diferentes entornos, ${BKR4} esta enfocada en la regla que dice
            que la atencion al cliente es fundamenteal, ${BKR4} ayuda a que el cliente se enfoque en lo necesario. ${BKR4} permite que el cliente
            tome el control y le saque partido.
            
            ${BKR4} esta disenado especificamente para clientes que valoren la comodidad, la confiabilidad, la elegancia y por ante todo, la atencion.
            ${BKR4} cree que la atencion al usuario y una buena comunicacion eficaz permiten alcanzar metas a un corto y mediano plazo que de otra manera 
            tomarian mucho mas tiempo.
            ${BKR4} da a sus usuarios un tiempo bueno de redencion al mismo tiempo que permite que otros usuarios interactuen en la plataforma e intercambien
            diferentes canales de comunicaciones en la plataforma ${BKR4}.
            
            ${BKR4} te permite acceder desde cualquier dispostivo mobil o de escritorio y poder operar con comodidad.
            ${BKR4} esta pensado para usuarios que quieran alcanzar todo su nivel y explotarlo al maximo de sus limites.
            ${BKR4} no esta disenado para usuarios estandares de la industria que imiten el modelo de comportamiento de los estandares.
            ${BKR4} rompe moldes y estandares en cuanto a la instrumentacion que ofrece ${BKR4} a los diferentes usuarios.
            ${BKR4} tiene un spread excelente en valor de accion fraccionada.
            ${BKR4} ofrece un alto apalancamiento.
            ${BKR4} permite invertir en infinidad de valores.
            ${BKR4} maneja un sistema de preguntas y respuestas inmediatas para que no tengas que esperar por respuestas lentas.
            ${BKR4} maneja una amplia variedad de depositos y retiros.
            ${BKR4} permite ganar puntos de fidelidad canjeables por premios en metalicos.
            ${BKR4} tiene una amplia trayectoria en el mercado y tiene previsto continuar asi por mucho tiempo mas.
            `
        }
    },
    set:function(){
        document.querySelector(".select").value="es" 
        language.page.title=this.page.title 
        language.content.button=this.content.button
        
        const lang=Object.keys(language)
        lang.map(x=>{
            const a=Object.keys(language[x])
            
             a.map(y=>{
                const b=Object.keys(language[x][y])
                if(b.length != 0)
                {
                    b.map(z=>{
                        language[x][y][z]=this[x][y][z]
                        
                    })
                } else {
                    language[x][y]=this[x][y]
                }
                
             })
             language.content.title=this.content.title
             language.page.prefooter=this.page.prefooter
             language.page.footer=this.page.footer        
             language.page.policy=this.page.policy
             language.page.cookie=this.page.cookie
                language.set()
        })


    }

}

const pt={
    page:{
        title:`MyWalletInvest - 4 Melhores Plataformas de Negociação - ${BKR4} - etoro - xtb - skilling`,
        prefooter:`Aviso de risco: Investir envolve altos riscos, incluindo o risco de perder parte ou todo o valor investido, e pode não ser adequado para todos os investidores.

        Entre 64% e 80,5% das contas de investidores de varejo perdem dinheiro investindo com esses provedores. Você deve considerar se pode correr o alto risco de perder dinheiro. Antes de tomar uma decisão de negociação, você deve entender completamente os riscos e custos associados ao investimento nos mercados financeiros.
       
        Os dados neste site nem sempre são precisos ou em tempo real. Nem nós nem qualquer provedor de dados contidos neste site seremos responsáveis ​​por qualquer perda ou dano de qualquer tipo decorrente de seu investimento ou confiança nas informações contidas neste site.
       
        Contato: info@mywallet.network
        `,
        footer:'Intraprendere Srl - P.IVA 11820790019, Corso Tassoni 31/A, 10143 Torino - Itália',
        policy:'Política de privacidade',
        cookie:'Política de uso de cookies'
    },
    header:{title:'MyWalletInvest'},
    content:{
        title:'4 plataformas robustas para investir',
        button:'Visita'
    },
    platform:{
        xtb:{
            odds:{
                ul:{
                    1:"Sem comissões sobre ações ou ETFs",
                    2:"Regulado pela CNMV",
                    3:"5000 instrumentos para investir"
                }
            },
            title:'XTB: plataforma regulamentada com mais de duas décadas de história',
            content:`Em nossa lista das melhores plataformas de negociação, não poderíamos deixar de incluir o XTB. Este é um dos sites mais procurados por investidores em todo o mundo. Isso ocorre por vários motivos, como a variedade de ativos oferecidos. Este corretor possui licenças para todos os mercados oferecidos, entre os quais podemos citar criptomoedas e ações. Foi fundada em 2002 e tem bases em Varsóvia e Londres.
            
            Além disso, o corretor também possui um atendimento ao cliente muito bom. Este não só é fácil de contactar, como também responde sem esperas e sem vozes automáticas, pelo que qualquer inconveniente ou questão é resolvido quase instantaneamente. Esta é uma das principais razões pelas quais os usuários de todo o mundo classificam o corretor XTB positivamente.   `
        },
        skilling:{
            odds:{
                ul:{
                    1:"Tem uma interface muito intuitiva.",
                    2:"Tecnologia de negociação avançada.",
                    3:"Oferece cursos e eventos para seus usuários"
                }
            },
            title:'Skilling - Oferece boas condições em ambientes robustos ',
            content:`
            A plataforma escandinava oferece um tipo de investimento que foge das tendências do mercado. Tem mais de 700 ações e tem uma estrutura muito competitiva onde se aplicam 0 comissões. Você poderá operar de forma totalmente segura, já que é uma plataforma regulamentada, onde a segurança de seus fundos é garantida.
            
            O Skilling permite operar 24 horas por dia, sem custos ou complicações. Seus spreads são muito competitivos com ações fracionárias. Isso não é tudo, pois oferece uma alavancagem de 5:1. Este é um grande ponto a favor, já que você poderá ter uma quantidade maior de ativos com o mesmo dinheiro que usaria em qualquer outra plataforma.
            `
          
        },
        etoro:{
            odds:{
                ul:{
                    1:"Licencia Internacional CYSEC",
                    2:"Plataforma amigável e fácil de usar",
                    3:"Corretor altamente regulamentado"
                }
            },
            title:'ETORO, uma boa plataforma confiável e eficaz',
            content:`
            eToro é sem dúvida a melhor plataforma de negociação em 2023. Esta corretora é ideal para iniciantes, mas também possui uma interessante variedade de ferramentas para usuários mais avançados. A razão é que a plataforma é muito fácil de usar e permite realizar pequenas operações. No entanto, os usuários mais experientes encontrarão o local ideal para realizar suas operações com todas as ferramentas à sua disposição. A grande variedade de ativos que a plataforma possui a torna a escolha mais recorrente pelos usuários da região.
            
             Com um depósito mínimo de apenas $ 200, esta plataforma permite que você negocie a partir de $ 25. eToro tem uma grande variedade de ativos. Com esses valores, é possível investir em uma infinidade de títulos, dos mercados mais importantes do mundo, como Estados Unidos, Canadá e Reino Unido. Embora sua oferta de ativos esteja em constante crescimento, atualmente podemos afirmar que possui mais de 2.000 títulos.
               `
        },
        bkr4:{
            odds:{
                ul:{
                    1:"Licença STP",
                    2:"Plataforma intuitiva",
                    3:"Variedade de instrumentos de última geração"
                }
            },
            title:`${BKR4} - Oferece uma excelente plataforma, boas comissões e rentabilidade aceitável`,
            content:`
            A plataforma ${BKR4} é uma plataforma com tempo no mercado, que oferece diversos ambientes, ${BKR4} é focada na regra que diz
            Como o atendimento ao cliente é fundamental, ${BKR4} ajuda o cliente a focar no que é necessário. ${BKR4} permite ao cliente
            assuma o controle e tire vantagem disso.
           
            ${BKR4} é projetado especificamente para clientes que valorizam conforto, confiabilidade, elegância e, acima de tudo, atenção.
            ${BKR4} acredita que o atendimento ao cliente e uma boa comunicação eficaz nos permitem alcançar objetivos de curto e médio prazo que de outra forma seriam
            eles levariam muito mais tempo.
            ${BKR4} dá a seus usuários um bom tempo de resgate enquanto permite que outros usuários interajam na plataforma e troquem
            diferentes canais de comunicação na plataforma ${BKR4}.
           
            ${BKR4} permite que você acesse de qualquer dispositivo móvel ou desktop e seja capaz de operar confortavelmente.
            ${BKR4} é projetado para usuários que desejam atingir seu nível máximo e explorá-lo ao máximo de seus limites.
            ${BKR4} não foi projetado para usuários padrão do setor que imitam o modelo de comportamento padrão.
            ${BKR4} quebra moldes e padrões em termos de instrumentação que ${BKR4} oferece a diferentes usuários.
            ${BKR4} tem um excelente spread no valor da ação fracionária.
            ${BKR4} oferece alta alavancagem.
            ${BKR4} permite que você invista em um número infinito de valores.
            ${BKR4} lida com um sistema de perguntas e respostas imediatas para que você não precise esperar por respostas lentas.
            ${BKR4} lida com uma ampla variedade de depósitos e saques.
            ${BKR4} permite que você ganhe pontos de fidelidade que podem ser trocados por prêmios em dinheiro.
            ${BKR4} tem uma longa história no mercado e planeja continuar assim por muito tempo.
            `
        }
    },
    set:function(){
        document.querySelector(".select").value="pt" 
        language.page.title=this.page.title 
        language.content.button=this.content.button
        
        const lang=Object.keys(language)
        lang.map(x=>{
            const a=Object.keys(language[x])
            
             a.map(y=>{
                const b=Object.keys(language[x][y])
                if(b.length != 0)
                {
                    b.map(z=>{
                        language[x][y][z]=this[x][y][z]
                        
                    })
                } else {
                    language[x][y]=this[x][y]
                }
                
             })
             language.content.title=this.content.title
             language.page.prefooter=this.page.prefooter
             language.page.footer=this.page.footer        
             language.page.policy=this.page.policy
             language.page.cookie=this.page.cookie
                language.set()
        })


    }

}

const fr={
    page:{
        title:`MyWalletInvest - 4 meilleures plateformes de trading - ${BKR4} - etoro - xtb - skilling`,
        prefooter:`
        Avertissement sur les risques : Investir comporte des risques élevés, y compris le risque de perdre une partie ou la totalité de votre montant investi, et peut ne pas convenir à tous les investisseurs.

        Entre 64 % et 80,5 % des comptes d'investisseurs particuliers perdent de l'argent en investissant auprès de ces fournisseurs. Vous devez vous demander si vous pouvez prendre le risque élevé de perdre de l'argent. Avant de prendre une décision de trading, vous devez bien comprendre les risques et les coûts associés à l'investissement sur les marchés financiers.
       
        Les données sur ce site ne sont pas toujours exactes ou en temps réel. Ni nous ni aucun fournisseur de données contenues sur ce site Web ne seront responsables de toute perte ou dommage de quelque nature que ce soit résultant de votre investissement ou de la confiance accordée aux informations contenues sur ce site Web.
       
        Contact : info@mywallet.network
        `,
        footer:'Intraprendere Srl - P.IVA 11820790017, Corso Tassoni 31/A, 10142 Torino - Italy',
        policy:'Politique de confidentialité',
        cookie:'Politique d\'utilisation des cookies'
    },
    header:{title:'MyWalletInvest'},
    content:{
        title:'4 plateformes robustes pour investir',
        button:'Visite'
    },
    platform:{
        xtb:{
            odds:{
                ul:{
                    1:"Aucune commission sur les actions ou les ETF",
                    2:"Réglementé par la CNMV",
                    3:"5000 instruments à investir"
                }
            },
            title:'XTB : plate-forme réglementée avec plus de deux décennies d\'histoire',
            content:`
            Dans notre liste des meilleures plateformes de trading, nous ne pouvions pas manquer d'inclure XTB. C'est l'un des sites les plus recherchés par les investisseurs du monde entier. Ceci pour plusieurs raisons telles que la variété des actifs proposés. Ce courtier dispose de licences pour tous les marchés proposés, parmi lesquels on peut citer les crypto-monnaies et les actions. Elle a été fondée en 2002 et possède des bases à Varsovie et à Londres.
              
             De plus, le courtier a également un très bon service client. Ce n'est pas seulement facile à contacter, mais il répond également sans attendre et sans voix automatiques, de sorte que tout inconvénient ou question est résolu presque instantanément. C'est l'une des principales raisons pour lesquelles les utilisateurs du monde entier évaluent positivement le courtier XTB.
              `
        },
        skilling:{
            odds:{
                ul:{
                    1:"Il a une interface très intuitive.",
                    2:"Technologie de négociation avancée.",
                    3:"Propose des cours et des événements à ses utilisateurs"
                }
            },
            title:'Skilling - Oferece boas condições em ambientes robustos ',
            content:`
            A plataforma escandinava oferece um tipo de investimento que foge das tendências do mercado. Tem mais de 700 ações e tem uma estrutura muito competitiva onde se aplicam 0 comissões. Você poderá operar de forma totalmente segura, já que é uma plataforma regulamentada, onde a segurança de seus fundos é garantida.
            
            O Skilling permite operar 24 horas por dia, sem custos ou complicações. Seus spreads são muito competitivos com ações fracionárias. Isso não é tudo, pois oferece uma alavancagem de 5:1. Este é um grande ponto a favor, já que você poderá ter uma quantidade maior de ativos com o mesmo dinheiro que usaria em qualquer outra plataforma.
            `
          
        },
        etoro:{
            odds:{
                ul:{
                    1:"Licence internationale CYSEC",
                    2:"Plateforme conviviale et facile à utiliser",
                    3:"Courtier hautement réglementé"
                }
            },
            title:'ETORO, une bonne plateforme fiable et efficace',
            content:`
            eToro est sans doute la meilleure plateforme de trading en 2023. Ce courtier est idéal pour les débutants mais dispose également d'une gamme intéressante d'outils pour les utilisateurs plus avancés. La raison en est que la plateforme est très facile à utiliser et vous permet d'effectuer de petites opérations. Cependant, les utilisateurs plus expérimentés trouveront l'endroit idéal pour effectuer leurs opérations avec tous les outils à leur disposition. La grande variété d'atouts dont dispose la plateforme en fait le choix le plus récurrent pour les utilisateurs de la région.
            
              Avec un dépôt minimum de seulement 200 $, cette plate-forme vous permet de négocier à partir de 25 $ seulement. eToro dispose d'une grande variété d'actifs. Avec ces valeurs, il est possible d'investir dans une multitude de titres, issus des marchés les plus importants au monde, comme les États-Unis, le Canada et le Royaume-Uni. Bien que son offre d'actifs ne cesse de croître, on peut actuellement affirmer qu'elle compte plus de 2 000 titres.
               `
        },
        bkr4:{
            odds:{
                ul:{
                    1:"Licence STP",
                    2:"plateforme intuitive",
                    3:"Variété d'instruments de pointe"
                }
            },
            title:`${BKR4} - Offre une excellente plateforme, de bonnes commissions et une rentabilité acceptable`,
            content:`
            La plateforme ${BKR4} est une plateforme qui est sur le marché depuis longtemps, offrant différents environnements, ${BKR4} se concentre sur la règle qui dit
            Parce que le service client est primordial, ${BKR4} aide le client à se concentrer sur ce dont il a besoin. ${BKR4} permet au client
            prenez le contrôle et profitez-en.
          
            ${BKR4} est spécialement conçu pour les clients qui apprécient le confort, la fiabilité, l'élégance et, surtout, l'attention.
            ${BKR4} estime que le service client et une bonne communication efficace nous permettent d'atteindre des objectifs à court et moyen terme qui seraient autrement
            ils prendraient beaucoup plus de temps.
            ${BKR4} offre à ses utilisateurs un bon délai d'échange tout en permettant aux autres utilisateurs d'interagir sur la plateforme et d'échanger
            différents canaux de communication sur la plateforme ${BKR4}.
          
            ${BKR4} vous permet d'y accéder depuis n'importe quel appareil mobile ou ordinateur de bureau et de pouvoir l'utiliser confortablement.
            ${BKR4} est conçu pour les utilisateurs qui souhaitent atteindre leur niveau maximum et l'explorer au maximum de ses limites.
            ${BKR4} n'est pas conçu pour les utilisateurs standard de l'industrie qui imitent le modèle de comportement standard.
            ${BKR4} brise les moules et les modèles en termes d'instrumentation que ${BKR4} offre aux différents utilisateurs.
            ${BKR4} a un excellent écart sur la valeur de la part fractionnaire.
            ${BKR4} offre un effet de levier élevé.
            ${BKR4} vous permet d'investir dans un nombre infini de valeurs.
            ${BKR4} gère un système de questions et de réponses immédiates afin que vous n'ayez pas à attendre des réponses lentes.
            ${BKR4} gère une grande variété de dépôts et de retraits.
            ${BKR4} vous permet de gagner des points de fidélité qui peuvent être échangés contre des prix en espèces.
            ${BKR4} a une longue histoire dans le secteur et prévoit de le conserver encore longtemps.
            `
        }
    },
    set:function(){
        document.querySelector(".select").value="fr" 
        language.page.title=this.page.title 
        language.content.button=this.content.button
        
        const lang=Object.keys(language)
        lang.map(x=>{
            const a=Object.keys(language[x])
            
             a.map(y=>{
                const b=Object.keys(language[x][y])
                if(b.length != 0)
                {
                    b.map(z=>{
                        language[x][y][z]=this[x][y][z]
                        
                    })
                } else {
                    language[x][y]=this[x][y]
                }
                
             })
             language.content.title=this.content.title
             language.page.prefooter=this.page.prefooter
             language.page.footer=this.page.footer        
             language.page.policy=this.page.policy
             language.page.cookie=this.page.cookie
                language.set()
        })


    }

}

const it={
    page:{
        title:'MyWalletInvest - 4 migliori piattaforme di trading - ${BKR4} - etoro - xtb - skilling',
        prefooter:`
        Avviso sui rischi: l'investimento comporta rischi elevati, incluso il rischio di perdere parte o tutto l'importo investito e potrebbe non essere adatto a tutti gli investitori.

         Tra il 64% e l'80,5% dei conti degli investitori al dettaglio perde denaro investendo con questi fornitori. Dovresti considerare se puoi permetterti di correre il rischio elevato di perdere denaro. Prima di prendere una decisione di trading, dovresti comprendere appieno i rischi e i costi associati all'investimento nei mercati finanziari.
       
         I dati su questo sito Web non sono sempre accurati o in tempo reale. Né noi né alcun fornitore di dati contenuti in questo sito Web saremo responsabili per eventuali perdite o danni di qualsiasi tipo derivanti dall'investimento o dall'affidamento fatto sulle informazioni contenute in questo sito Web.
       
         Contatto: info@mywallet.network
        `,
        footer:'Intraprendere Srl - P.IVA 11820790017, Corso Tassoni 31/A, 10142 Torino - Italy',
        policy:'Politica sulla riservatezza',
        cookie:'Informativa sull\'uso dei cookie'
    },
    header:{title:'MyWalletInvest'},
    content:{
        title:'4 piattaforme robuste su cui investire',
        button:'Visita'
    },
    platform:{
        xtb:{
            odds:{
                ul:{
                    1:"Nessuna commissione su azioni o ETF",
                    2:"Regolamentato da CNMV",
                    3:"5000 strumenti da investire"
                }
            },
            title:'XTB: piattaforma regolamentata con una storia di oltre due decenni',
            content:`
            Nella nostra lista delle migliori piattaforme di trading non potevamo non includere XTB. Questo è uno dei siti più ricercati dagli investitori a livello globale. Ciò è dovuto a una serie di motivi, come la varietà di risorse offerte. Questo broker dispone di licenze per tutti i mercati offerti, tra i quali possiamo citare criptovalute e azioni. È stata fondata nel 2002 e ha sedi a Varsavia e Londra.
              
             Oltre a questo, il broker ha anche un ottimo servizio clienti. Questo non è solo facile da contattare, ma risponde anche senza attese e senza voci automatiche, quindi qualsiasi inconveniente o domanda viene risolto quasi istantaneamente. Questo è uno dei motivi principali per cui gli utenti di tutto il mondo valutano positivamente il broker XTB.
            `
        },
        skilling:{
            odds:{
                ul:{
                    1:"Ha un'interfaccia molto intuitiva.",
                    2:"Tecnologia di trading avanzata.",
                    3:"Offre corsi ed eventi per i suoi utenti"
                }
            },
            title:'Skilling - Offre buone condizioni in ambienti robusti ',
            content:`
            La piattaforma scandinava offre un tipo di investimento che si muove al di fuori delle tendenze del mercato. Ha più di 700 azioni e ha una struttura molto competitiva dove si applicano 0 commissioni. Potrai operare in modo completamente sicuro, trattandosi di una piattaforma regolamentata, dove la sicurezza dei tuoi fondi è garantita.
            
              Skilling ti permette di operare 24 ore su 24, senza costi o complicazioni. I loro spread sono molto competitivi con le quote frazionarie. Questo non è tutto, poiché offre una leva di 5:1. Questo è un ottimo punto a favore, dato che potrai avere una quantità maggiore di asset con gli stessi soldi che useresti su qualsiasi altra piattaforma.
             `
          
        },
        etoro:{
            odds:{
                ul:{
                    1:"Licenza internazionale CYSEC",
                    2:"Piattaforma amichevole e facile da usare",
                    3:"Broker altamente regolamentato"
                }
            },
            title:'ETORO, una buona piattaforma affidabile ed efficace',
            content:`
            eToro è senza dubbio la migliore piattaforma di trading nel 2023. Questo broker è ideale per i principianti, ma ha anche un'interessante varietà di strumenti per gli utenti più avanzati. Il motivo è che la piattaforma è molto facile da usare e permette di effettuare piccole operazioni. Tuttavia, gli utenti più esperti troveranno il sito ideale per svolgere le loro operazioni con tutti gli strumenti a loro disposizione. La grande varietà di risorse di cui dispone la piattaforma la rende la scelta più ricorrente da parte degli utenti della regione.
            
             Con un deposito minimo di soli $ 200, questa piattaforma ti consente di fare trading a partire da $ 25. eToro ha un'ampia varietà di asset. Con queste cifre è possibile investire in un numero infinito di titoli, provenienti dai mercati più importanti del mondo, come Stati Uniti, Canada e Regno Unito. Sebbene la sua offerta di asset sia in costante crescita, possiamo attualmente affermare che dispone di oltre 2.000 titoli.
                  `
        },
        bkr4:{
            odds:{
                ul:{
                    1:"Licenza STP",
                    2:"Piattaforma intuitiva",
                    3:"Varietà di strumenti all'avanguardia"
                }
            },
            title:`${BKR4} - Offre una piattaforma eccellente, buone commissioni e una redditività accettabile`,
            content:`
            La piattaforma ${BKR4} è una piattaforma con tempo sul mercato, che offre diversi ambienti, ${BKR4} si concentra sulla regola che dice
            Poiché il servizio clienti è fondamentale, ${BKR4} aiuta il cliente a concentrarsi su ciò che è necessario. ${BKR4} consente al cliente
            prendere il controllo e approfittarne.
          
            ${BKR4} è specificamente progettato per i clienti che apprezzano il comfort, l'affidabilità, l'eleganza e soprattutto l'attenzione.
            ${BKR4} ritiene che il servizio clienti e una buona comunicazione efficace ci consentano di raggiungere obiettivi a breve e medio termine che altrimenti
            impiegherebbero molto più tempo.
            ${BKR4} offre ai suoi utenti un buon tempo di riscatto consentendo allo stesso tempo ad altri utenti di interagire sulla piattaforma e scambiare
            diversi canali di comunicazione sulla piattaforma ${BKR4}.
          
            ${BKR4} ti consente di accedere da qualsiasi dispositivo mobile o desktop e di poter operare comodamente.
            ${BKR4} è progettato per gli utenti che vogliono raggiungere il loro livello completo e sfruttarlo al massimo dei suoi limiti.
            ${BKR4} non è progettato per gli utenti standard del settore che imitano il modello di comportamento degli standard.
            ${BKR4} rompe gli schemi e gli standard in termini di strumentazione che ${BKR4} offre a diversi utenti.
            ${BKR4} ha un eccellente spread sul valore della quota frazionaria.
            ${BKR4} offre una leva elevata.
            ${BKR4} ti permette di investire in un numero infinito di valori.
            ${BKR4} gestisce un sistema di domande e risposte immediate in modo da non dover attendere risposte lente.
            ${BKR4} gestisce un'ampia varietà di depositi e prelievi.
            ${BKR4} ti permette di guadagnare punti fedeltà che possono essere scambiati con premi in denaro.
            ${BKR4} ha una lunga storia nel mercato e prevede di continuare così per molto tempo.
            `
        }
    },
    set:function(){
        document.querySelector(".select").value="it" 
        language.page.title=this.page.title 
        language.content.button=this.content.button 

        const lang=Object.keys(language)
        lang.map(x=>{
            const a=Object.keys(language[x])
            
             a.map(y=>{
                const b=Object.keys(language[x][y])
                if(b.length != 0)
                {
                    b.map(z=>{
                        language[x][y][z]=this[x][y][z]
                        
                    })
                } else {
                    language[x][y]=this[x][y]
                }
                
             })
             language.content.title=this.content.title
             language.page.prefooter=this.page.prefooter
             language.page.footer=this.page.footer
             language.page.policy=this.page.policy
             language.page.cookie=this.page.cookie
                 language.set()
        })

    }

}
const de={
    page:{
        title:'MyWalletInvest - Die 4 besten Handelsplattformen - ${BKR4} - etoro - xtb - skilling',
        prefooter:`
        Risikowarnung: Die Anlage ist mit hohen Risiken verbunden, einschließlich des Risikos, einen Teil oder den gesamten investierten Betrag zu verlieren, und ist möglicherweise nicht für alle Anleger geeignet.

         Zwischen 64 % und 80,5 % der Privatanlegerkonten verlieren Geld, wenn sie bei diesen Anbietern investieren. Sie sollten überlegen, ob Sie es sich leisten können, das hohe Risiko einzugehen, Geld zu verlieren. Bevor Sie eine Handelsentscheidung treffen, sollten Sie die Risiken und Kosten, die mit einer Investition in die Finanzmärkte verbunden sind, vollständig verstehen.
       
         Die Daten auf dieser Website sind nicht immer genau oder in Echtzeit. Weder wir noch irgendein Anbieter von auf dieser Website enthaltenen Daten haften für Verluste oder Schäden jeglicher Art, die sich aus Ihrer Investition in oder Ihrem Vertrauen auf die auf dieser Website enthaltenen Informationen ergeben.
       
         Kontakt: info@mywallet.network
        `,
        footer:'Intraprendere Srl - P.IVA 11820790017, Corso Tassoni 31/A, 10142 Torino - Italy',
        policy:'Datenschutz-Bestimmungen',
        cookie:'Richtlinien zur Verwendung von Cookies'
    },
    header:{title:'MyWalletInvest'},
    content:{
        title:'4 robuste Plattformen zum Investieren',
        button:'Besuchen'
    },
    platform:{
        xtb:{
            odds:{
                ul:{
                    1:"Keine Provisionen auf Aktien oder ETFs",
                    2:"Reguliert durch CNMV",
                    3:"5000 Instrumente zum Investieren"
                }
            },
            title:'XTB: Regulierte Plattform mit einer Geschichte von mehr als zwei Jahrzehnten',
            content:`
            In unsere Liste der besten Handelsplattformen konnten wir XTB nicht aufnehmen. Dies ist eine der begehrtesten Seiten von Investoren weltweit. Dies hat eine Reihe von Gründen, wie zum Beispiel die Vielfalt der angebotenen Vermögenswerte. Dieser Broker verfügt über Lizenzen für alle angebotenen Märkte, unter denen wir Kryptowährungen und Aktien erwähnen können. Es wurde 2002 gegründet und hat Niederlassungen in Warschau und London.
              
             Darüber hinaus hat der Broker auch einen sehr guten Kundenservice. Dieser ist nicht nur einfach zu kontaktieren, sondern antwortet auch ohne Wartezeit und ohne automatische Stimmen, sodass alle Unannehmlichkeiten oder Fragen fast sofort gelöst werden. Dies ist einer der Hauptgründe, warum Benutzer aus aller Welt den XTB-Broker positiv bewerten.
            `
        },
        skilling:{
            odds:{
                ul:{
                    1:"Es hat eine sehr intuitive Benutzeroberfläche.",
                    2:"Fortschrittliche Handelstechnologie.",
                    3:"Bietet Kurse und Veranstaltungen für seine Benutzer an"
                }
            },
            title:'Skilling - Bietet gute Bedingungen in robuster Umgebung ',
            content:`
            Die skandinavische Plattform bietet eine Anlageform, die sich außerhalb von Markttrends bewegt. Es hat mehr als 700 Aktien und eine sehr wettbewerbsfähige Struktur, bei der 0 Provisionen anfallen. Sie können absolut sicher arbeiten, da es sich um eine regulierte Plattform handelt, auf der die Sicherheit Ihrer Gelder garantiert ist.
            
              Skilling ermöglicht Ihnen einen 24-Stunden-Betrieb ohne Kosten und Komplikationen. Ihre Spreads sind mit Teilaktien sehr wettbewerbsfähig. Das ist noch nicht alles, da es einen Hebel von 5:1 bietet. Dies ist ein großer Vorteil, da Sie mit dem gleichen Geld, das Sie auf jeder anderen Plattform verwenden würden, eine größere Menge an Vermögenswerten haben können.
                   `
          
        },
        etoro:{
            odds:{
                ul:{
                    1:"Internationale CYSEC-Lizenz",
                    2:"Freundliche und einfach zu bedienende Plattform",
                    3:"Stark regulierter Broker"
                }
            },
            title:'ETORO, eine gute zuverlässige und effektive Plattform',
            content:`
            eToro ist ohne Zweifel die beste Handelsplattform im Jahr 2023. Dieser Broker ist ideal für Anfänger, hat aber auch eine interessante Vielfalt an Tools für fortgeschrittene Benutzer. Der Grund dafür ist, dass die Plattform sehr einfach zu bedienen ist und es Ihnen ermöglicht, kleine Operationen durchzuführen. Diese erfahreneren Benutzer werden jedoch den idealen Standort finden, um ihre Operationen mit allen ihnen zur Verfügung stehenden Tools durchzuführen. Die große Vielfalt an Assets, über die die Plattform verfügt, macht sie zur häufigsten Wahl für Benutzer in der Region.
            
             Mit einer Mindesteinzahlung von nur 200 $ können Sie auf dieser Plattform bereits ab 25 $ handeln. eToro hat eine große Auswahl an Vermögenswerten. Mit diesen Beträgen ist es möglich, in unendlich viele Wertpapiere aus den wichtigsten Märkten der Welt, wie den Vereinigten Staaten, Kanada und dem Vereinigten Königreich, zu investieren. Obwohl ihr Angebot an Vermögenswerten ständig wächst, können wir derzeit feststellen, dass sie über mehr als 2.000 Wertpapiere verfügt.
               `
        },
        bkr4:{
            odds:{
                ul:{
                    1:"STP-Lizenz",
                    2:"Intuitive Plattform",
                    3:"Vielzahl an hochmodernen Instrumenten"
                }
            },
            title:`${BKR4} - Bietet eine hervorragende Plattform, gute Provisionen und eine akzeptable Rentabilität`,
            content:`
            Die ${BKR4}-Plattform ist eine Plattform mit Zeit auf dem Markt, die verschiedene Umgebungen anbietet, ${BKR4} konzentriert sich auf die Regel, die besagt
              Da Kundenservice von grundlegender Bedeutung ist, hilft ${BKR4} dem Kunden, sich auf das Wesentliche zu konzentrieren. ${BKR4} erlaubt dem Kunden
              Übernimm die Kontrolle und nutze sie aus.
            
              ${BKR4} wurde speziell für Kunden entwickelt, die Wert auf Komfort, Zuverlässigkeit, Eleganz und vor allem Aufmerksamkeit legen.
              ${BKR4} glaubt, dass Kundenservice und gute, effektive Kommunikation es uns ermöglichen, kurz- und mittelfristig Ziele zu erreichen, die wir sonst erreichen
              sie würden viel länger brauchen.
              ${BKR4} gibt seinen Benutzern eine gute Einlösezeit, während andere Benutzer auf der Plattform interagieren und sich austauschen können
              verschiedene Kommunikationskanäle auf der ${BKR4}-Plattform.
            
              Mit ${BKR4} können Sie von jedem Mobil- oder Desktop-Gerät aus zugreifen und bequem arbeiten.
              ${BKR4} ist für Benutzer gedacht, die ihr volles Niveau erreichen und es bis zum Maximum seiner Grenzen ausnutzen möchten.
              ${BKR4} ist nicht für branchenübliche Benutzer gedacht, die das Verhaltensmodell der Standards nachahmen.
              ${BKR4} bricht Formen und Standards in Bezug auf die Instrumentierung, die ${BKR4} verschiedenen Benutzern bietet.
              ${BKR4} hat eine hervorragende Streuung auf den Bruchteil des Aktienwerts.
              ${BKR4} bietet eine hohe Hebelwirkung.
              Mit ${BKR4} können Sie in unendlich viele Werte investieren.
              ${BKR4} verwaltet ein sofortiges Frage-Antwort-System, sodass Sie nicht auf langsame Antworten warten müssen.
              ${BKR4} verarbeitet eine Vielzahl von Ein- und Auszahlungen.
              Mit ${BKR4} können Sie Treuepunkte sammeln, die gegen Geldpreise eingetauscht werden können.
              ${BKR4} hat eine lange Geschichte auf dem Markt und plant, dies noch lange fortzusetzen.
            `
        }
    },
    set:function(){
        document.querySelector(".select").value="de" 
        language.page.title=this.page.title 
        language.content.button=this.content.button 

        const lang=Object.keys(language)
        lang.map(x=>{
            const a=Object.keys(language[x])
            
             a.map(y=>{
                const b=Object.keys(language[x][y])
                if(b.length != 0)
                {
                    b.map(z=>{
                        language[x][y][z]=this[x][y][z]
                        
                    })
                } else {
                    language[x][y]=this[x][y]
                }
                
             })
             language.content.title=this.content.title
             language.page.prefooter=this.page.prefooter
             language.page.footer=this.page.footer
             language.page.policy=this.page.policy
             language.page.cookie=this.page.cookie
                 language.set()
        })

    }

}


const go=function(){
    let redirect;
    switch(this.id){
        case "xtb":
            redirect="https://latam.xtb.com/cmg-one-stop-shop?cxd=42444_874266&affid=42444&utm_source=affiliate&utm_medium=Landing%20page&utm_campaign=42444&utm_content=LP%20LATAM%20Conor%20Mcgregore&utm_term=LATAM"
            break
        case "skilling":
            redirect="https://tradingplatforms.com/visit/skilling?affilcod=384173HA8392A"
            break
        case "etoro":
            redirect="https://www.etoro.com/?dl=30001923&utm_medium=Affiliate&utm_source=81931&utm_content=0&utm_serial=tradingplatformsetoro__fx_b5248_729e3e19e7d6a6fee4a44c3e30f859fe_1&utm_campaign=tradingplatformsetoroCL__fx_b5248_729e3e19e7d6a6fee4a44c3e30f859fe_1&utm_term=&from_lp=whiteLP"
            break
        case "bkr4":
            redirect=`${BKR4}`
            break;
        default:
            redirect=""
            break;
    }
    window.open(redirect,"_blank")
}
 

const createWin=function(content){

    if(content==undefined)
        content=document.createElement("span")

    if(document.querySelector(".page")==null){
        body.style.opacity=0.05
        const page=document.createElement("div")
        page.className="page"
    
        const close=document.createElement("p")
        close.innerText="X"
        close.className="close"
        close.addEventListener("click",function(){
    
            
        document.querySelector("body").style["background-color"]="" 
        document.querySelector(".warning").style.color=""
        body.style.color=""
        body.style["background-color"]="" 
        document.querySelector(".privacy").style["background-color"]="" 
        document.querySelector(".privacy").style.color=""
        this.parentElement.remove()
        body.style.opacity=2
        })
        
        page.append(close,content)
        document.querySelector("body").style["background-color"]="rgba(0, 0, 0, 0.486)" 
        document.querySelector(".warning").style.color="gray"
        body.style.color="gray"
        body.style["background-color"]="rgba(0, 0, 0, 0.486)" 
        document.querySelector(".privacy").style["background-color"]="rgba(0, 0, 0, 0)" 
        document.querySelector(".privacy").style.color="gray"
    
        const button=document.createElement("button")
        button.innerText="close"
        button.className="closed"
        button.addEventListener('click',function(){
            document.querySelector("body").style["background-color"]="" 
            document.querySelector(".warning").style.color=""
            body.style.color=""
            body.style["background-color"]="" 
            document.querySelector(".privacy").style["background-color"]="" 
            document.querySelector(".privacy").style.color=""
            this.parentElement.parentElement.remove()
            body.style.opacity=2
    })

        content.append(button)
        page.addEventListener('click',function(e){
            e.stopPropagation()
        })
        body.before(page)
        
        }

}

const policy_=function(ev){
    ev.stopPropagation()
    const policy_description=document.createElement("p")
        policy_description.className="policy_description"
        policy_description.innerHTML=`

        <h1>Privacy Policy</h1>
<p>Last updated: April 01, 2023</p>
<p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
<p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
<h1>Interpretation and Definitions</h1>
<h2>Interpretation</h2>
<p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
<h2>Definitions</h2>
<p>For the purposes of this Privacy Policy:</p>
<ul>
<li>
<p><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</p>
</li>
<li>
<p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
</li>
<li>
<p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to MyWalletInvest.</p>
</li>
<li>
<p><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>
</li>
<li>
<p><strong>Country</strong> refers to:  Italy</p>
</li>
<li>
<p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
</li>
<li>
<p><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p>
</li>
<li>
<p><strong>Service</strong> refers to the Website.</p>
</li>
<li>
<p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>
</li>
<li>
<p><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
</li>
<li>
<p><strong>Website</strong> refers to MyWalletInvest, accessible from <a href="mywallet.network" rel="external nofollow noopener" target="_blank">mywallet.network</a></p>
</li>
<li>
<p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
</li>
</ul>
<h1>Collecting and Using Your Personal Data</h1>
<h2>Types of Data Collected</h2>
<h3>Personal Data</h3>
<p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
<ul>
<li>
<p>Email address</p>
</li>
<li>
<p>First name and last name</p>
</li>
<li>
<p>Phone number</p>
</li>
<li>
<p>Usage Data</p>
</li>
</ul>
<h3>Usage Data</h3>
<p>Usage Data is collected automatically when using the Service.</p>
<p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
<p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
<p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
<h3>Tracking Technologies and Cookies</h3>
<p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
<ul>
<li><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</li>
<li><strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</li>
</ul>

<p>We use both Session and Persistent Cookies for the purposes set out below:</p>
<ul>
<li>
<p><strong>Necessary / Essential Cookies</strong></p>
<p>Type: Session Cookies</p>
<p>Administered by: Us</p>
<p>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
</li>
<li>
<p><strong>Cookies Policy / Notice Acceptance Cookies</strong></p>
<p>Type: Persistent Cookies</p>
<p>Administered by: Us</p>
<p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
</li>
<li>
<p><strong>Functionality Cookies</strong></p>
<p>Type: Persistent Cookies</p>
<p>Administered by: Us</p>
<p>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
</li>
</ul>
<p>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.</p>
<h2>Use of Your Personal Data</h2>
<p>The Company may use Personal Data for the following purposes:</p>
<ul>
<li>
<p><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</p>
</li>
<li>
<p><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>
</li>
<li>
<p><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>
</li>
<li>
<p><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
</li>
<li>
<p><strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</p>
</li>
<li>
<p><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</p>
</li>
<li>
<p><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</p>
</li>
<li>
<p><strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>
</li>
</ul>
<p>We may share Your personal information in the following situations:</p>
<ul>
<li><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service,  to contact You.</li>
<li><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
<li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
<li><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
<li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
<li><strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with Your consent.</li>
</ul>
<h2>Retention of Your Personal Data</h2>
<p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
<p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
<h2>Transfer of Your Personal Data</h2>
<p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
<p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
<p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
<h2>Delete Your Personal Data</h2>
<p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
<p>Our Service may give You the ability to delete certain information about You from within the Service.</p>
<p>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.</p>
<p>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>
<h2>Disclosure of Your Personal Data</h2>
<h3>Business Transactions</h3>
<p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
<h3>Law enforcement</h3>
<p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
<h3>Other legal requirements</h3>
<p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
<ul>
<li>Comply with a legal obligation</li>
<li>Protect and defend the rights or property of the Company</li>
<li>Prevent or investigate possible wrongdoing in connection with the Service</li>
<li>Protect the personal safety of Users of the Service or the public</li>
<li>Protect against legal liability</li>
</ul>
<h2>Security of Your Personal Data</h2>
<p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
<h1>Children's Privacy</h1>
<p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
<p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>
<h1>Links to Other Websites</h1>
<p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
<p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
<h1>Changes to this Privacy Policy</h1>
<p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
<p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>
<p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
<h1>Contact Us</h1>
<p>If you have any questions about this Privacy Policy, You can contact us:</p>
<ul>
<li>By email: info@mywallet.network</li>
</ul>
    
        `

  createWin(policy_description)
}

const cookie_policy=function(ev){
    ev.stopPropagation()


    const policy_description=document.createElement("p")
    policy_description.className="policy_description"
    policy_description.innerHTML=`<h1>Cookie Policy for MyWalletInvest</h1>

    <p>This is the Cookie Policy for MyWalletInvest, accessible from mywallet.network</p>
    
    <p><strong>What Are Cookies</strong></p>
    
    <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>
    
    <p><strong>How We Use Cookies</strong></p>
    
    <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
    
    <p><strong>Disabling Cookies</strong></p>
    
    <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.</p>
    <p><strong>The Cookies We Set</strong></p>
    
    <ul>
    
    
    
    
    
    
    <li>
        <p>Forms related cookies</p>
        <p>When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.</p>
    </li>
    
    
    </ul>
    
    <p><strong>Third Party Cookies</strong></p>
    
    <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>
    
    <ul>
    
    
    
    
    
    
    
    
    
    
    </ul>
    
    <p><strong>More Information</strong></p>
    
    <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>
       
    <p>However if you are still looking for more information then you can contact us through one of our preferred contact methods:</p>
    
    <ul>
    <li>Email: info@mywallet.network</li>
    
    </ul>
    `

    

    createWin(policy_description)

}

document.querySelector("html").addEventListener("click",function(ev){

    
    const page=document.querySelector(".page")
    console.log(this)
    if(page!=null) 
    {
        document.querySelector("body").style["background-color"]="" 
        document.querySelector(".warning").style.color=""
        body.style.color=""
        body.style["background-color"]="" 
        document.querySelector(".privacy").style["background-color"]="" 
        document.querySelector(".privacy").style.color=""
        body.style.opacity=2
        page.remove()
    }
 
 

     
})