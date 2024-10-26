import "../styles/FrontEndeVerde.css";

import salgadinho from "/assets/Salgadinho.png";
import garrafa from "/assets/Garrafa.png";
import flecha from "/assets/arrow.svg";
import fecha_esquerda from "/assets/left_arrow.svg";
import reciclagem from "/assets/icon2.png";

import Plastico from "/assets/Plastico.png";
import Papel from "/assets/Papel.png";
import Metal from "/assets/Metal.png";
import Vidro from "/assets/Vidro.png";
import Organico from "/assets/Organico.png";
import Nao_Reciclavel from "/assets/Nao_Reciclavel.png";

import LixeiraPlastico from "/assets/Lixeira_Plastico.png";
import LixeiraPapel from "/assets/Lixeira_Papel.png"
import LixeiraMetal from "/assets/Lixeira_Metal.png"
import LixeiraVidro from "/assets/Lixeira_Vidro.png"
import LixeiraOrganico from "/assets/Lixeira_Organico.png"
import LixeiraNaoReciclavel from "/assets/Lixeira_Nao_Reciclavel.png"

import PET from "/assets/PET.png";
import PEAD from "/assets/PEAD.png";
import PVC from "/assets/PVC.png";
import PEBD from "/assets/PEBD.png";
import PP from "/assets/PP.png";
import PS from "/assets/PS.png";
import Outros from "/assets/Outros.png";

import { useOutletContext } from "react-router";

function FrontEndVerde() {
  const {
    itemSelecionado,
    mostrarCorpo,
    mostrarTiposReciclagem,
    voltarAoCorpo,
  } = useOutletContext();


  const lista = [
    Nao_Reciclavel,
    Papel,
    Metal,
    Vidro,
    Organico,
    Plastico,
  ];

  const lixeiras = 
  [
    LixeiraNaoReciclavel,
    LixeiraPapel,
    LixeiraMetal,
    LixeiraVidro,
    LixeiraOrganico,
    LixeiraPlastico,
  ];

  const tipos_de_plastico = [
    PET,
    PEAD,
    PVC,
    PEBD,
    PP,
    PS,
    Outros,
  ];

  const nomes_reciclagem = [
    "Não Reciclável",
    "Papel",
    "Metal",
    "Vidro",
    "Orgânico",
    "Plástico",
    "♻1 (PET) Polietileno tereftalato:",
    "♻2 (PEAD) Polietileno de Alta Densidade:",
    "♻3 (PVC) Cloreto de Polivinil:",
    "♻4 (PE) Polietileno de Baixa Densidade:",
    "♻5 (PP) Polipropileno:",
    "♻6 (PS) Poliestireno:",
    "♻7 Outros ou Material Não Rotulado:",
  ];

  const ids = [
    "rec_nao-reciclavel",
    "rec_papel",
    "rec_metal",
    "rec_vidro",
    "rec_organico",
    "rec_plastico",
    "rec_PET",
    "rec_PEAD",
    "rec_PVC",
    "rec_PEBD",
    "rec_PP",
    "rec_PS",
    "rec_O",
  ];

  const descricoes = [
    "O recipiente de cor cinza é destinado aos resíduos não recicláveis ou rejeitos, ou seja, aqueles que não podem ser reciclados ou reutilizados. Exemplos incluem papel higiênico, fraldas descartáveis e outros materiais similares.",
    "O recipiente de cor azul é destinado à coleta de papel e papelão. Nele, devem ser descartados jornais, revistas, embalagens de papelão, caixas e outros materiais similares.",
    "O recipiente amarelo é destinado aos metais. Latas de alumínio, latas de aço, tampas metálicas e outros objetos feitos de metal devem ser descartados nesse recipiente.",
    "O vidro deve ser descartado nos recipientes verdes. Garrafas, potes e frascos de vidro podem ser reciclados e transformados em novos produtos.",
    "Os resíduos orgânicos, como restos de alimentos, cascas de frutas e legumes, podas de plantas e outros materiais biodegradáveis, devem ser depositados em recipientes de cor marrom.",
    "O recipiente vermelho é utilizado para o descarte de plásticos. Garrafas PET, embalagens plásticas, sacolas, potes e tampas são alguns exemplos de materiais que devem ser colocados nesse recipiente.",
    "O PET é reciclado após a coleta dos resíduos pós-consumo. <br>Os materiais são classificado por tipo e cor, triturados e limpos para remover impurezas.<br>Em seguida, o PET triturado é derretido e transformado<br>em novos produtos, como garrafas, embalagens de alimentos, e tecidos reciclados.",
    "É obtido pela polimerização do etileno (e também é conhecido como eteno). <br>Deste modo, devido a sua característica de ter estrutura variável de acordo com a temperatura (termoplástico), o PEAD é reciclável e terá o símbolo de material reciclável. <br>Ele é um plástico inquebrável, resistente a baixas temperaturas, leve e impermeável.<br>Uma vez que o plástico já foi extrusado ele pode se transformar em: balões, sacolas plásticas, recipientes que não sejam de uso alimentício, entre outros.",
    "Você já deve ter visto esse plástico em tubos usados em construções. Ele é o PVC, formado por 57% de cloro e 43% de eteno (derivado do petróleo) e traz o símobolo de número 3 nas embalagens de plástico.<br>Tem como característica ser mais rígido, transparente (quando desejável pelo fabricante), impermeável, e inquebrável. <br>Onde encontrar: Na construção civil ele é usado em tubulações de água e de esgoto e também é muito encontrado em encapamentos de cabos elétricos, equipamentos médico-cirúrgicos, lonas, esquadrias e revestimentos. Também é bastante utilizado em produtos resistentes como cones de sinalização, calhas e até mesmo, brinquedos.<br>Depois de reciclado, o plástico PVC pode ser encontrado: mangueira de jardim, tubulação de esgoto e cone de tráfego e cabos.",
    "O Polietileno de Baixa Densidade é o polímero mais utilizado no Brasil, segundo relatório anual publicado pela Abiplast. Em 2019, o PE correspondeu a 20,6% de todo o plástico consumido. Esse tipo de plástico tem como símbolo reciclagem o número quatro dentro de um triângulo e é obtido através da polimerização do eteno. Ele também é o polímero mais simples e mais barato do mercado devido à sua alta produção mundial.<br>Onde encontrar: plástico filme, utilidades domésticas,  sacolas plásticas de supermercados, bolsas de soro fisiológico, entre outros<br>Depois de reciclado o plástico PE se transforma em: saco de lixo e tubulação para irrigadores.",
    "Esse tipo de plástico é uma resina de baixa densidade e tem propriedades muito parecidas com a do polietileno (PE), porém seu ponto de amolecimento quando aquecido é mais elevado. Uma característica interessante do plástico polipropileno é seu efeito “dobradiça” que permite confeccionar peças com dobras no próprio material – pode ser usado para estojos de óculos e tampas de frascos, por exemplo.<br>Onde encontrar o polipropileno: embalagens flexíveis, sacos para grãos e fertilizantes, brinquedos, copos plásticos, potes de margarina, tampas de refrigerantes, seringas de injeção, autopeças, tupperware, copos descartáveis entre outros.<br>Depois de reciclado o plástico polipropileno pode ser transformado:  caixas e cabos para bateria de carro etc.",
    "O poliestireno é um dos plásticos mais usados no mundo por ser leve e barato. O uso do PS deve ser restringido pois possui substâncias cancerígenas que podem ser liberadas quando o material é aquecido.<br>Onde encontrar: copos descartáveis de isopor, caixas de ovos, talheres de plástico e alguns recipientes de alimentos.<br>Depois de reciclado o poliestireno pode ser usado para confecção de: bandejas, itens para escritório, enchimento de puffs e bancos, placas para isolamento térmico, acessórios para escritório e bandejas.",
    "Produtos que não possuem símbolos da reciclagem ou que possuem o número 7 frequentemente são feitos à base de policarbonato (PC), ABS, poliamida ou acrílicos. <br>Logo, a reciclagem desses materiais plásticos é inviável na maioria das vezes e por isso, o destino mais ecologicamente correto é o coprocessamento.",
  ];

  const localreciclagem = [
    "Deve ser reciclado na lixeira Cinza",
    "Deve ser reciclado na lixeira Azul",
    "Deve ser reciclado na lixeira Amarela",
    "Deve ser reciclado na lixeira Verde",
    "Deve ser reciclado na lixeira Marrom",
    "Deve ser reciclado na lixeira Vermelha",
  ];

  return (
    <div>
      {mostrarCorpo ? (
        <div className="corpo">
          <div className="overlay" />
          <div className="titulo">
            <img
              className="filter-inverter"
              style={{ width: "70px" }}
              src={reciclagem}
            />
            <h1 id="tituloh1">APRENDA A RECICLAR</h1>
          </div>

          <h2>Encontre o ícone de reciclagem no produto</h2>

          <div className="desc">
            Normalmente pode ser encontrado no verso da embalagem do produto
          </div>

          <div className="png">

            <div class="flip-container">
              <div class="flipper">
                <div class="front">
                  <img className="imagens" src={salgadinho}></img>
                </div>
                <div class="back">
                  <p>O tipo de embalagem é encontrado no verso do produto</p>
                </div>
              </div>
            </div>

            <div class="flip-container">
              <div class="flipper">
                <div class="front">
                  <img className="imagens" src={garrafa}></img>
                </div>
                <div class="back">
                  <p>O tipo de embalagem é encontrado no verso do produto</p>
                </div>
              </div>
            </div>

          </div>
          <img
            id="scroll"
            className="filter-white"
            style={{ width: "50px" }}
            href="#meuelemento"
            src={flecha}
            onClick={() => {
              window.scroll({ top: window.innerHeight });
            }}
          />

          <div className="tipos_embalagem">
            <h2>
              Qual o tipo de material você deseja aprender a reciclar?
            </h2>
            <div className="box_icones">
              {lista.map((item, index) => (
                <img
                  key={index}
                  className="icones"
                  src={item}
                  onClick={() => {mostrarTiposReciclagem(index), window.scrollTo(0, 0)}}
                  alt={`Ícone ${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          {
            ids[itemSelecionado] == "rec_plastico" ? (
              <>

                <div className={"tiposReciclagem open"}>
                  <div className="overlay" />
                  <div className="cabecalho">
                    <div className="voltar" onClick={voltarAoCorpo}>
                      Voltar
                      <img
                        className="filter-white"
                        style={{ width: "45px" }}
                        src={fecha_esquerda}
                        onClick={voltarAoCorpo}
                      />
                    </div>
                    <div className="titulo">
                      <img
                        style={{ width: "70px" }}
                        src={reciclagem}
                      />
                      <h1 id="tituloh1">APRENDA A RECICLAR</h1>
                    </div>
                  </div>
                  <div className="parte_inferior">
                    <div className="nome">
                      Qual tipo de Plástico você deseja aprender a reciclar?
                    </div>
                    <div class="tipos_plastico">
                      {tipos_de_plastico.map((item, index) => (
                        <img
                          key={index}
                          className="icones2"
                          src={item}
                          onClick={() => {mostrarTiposReciclagem(index + 6), window.scrollTo(0, 0)}}
                          alt={`Ícone ${index}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

              </>
            ) :
              (
                <div className={"tiposReciclagem open"}>
                  <div className="overlay" />
                  <div className="cabecalho">
                    <div className="voltar" onClick={voltarAoCorpo}>
                      Voltar
                      <img
                        className="filter-white"
                        style={{ width: "45px" }}
                        src={fecha_esquerda}
                        onClick={voltarAoCorpo}
                      />
                    </div>
                    <div className="titulo">
                      <img
                        style={{ width: "70px" }}
                        src={reciclagem}
                      />
                      <h1 id="tituloh1">APRENDA A RECICLAR</h1>
                    </div>
                  </div>
                  <div className="parte_inferior">
                    <div id={ids[itemSelecionado]} className="nome">
                      {nomes_reciclagem[itemSelecionado]}
                    </div>
                    <div
                      className="explicação"
                      dangerouslySetInnerHTML={{ __html: descricoes[itemSelecionado] }}
                    ></div>
                    <div className="box_ilustrativa">
                    <div className="descrição">
                      <div className="tipo_lixo">
                        {<img style={{ width: "400px" }} src={itemSelecionado > 5 ? lixeiras[5] : lixeiras[itemSelecionado]}/>}
                      </div>
                      <div className="local_descarte">
                          {itemSelecionado > 5 ? localreciclagem[5] : localreciclagem[itemSelecionado]}
                        </div>
                        </div>
                        <div className="local_descarte_img">
                          <img style={{ width: "300px" }} src={itemSelecionado > 5 ? tipos_de_plastico[itemSelecionado - 6] : lista[itemSelecionado]} />
                        </div>
                    </div>
                  </div>
                </div>
              )
          }
        </>
      )}
    </div>
  );
}

export default FrontEndVerde;
