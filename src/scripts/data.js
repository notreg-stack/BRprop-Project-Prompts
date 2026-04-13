export const cropLabels = {
  soybean: { zh: "大豆", pt: "Soja" },
  corn: { zh: "玉米", pt: "Milho" },
  cotton: { zh: "棉花", pt: "Algodão" },
  mixed: { zh: "多作物轮作", pt: "Rotação de culturas" }
};

export const articleCategoryLabels = {
  legal: { zh: "法规与交易", pt: "Jurídico e transação" },
  diligence: { zh: "尽调与文件", pt: "Due diligence e documentos" },
  agriculture: { zh: "农业与产区", pt: "Agricultura e regiões" },
  innovation: { zh: "数字化与创新", pt: "Digitalização e inovação" }
};

export const properties = [
  {
    slug: "mato-grosso-soy-corridor",
    title: {
      zh: "马托格罗索大豆物流走廊农场",
      pt: "Fazenda corredor de soja em Mato Grosso"
    },
    summary: {
      zh: "面向中国买家的大型粮食资产示例，重点是大豆主作、二茬玉米和成熟物流半径。",
      pt: "Exemplo de ativo de grãos para comprador institucional, com foco em soja, milho de segunda safra e logística consolidada."
    },
    location: {
      zh: "索里索，马托格罗索州",
      pt: "Sorriso, Mato Grosso"
    },
    areaHectares: 12800,
    crops: ["soybean", "corn"],
    status: { zh: "示例资产", pt: "Ativo de referência" },
    image: "/assets/images/farm-overview.svg",
    highlights: [
      {
        zh: "距主要仓储和压榨通道约 120 公里，适合出口链沟通。",
        pt: "Raio logístico aproximado de 120 km até armazenagem e corredores de escoamento."
      },
      {
        zh: "近三季以大豆-玉米轮作模型为主，适合对冲单一作物风险。",
        pt: "Histórico recente concentrado no sistema soja-milho, útil para diversificação operacional."
      },
      {
        zh: "适合先做法律与环境尽调，再进入估值和结构设计。",
        pt: "Ideal para pré-filtro com diligência fundiária, ambiental e avaliação antes da estruturação."
      }
    ],
    diligence: [
      {
        zh: "核查 matrícula、链条登记、CCIR、CAR、环境限制和占有历史。",
        pt: "Revisar matrícula, cadeia dominial, CCIR, CAR, restrições ambientais e histórico possessório."
      },
      {
        zh: "确认地籍、测绘和生产面积与卖方披露一致。",
        pt: "Confirmar cadastro, georreferenciamento e área produtiva versus o material comercial."
      }
    ]
  },
  {
    slug: "bahia-cotton-platform",
    title: {
      zh: "巴伊亚棉花平台资产",
      pt: "Plataforma algodoeira no oeste da Bahia"
    },
    summary: {
      zh: "适合研究棉花与大豆组合、MATOPIBA 扩张逻辑以及长线土地升值预期。",
      pt: "Ativo ilustrativo para estudar combinação de algodão e soja no MATOPIBA e tese de valorização fundiária."
    },
    location: {
      zh: "路易斯爱德华多马加良斯，巴伊亚州",
      pt: "Luís Eduardo Magalhães, Bahia"
    },
    areaHectares: 9100,
    crops: ["cotton", "soybean"],
    status: { zh: "尽调优先", pt: "Prioridade de diligência" },
    image: "/assets/images/cotton-belt.svg",
    highlights: [
      {
        zh: "适合关注棉花单产、仓储能力和多港口出口选择。",
        pt: "Foco em produtividade do algodão, capacidade de armazenagem e alternativas logísticas."
      },
      {
        zh: "MATOPIBA 区域对规模化管理和品种选择要求更高。",
        pt: "A região demanda disciplina agronômica e gestão operacional mais sofisticada."
      }
    ],
    diligence: [
      {
        zh: "重点复核水资源许可、道路接入和仓储合同。",
        pt: "Checar licenças de uso hídrico, acesso viário e contratos de armazenagem."
      },
      {
        zh: "明确可持续要求与供应链合规期望。",
        pt: "Mapear exigências ESG e expectativas de compliance da cadeia compradora."
      }
    ]
  },
  {
    slug: "goias-mixed-grains-hub",
    title: {
      zh: "戈亚斯多作物枢纽农场",
      pt: "Hub de grãos mistos em Goiás"
    },
    summary: {
      zh: "针对希望理解巴西中部供应链与玉米消费市场的投资者。",
      pt: "Estrutura de referência para quem busca exposição a grãos no Centro-Oeste com demanda doméstica forte."
    },
    location: {
      zh: "里奥韦尔德，戈亚斯州",
      pt: "Rio Verde, Goiás"
    },
    areaHectares: 6400,
    crops: ["soybean", "corn", "mixed"],
    status: { zh: "运营型机会", pt: "Oportunidade operacional" },
    image: "/assets/images/grain-hub.svg",
    highlights: [
      {
        zh: "适合把出口思路和国内消费思路一起评估。",
        pt: "Permite comparar tese de exportação com demanda doméstica por milho."
      },
      {
        zh: "对中国买家而言，便于学习巴西中部的二茬节奏。",
        pt: "Ajuda o comprador a entender a lógica da segunda safra no Centro-Oeste."
      }
    ],
    diligence: [
      {
        zh: "复核租赁合同、生产历史和农机结构是否可转移。",
        pt: "Revisar contratos operacionais, histórico produtivo e estrutura mecanizada transferível."
      }
    ]
  },
  {
    slug: "mato-grosso-do-sul-integration",
    title: {
      zh: "南马托格罗索农产整合资产",
      pt: "Ativo integrado em Mato Grosso do Sul"
    },
    summary: {
      zh: "适合评估土地、仓储、运输和近边境通道的组合价值。",
      pt: "Caso de estudo para avaliar valor combinado de terra, armazenagem e corredores logísticos."
    },
    location: {
      zh: "马拉卡茹，南马托格罗索州",
      pt: "Maracaju, Mato Grosso do Sul"
    },
    areaHectares: 7700,
    crops: ["soybean", "corn"],
    status: { zh: "组合评估", pt: "Avaliação integrada" },
    image: "/assets/images/farm-overview.svg",
    highlights: [
      {
        zh: "适合研究土地产权和运营协同的双重价值。",
        pt: "Útil para estudar valor fundiário somado à operação e à armazenagem."
      }
    ],
    diligence: [
      {
        zh: "确认边境、运输和出口合规路径与买方结构匹配。",
        pt: "Validar rotas regulatórias, transporte e aderência da estrutura compradora."
      }
    ]
  }
];

export const articles = [
  {
    slug: "foreign-acquisition-rural-land",
    category: "legal",
    readTime: 10,
    title: {
      zh: "外国资本进入巴西农村不动产：规则、限制与交易路径",
      pt: "Capital estrangeiro em terra rural no Brasil: regras, limites e caminho de execução"
    },
    summary: {
      zh: "给中国买家的实务导读：先区分城市与农村，再核对买方结构、面积、地区限制、Incra 路径与尽调顺序。",
      pt: "Guia prático para o comprador estrangeiro: primeiro separar urbano e rural; depois validar estrutura, área, localização, Incra e diligência."
    },
    sections: [
      {
        heading: {
          zh: "先把城市不动产和农村不动产分开",
          pt: "Primeiro distinga imóvel urbano de imóvel rural"
        },
        paragraphs: [
          {
            zh: "在巴西，外国人购买城市不动产通常比购买农村不动产简单得多。农村土地或农村不动产的取得与租赁，仍要结合《联邦宪法》第 190 条、《第 5.709/1971 号法》、《第 74.965/1974 号法令》以及 Incra 的操作规则来判断。",
            pt: "No Brasil, a compra de imóvel urbano por estrangeiro costuma ser bem mais simples do que a aquisição ou o arrendamento de imóvel rural. Em terra rural, a análise ainda parte da Constituição Federal, da Lei 5.709/1971, do Decreto 74.965/1974 e da regulação operacional do Incra."
          },
          {
            zh: "因此，卖方资料里的“可以卖给外国人”不能当作结论。农村项目里，关键问题不只是买方国籍，还包括面积大小、是否位于边境带、买方是个人还是公司、最终控制结构，以及交易的农业用途或资产配置目的。",
            pt: "Por isso, não basta repetir que o comprador é estrangeiro ou que existe uma empresa brasileira no grupo. Em imóvel rural, entram na conta a área, a localização, a finalidade declarada da operação e a estrutura de controle do comprador."
          }
        ],
        bullets: [
          {
            zh: "城市交易和农村交易适用的路径并不相同。",
            pt: "Urbano e rural não devem ser tratados como a mesma operação."
          },
          {
            zh: "在农村项目里，面积、地点和买方结构都会改变交易路径。",
            pt: "Em terra rural, área, localização e estrutura do comprador mudam o rito da operação."
          }
        ]
      },
      {
        heading: {
          zh: "并不是所有巴西公司都自动脱离限制",
          pt: "Nem toda sociedade brasileira fica fora das restrições"
        },
        paragraphs: [
          {
            zh: "AGU 的 LA-01/2010 号意见恢复了一个重要理解：某些由外国资本控制的巴西公司，在农村不动产问题上也可能落入《第 5.709/1971 号法》的限制框架。换句话说，在巴西开公司本身，并不能自动消除农村土地规则。",
            pt: "O Parecer AGU LA-01/2010 retomou o entendimento de que certas pessoas jurídicas brasileiras controladas por capital estrangeiro também podem ser alcançadas pelo regime da Lei 5.709/1971. Em linguagem prática, abrir empresa no Brasil não resolve, por si só, a análise da aquisição rural."
          },
          {
            zh: "同样，也不应笼统地说“任何不在巴西居住的外国人都能自由购买农村土地”。在进入报价、定金或排他谈判之前，应由本地律师、公证处或公证员，以及在需要时由 Incra 一起确认适用结构。",
            pt: "Também não é prudente afirmar, de forma ampla, que qualquer estrangeiro não residente pode comprar terra rural livremente. Antes de oferta vinculante, sinal ou exclusividade, a estrutura aplicável deve ser revisada caso a caso com advogado local, notário/tabelião e, quando cabível, Incra."
          }
        ],
        bullets: [
          {
            zh: "由外国资本控制的巴西公司，不一定会被当作不受限制的普通本国公司。",
            pt: "Sociedade brasileira com capital estrangeiro não é automaticamente tratada como sociedade nacional comum para fins rurais."
          },
          {
            zh: "居住状态、控制结构和经济目的，需要在商业谈判前先被确认。",
            pt: "Residência, controle societário e finalidade econômica devem ser mapeados antes da negociação comercial."
          }
        ]
      },
      {
        heading: {
          zh: "真正正确的流程在 Incra 之前就开始了",
          pt: "O fluxo correto começa antes do protocolo no Incra"
        },
        paragraphs: [
          {
            zh: "政府官方服务页面说明：在某些情况下，外国人取得或租赁农村土地需要经过 Incra 的授权流程。但这个步骤只有在基础文件已经理顺时才有效。否则，交易很快会卡在地籍、登记或环境问题上。",
            pt: "A página oficial de serviços do governo deixa claro que existem hipóteses em que o estrangeiro precisa de autorização para adquirir ou arrendar terra rural. Esse protocolo só funciona quando o ativo já chegou organizado ao balcão: sem base fundiária, registral e cadastral coerente, o processo trava cedo."
          },
          {
            zh: "实务顺序通常是：先审卖方资料，再审 matrícula 和 cadeia dominial，然后核对 CCIR、Cafir/ITR、CAR、在适用时的 georreferenciamento、环境负债、占有与地役权，最后再决定是直接购买、租赁、运营型合资还是其他结构。",
            pt: "O fluxo mais seguro costuma ser: triagem do vendedor, revisão de matrícula e cadeia dominial, conferência de CCIR, Cafir/ITR, CAR, georreferenciamento quando aplicável, passivo ambiental, ocupação e servidões. Só depois faz sentido escolher entre compra direta, arrendamento, parceria operacional ou outra estrutura."
          }
        ],
        bullets: [
          {
            zh: "低价不能弥补地籍、登记或环境问题没有解决。",
            pt: "Preço baixo não compensa cadastro, registro ou passivo ambiental mal resolvidos."
          },
          {
            zh: "公证处或公证员是解释授权委托、文件形式和外国文件要求的重要节点。",
            pt: "O notário/tabelião é peça importante para esclarecer procurações, forma do ato e documentos estrangeiros."
          }
        ]
      },
      {
        heading: {
          zh: "外国资本通常如何进入巴西农村资产",
          pt: "Como capital estrangeiro costuma entrar em ativos rurais"
        },
        paragraphs: [
          {
            zh: "成功的荷兰、德国、美国、中国以及其他外国资本案例，通常不是从“无论如何都先买地”开始，而是先选择最合适的资产暴露方式。很多时候，更稳妥的路径是先看清运营、治理和文件，再决定是否值得追求土地的直接所有权。",
            pt: "As operações mais sólidas de capital holandês, alemão, americano, chinês e de outros grupos estrangeiros normalmente não começam pela tese de comprar terra a qualquer custo. O padrão mais bem-sucedido costuma ser escolher a forma de exposição que melhor combina segurança jurídica, governança e capacidade operacional."
          },
          {
            zh: "在实践中，这可能意味着一个结构完善的租赁、一个运营型合资、一个治理清晰的合作安排，或者通过 FIAGRO、CRA 等农业工具获得间接暴露；如果目标是不直接持有土地而参与产业链，这往往更合适。所谓代币化并不能替代 matrícula、escritura 或 registro；如果出现，也只能被当作额外的合同或金融层，而不是登记捷径。",
            pt: "Na prática, isso pode significar um arrendamento bem estruturado, uma joint venture operacional, parceria com governança clara, ou exposição indireta por veículos do agro, como FIAGRO e CRA, quando o objetivo é participar da cadeia sem assumir domínio direto do imóvel. Tokenização, por sua vez, não substitui matrícula, escritura ou registro; quando aparece, deve ser tratada como camada contratual ou financeira adicional, nunca como atalho registral."
          }
        ],
        bullets: [
          {
            zh: "在某些风险偏好下，租赁或合资比直接购买更有效率。",
            pt: "Em certos perfis, arrendamento e joint venture são mais eficientes do que compra direta."
          },
          {
            zh: "FIAGRO 和 CRA 提供的是经济性暴露，不等于土地的直接所有权。",
            pt: "FIAGRO e CRA oferecem exposição econômica; não equivalem a titularidade direta do imóvel."
          },
          {
            zh: "代币并不会修复地权瑕疵，也不会消除法定要求。",
            pt: "Token não corrige vício fundiário nem elimina exigência legal."
          }
        ]
      },
      {
        heading: {
          zh: "给中国买家的结论",
          pt: "Conclusão prática para o comprador chinês"
        },
        paragraphs: [
          {
            zh: "对中国买家来说，安全顺序很清楚：先把农村和城市分开，定义由谁买、以什么结构买，再看该区域和面积是否允许，随后做完整尽调，最后才谈价格、时间表和排他条款。如果谈判一开始只围绕面积单价和回报展开，通常就是对风险的低估。",
            pt: "Para o comprador chinês, a sequência segura é simples: separar rural de urbano, definir quem compra e por qual estrutura, verificar se a área e a localização são compatíveis com a regra aplicável, fazer diligência completa e só depois discutir preço, prazo e exclusividade. Quando a negociação começa pelo hectare e não pela documentação, o risco costuma estar sendo subestimado."
          }
        ]
      }
    ],
    disclaimer: {
      zh: "本文仅用于交易教育，不构成法律意见。正式决策前，应由巴西律师、公证处或公证员，并在适用时由 Incra 对具体结构进行复核。",
      pt: "Este conteúdo é educativo e não substitui parecer jurídico. A decisão concreta deve ser revisada por advogado brasileiro, notário/tabelião e, quando aplicável, pela regulação e pelos procedimentos do Incra."
    },
    sources: [
      {
        label: "Planalto - Constituição Federal, art. 190",
        url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm"
      },
      {
        label: "Planalto - Lei 5.709/1971",
        url: "https://www.planalto.gov.br/ccivil_03/leis/L5709.htm"
      },
      {
        label: "Planalto - Decreto 74.965/1974",
        url: "https://www.planalto.gov.br/ccivil_03/decreto/1970-1979/D74965.htm"
      },
      {
        label: "Planalto - Parecer AGU LA-01/2010",
        url: "https://www.planalto.gov.br/ccivil_03/AGU/PRC-LA01-2010.htm"
      },
      {
        label: "Incra - aquisição de terras por estrangeiros",
        url: "https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/aquisicao-terras-estrangeiros"
      },
      {
        label: "Gov.br - autorização para estrangeiro adquirir ou arrendar terras",
        url: "https://www.gov.br/pt-br/servicos/obter-autorizacao-para-estrangeiro-adquirir-ou-arrendar-terras"
      }
    ]
  },
  {
    slug: "land-document-checklist",
    category: "diligence",
    readTime: 7,
    title: {
      zh: "巴西农村土地文件清单：买方在报价前应看什么",
      pt: "Checklist documental para imóvel rural antes da oferta"
    },
    summary: {
      zh: "从 matrícula 到 CCIR、CAR、地籍一致性与占有风险，帮助中国买家理解文件顺序。",
      pt: "Da matrícula ao CCIR, CAR, coerência cadastral e risco possessório."
    },
    sections: [
      {
        heading: {
          zh: "m atrícula 是起点，不是终点",
          pt: "A matrícula é o ponto de partida, não o ponto final"
        },
        paragraphs: [
          {
            zh: "中国买家常把 matrícula 当成唯一证明。实际上，它是注册入口，但仍需对比卖方披露、地籍、面积、边界、averbações、ônus 和链条连续性。",
            pt: "Muitos compradores tratam a matrícula como prova suficiente. Na prática, ela é o ponto de entrada do registro, mas deve ser confrontada com a descrição física do imóvel, averbações, ônus e a cadeia de titularidade."
          }
        ],
        bullets: [
          {
            zh: "确认面积、地号、边界、历史登记是否一致。",
            pt: "Conferir área, confrontações, histórico registral e coerência descritiva."
          },
          {
            zh: "检查是否存在 penhora、usufruto、servidão 或诉讼痕迹。",
            pt: "Mapear penhora, usufruto, servidão e sinais de litígio."
          }
        ]
      },
      {
        heading: {
          zh: "CCIR、CAR 与地籍校验不能省",
          pt: "CCIR, CAR e cadastro não são opcionais"
        },
        paragraphs: [
          {
            zh: "Incra informa que o CCIR comprova regularidade cadastral e é indispensável para vender, prometer vender, arrendar, hipotecar e outros atos do imóvel rural. Para o comprador estrangeiro, isso significa que a verificação cadastral deve entrar cedo no processo.",
            pt: "O Incra informa que o CCIR comprova a regularidade cadastral e é indispensável para vender, prometer vender, arrendar, hipotecar e outros atos sobre imóvel rural. Para o investidor estrangeiro, isso deve entrar cedo no processo."
          }
        ]
      },
      {
        heading: {
          zh: "把运营资料也纳入文件包",
          pt: "Inclua informação operacional no pacote documental"
        },
        paragraphs: [
          {
            zh: "如果目标是农业投资而不仅是持有土地，买方还要审查 arrendamentos, contratos de armazenagem, histórico produtivo, outorgas de água, licenças e passivos ambientais.",
            pt: "Se a tese é agrícola, não basta verificar a terra. É necessário revisar arrendamentos, armazenagem, histórico produtivo, outorgas, licenças e passivos ambientais."
          }
        ]
      }
    ],
    disclaimer: {
      zh: "不同州和交易结构会改变文件清单。执行前请做当地法律与技术复核。",
      pt: "A lista documental varia conforme o estado e a estrutura da operação. Sempre faça revisão local."
    },
    sources: [
      {
        label: "Incra - CCIR",
        url: "https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/cadastro-imovel-rural"
      },
      {
        label: "Incra FAQ fundiário",
        url: "https://www.gov.br/incra/pt-br/acesso-a-informacao/perguntas-frequentes"
      }
    ]
  },
  {
    slug: "brazilian-registry-system",
    category: "diligence",
    readTime: 6,
    title: {
      zh: "理解巴西不动产登记系统：为什么“登记”决定交易安全",
      pt: "Como funciona o sistema registral imobiliário brasileiro"
    },
    summary: {
      zh: "面向跨境买家解释 matrícula、registro e a modernização eletrônica do SERP/SREI。",
      pt: "Explica matrícula, registro e a modernização eletrônica do SERP/SREI."
    },
    sections: [
      {
        heading: {
          zh: "交易安全来自登记连续性",
          pt: "A segurança vem da continuidade registral"
        },
        paragraphs: [
          {
            zh: "在巴西，土地交易安全很大程度上 depende da qualidade do registro imobiliário. Não basta existir contrato: o ponto decisivo é como o direito aparece e se atualiza no Registro de Imóveis competente.",
            pt: "No Brasil, a segurança da transação depende muito da qualidade do registro imobiliário. Não basta existir contrato; o ponto decisivo é como o direito consta e é atualizado no Registro de Imóveis competente."
          }
        ]
      },
      {
        heading: {
          zh: "电子化正在推进，但并不 elimina a diligência",
          pt: "A digitalização avança, mas não elimina a diligência"
        },
        paragraphs: [
          {
            zh: "Lei 14.382/2022 instituiu o Sistema Eletrônico dos Registros Públicos (SERP) para ampliar acesso remoto, emissão eletrônica de certidões e integração de serviços registrais. O CNJ, pela Corregedoria Nacional, também atua na regulação e no SREI do registro imobiliário.",
            pt: "A Lei 14.382/2022 instituiu o SERP para ampliar acesso remoto, emissão eletrônica de certidões e integração dos serviços de registro. O CNJ, via Corregedoria Nacional, também regula e acompanha o SREI no âmbito imobiliário."
          },
          {
            zh: "这意味着流程更快，但不意味着可省略对 matrícula、ônus、cadeia dominial 和 descrição do imóvel 的人工审查。",
            pt: "Isso acelera o acesso, mas não dispensa revisão humana da matrícula, dos ônus, da cadeia dominial e da descrição do imóvel."
          }
        ]
      }
    ],
    disclaimer: {
      zh: "SERP/SREI 改善访问效率，但不替代交易尽调。",
      pt: "SERP/SREI melhoram acesso e eficiência, mas não substituem diligência."
    },
    sources: [
      {
        label: "Planalto - Lei 14.382/2022",
        url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/Lei/L14382.htm"
      },
      {
        label: "CNJ - Justiça Aberta",
        url: "https://www.cnj.jus.br/corregedoriacnj/justica-aberta/"
      },
      {
        label: "CNJ - Extrajudicial",
        url: "https://www.cnj.jus.br/corregedoriacnj/extrajudicial/"
      }
    ]
  },
  {
    slug: "notarial-system-brazil",
    category: "diligence",
    readTime: 6,
    title: {
      zh: "巴西公证体系与土地交易：公证不是形式主义",
      pt: "Sistema notarial brasileiro: por que a escritura importa"
    },
    summary: {
      zh: "解释 tabelião de notas、escritura pública、e-Notariado 和交易文件流。",
      pt: "Mostra o papel do tabelião, da escritura pública e do e-Notariado."
    },
    sections: [
      {
        heading: {
          zh: "公证层负责把交易意思表示 formalizar com fé pública",
          pt: "O notariado formaliza a vontade com fé pública"
        },
        paragraphs: [
          {
            zh: "Lei 8.935/1994 regulamenta os serviços notariais e de registro. Em operações imobiliárias, o tabelião de notas é peça-chave para lavrar a escritura pública quando exigida, organizar declarações e reduzir assimetria documental entre as partes.",
            pt: "A Lei 8.935/1994 regula os serviços notariais e de registro. Em operações imobiliárias, o tabelião de notas é central para lavrar a escritura pública quando exigida, organizar declarações e reduzir assimetria documental."
          }
        ]
      },
      {
        heading: {
          zh: "公证与登记是两层，不可混为一谈",
          pt: "Notariado e registro são camadas diferentes"
        },
        paragraphs: [
          {
            zh: "对跨境买家尤其重要的一点是：escritura pública e registro não são a mesma coisa. A escritura organiza e autentica o negócio; o registro imobiliário é que projeta efeitos perante terceiros segundo a estrutura aplicável.",
            pt: "Para o investidor estrangeiro, escritura pública e registro não são a mesma coisa. A escritura estrutura e autentica o negócio; o registro imobiliário é que o projeta perante terceiros."
          }
        ]
      },
      {
        heading: {
          zh: "数字化提升效率，但文件准备仍然决定节奏",
          pt: "A digitalização melhora o fluxo, mas o preparo documental segue decisivo"
        },
        paragraphs: [
          {
            zh: "O ecossistema do e-Notariado ajuda na formalização eletrônica de atos, porém negócios rurais complexos continuam exigindo revisão documental forte, procurações corretas, tradução quando cabível e coordenação entre comprador, vendedor, cartório e assessores.",
            pt: "O e-Notariado ajuda na formalização eletrônica, mas negócios rurais complexos seguem exigindo revisão documental robusta, procurações corretas, tradução quando aplicável e coordenação entre comprador, vendedor, cartório e assessores."
          }
        ]
      }
    ],
    disclaimer: {
      zh: "具体是否必须 escritura pública, 取决于 operação, valor, natureza do ato e orientação local especializada。",
      pt: "A necessidade e o desenho da escritura dependem do ato, valor e orientação especializada local."
    },
    sources: [
      {
        label: "Planalto - Lei 8.935/1994",
        url: "https://www.planalto.gov.br/ccivil_03/leis/L8935.htm"
      },
      {
        label: "Colégio Notarial - cartilha de compra e venda",
        url: "https://www.notariado.org.br/wp-content/uploads/2021/03/Cartilha-02-Compra-e-Venda.pdf"
      }
    ]
  },
  {
    slug: "tokenization-rural-assets",
    category: "innovation",
    readTime: 6,
    title: {
      zh: "巴西农村资产代币化：机会在增长，监管边界更重要",
      pt: "Tokenização de ativos rurais: inovação com fronteiras regulatórias"
    },
    summary: {
      zh: "把 tokenização 看成 distribuição e estruturação 的 tema，而不是替代产权登记。",
      pt: "Trata tokenização como camada de estruturação e distribuição, não substituto do registro imobiliário."
    },
    sections: [
      {
        heading: {
          zh: "代币不自动等于土地权利",
          pt: "Token não equivale automaticamente a direito real sobre a terra"
        },
        paragraphs: [
          {
            zh: "在巴西，代币化最重要的误区是把 token 当成自动替代 matrícula、escritura ou registro. 从交易结构角度看，token pode representar fluxo, contrato, recebível, participação ou outro arranjo, mas isso depende da modelagem jurídica.",
            pt: "O erro mais comum é tratar o token como substituto automático da matrícula, da escritura ou do registro. Na prática, o token pode representar fluxo, contrato, recebível, participação ou outro arranjo, conforme a modelagem jurídica."
          }
        ]
      },
      {
        heading: {
          zh: "CVM 对证券属性保持明确关注",
          pt: "A CVM acompanha de perto a caracterização como valor mobiliário"
        },
        paragraphs: [
          {
            zh: "A CVM informa que suas regras se aplicam aos criptoativos que forem considerados valores mobiliários e aponta, entre as referências, o Parecer de Orientação CVM 40 e o Ofício Circular CVM/SSE 6/2023 sobre tokenização. Portanto, qualquer narrativa de “token de fazenda” precisa ser analisada sob a ótica regulatória, e não apenas comercial.",
            pt: "A CVM informa que suas regras se aplicam aos criptoativos que sejam considerados valores mobiliários e remete ao Parecer de Orientação CVM 40 e ao Ofício Circular CVM/SSE 6/2023 sobre tokenização. Logo, qualquer proposta de 'token de fazenda' precisa ser analisada sob ótica regulatória, não só comercial."
          }
        ],
        bullets: [
          {
            zh: "看清底层权利是什么。",
            pt: "Verifique qual é o direito subjacente."
          },
          {
            zh: "看清投资回报是否 caracteriza oferta regulada。",
            pt: "Avalie se a promessa de retorno caracteriza oferta regulada."
          }
        ]
      },
      {
        heading: {
          zh: "对中国买家的务实建议",
          pt: "Conselho pragmático ao investidor chinês"
        },
        paragraphs: [
          {
            zh: "如果目标是获得对巴西农业资产的 exposição, tokenização 可以 ser tema de inovação e captação. Mas quando o objetivo é controle fundiário ou segurança de propriedade, o centro da análise continua sendo estrutura societária, documentação, registro e governança.",
            pt: "Se a tese é exposição a ativos agrícolas, tokenização pode ser tema de inovação e distribuição. Mas, quando a meta é controle fundiário ou segurança patrimonial, o centro continua sendo estrutura, documentação, registro e governança."
          }
        ]
      }
    ],
    disclaimer: {
      zh: "涉及代币发行、分销或公开募集时，必须先做证券监管分析。",
      pt: "Qualquer emissão, distribuição ou oferta precisa de análise regulatória prévia."
    },
    sources: [
      {
        label: "CVM - criptoativos e aplicação das regras",
        url: "https://www.gov.br/cvm/pt-br/acesso-a-informacao-cvm/perguntas-frequentes-da-cvm/criptoativos-quando-se-aplicam-as"
      },
      {
        label: "Portal do Investidor - riscos de criptoativos e ICOs",
        url: "https://www.gov.br/investidor/pt-br/investir/cuidados-ao-investir/evitando-problemas/principais-fraudes-e-esquemas-irregulares/criptoativos-e-icos"
      }
    ]
  },
  {
    slug: "soy-corn-cotton-guide",
    category: "agriculture",
    readTime: 7,
    title: {
      zh: "中国买家需要知道的巴西三大作物：大豆、玉米、棉花",
      pt: "Guia rápido das três culturas-chave: soja, milho e algodão"
    },
    summary: {
      zh: "把三种核心作物放进同一个投资阅读框架：种植逻辑、需求端和区域差异。",
      pt: "Coloca soja, milho e algodão em um mesmo quadro de leitura para o investidor."
    },
    sections: [
      {
        heading: {
          zh: "大豆是中国买家最熟悉的入口",
          pt: "A soja costuma ser a porta de entrada"
        },
        paragraphs: [
          {
            zh: "Embrapa destaca que o Brasil é o maior produtor mundial de soja. Para o comprador chinês, isso torna a soja o ponto de partida natural, tanto por relevância comercial quanto pela familiaridade com a cadeia de exportação.",
            pt: "A Embrapa destaca o Brasil como maior produtor mundial de soja. Para o comprador chinês, ela costuma ser a porta de entrada natural pela relevância comercial e pela familiaridade com a cadeia exportadora."
          }
        ]
      },
      {
        heading: {
          zh: "玉米与二茬模型决定现金流节奏",
          pt: "O milho e a segunda safra moldam o fluxo de caixa"
        },
        paragraphs: [
          {
            zh: "Conab aponta a continuidade do modelo produtivo soja-milho como economicamente atrativo em boa parte do Centro-Oeste. Isso significa que a leitura do ativo não pode separar terra de calendário agrícola.",
            pt: "A Conab aponta a continuidade do modelo soja-milho como economicamente atrativo em grande parte do Centro-Oeste. Isso significa que o ativo deve ser lido junto do calendário agrícola."
          }
        ]
      },
      {
        heading: {
          zh: "棉花更集中，也更 seletiva",
          pt: "O algodão é mais concentrado e seletivo"
        },
        paragraphs: [
          {
            zh: "棉花通常 exige maior disciplina operacional、capital de giro e leitura de mercado. Em contrapartida, pode oferecer tese diferenciada em regiões como oeste da Bahia e Mato Grosso.",
            pt: "O algodão costuma exigir mais disciplina operacional, capital de giro e leitura de mercado. Em contrapartida, pode diferenciar a tese em regiões como oeste baiano e Mato Grosso."
          }
        ]
      }
    ],
    sources: [
      {
        label: "Conab - boletim de safra 2025/26",
        url: "https://www.gov.br/conab/pt-br/atuacao/informacoes-agropecuarias/safras/safra-de-graos/boletim-da-safra-de-graos/3o-levantamento-safra-2025-26/e-book_boletim-de-safras-3o-levantamento_2025.pdf"
      },
      {
        label: "Embrapa Soja",
        url: "https://www.embrapa.br/soja/cultivos/soja1"
      }
    ]
  },
  {
    slug: "harvest-and-second-crop",
    category: "agriculture",
    readTime: 5,
    title: {
      zh: "巴西的 safra 与 safrinha：为什么作物日历影响交易判断",
      pt: "Safra e safrinha: por que o calendário agrícola importa na aquisição"
    },
    summary: {
      zh: "帮助中国买家读懂第一季、第二季和区域时间差。",
      pt: "Explica a lógica da primeira safra, segunda safra e diferenças regionais."
    },
    sections: [
      {
        heading: {
          zh: "safra 不是单一时间点",
          pt: "Safra não é um ponto único no calendário"
        },
        paragraphs: [
          {
            zh: "Conab lembra que a área brasileira inclui culturas de primeira, segunda e terceira safras, além de inverno. Em negócios rurais, isso afeta risco climático, necessidade de capital e timing de comercialização.",
            pt: "A Conab lembra que a área brasileira inclui culturas de primeira, segunda e terceira safras, além das de inverno. Em negócios rurais, isso impacta risco climático, capital e timing comercial."
          }
        ]
      },
      {
        heading: {
          zh: "safrinha 常常由 soja planting 决定",
          pt: "A safrinha depende muito do ritmo da soja"
        },
        paragraphs: [
          {
            zh: "如果 soja 种植和收获 atrasam, o milho de segunda safra pode entrar em janela mais arriscada. Isso muda a leitura econômica da fazenda mesmo sem alteração no preço da terra.",
            pt: "Quando a soja atrasa, o milho de segunda safra pode cair em janela mais arriscada. Isso altera a leitura econômica da fazenda mesmo sem mudança no preço da terra."
          }
        ]
      }
    ],
    sources: [
      {
        label: "Conab - progresso de safra",
        url: "https://www.gov.br/conab/pt-br/atuacao/informacoes-agropecuarias/safras/progresso-de-safra"
      },
      {
        label: "Conab - boletim de safra 2025/26",
        url: "https://www.gov.br/conab/pt-br/atuacao/informacoes-agropecuarias/safras/safra-de-graos/boletim-da-safra-de-graos/3o-levantamento-safra-2025-26/e-book_boletim-de-safras-3o-levantamento_2025.pdf"
      }
    ]
  },
  {
    slug: "soybean-regions-productivity",
    category: "agriculture",
    readTime: 7,
    title: {
      zh: "巴西大豆主产区与生产率：给中国投资者的区域地图",
      pt: "Regiões sojícolas e produtividade: mapa rápido para o investidor"
    },
    summary: {
      zh: "用区域视角理解 Mato Grosso、Paraná、Rio Grande do Sul、Goiás 与 MATOPIBA。",
      pt: "Ajuda a ler Mato Grosso, Paraná, Rio Grande do Sul, Goiás e MATOPIBA."
    },
    sections: [
      {
        heading: {
          zh: "马托格罗索仍是全国锚点",
          pt: "Mato Grosso segue como âncora nacional"
        },
        paragraphs: [
          {
            zh: "IBGE informou em novembro de 2024 que Mato Grosso seguia como maior produtor nacional de soja, com participação estimada de 27,0% da produção, seguido por Paraná e Rio Grande do Sul.",
            pt: "O IBGE informou em novembro de 2024 que Mato Grosso seguia como maior produtor nacional de soja, com participação estimada de 27,0% da produção, seguido por Paraná e Rio Grande do Sul."
          }
        ]
      },
      {
        heading: {
          zh: "南部与中西部的风险结构不同",
          pt: "Sul e Centro-Oeste carregam riscos diferentes"
        },
        paragraphs: [
          {
            zh: "Paraná e Rio Grande do Sul oferecem leitura distinta de clima, logística, cooperativismo e janela operacional. Já Goiás e Mato Grosso do Sul dialogam mais diretamente com o modelo soja-milho do Centro-Oeste.",
            pt: "Paraná e Rio Grande do Sul trazem clima, logística e cooperativismo diferentes. Goiás e Mato Grosso do Sul conversam mais diretamente com o modelo soja-milho do Centro-Oeste."
          }
        ]
      },
      {
        heading: {
          zh: "MATOPIBA 更像扩张前沿，不是 réplica do Mato Grosso",
          pt: "MATOPIBA é fronteira própria, não réplica de Mato Grosso"
        },
        paragraphs: [
          {
            zh: "对中国买家而言，MATOPIBA 代表 expansão, mas com exigências específicas de solo, água, logística e governança territorial. A região pede diligência ainda mais disciplinada.",
            pt: "Para o investidor chinês, MATOPIBA representa expansão, mas com exigências próprias de solo, água, logística e governança territorial. A diligência tende a ser ainda mais crítica."
          }
        ]
      }
    ],
    sources: [
      {
        label: "IBGE - maiores produtores e soja 2025",
        url: "https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/42191-em-novembro-ibge-preve-safra-de-294-3-milhoes-de-toneladas-para-2024-e-de-314-8-milhoes-de-toneladas-para-2025"
      },
      {
        label: "Embrapa - contexto da soja no Brasil",
        url: "https://www.embrapa.br/agropensa/agro-em-dados/agricultura/soja"
      }
    ]
  }
];

export function getLocalizedValue(value, locale = "zh") {
  if (value == null) return "";
  if (typeof value === "string" || typeof value === "number") return value;
  return value[locale] ?? value.zh ?? value.pt ?? "";
}

export function getPropertyBySlug(slug) {
  return properties.find((property) => property.slug === slug);
}

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug);
}
