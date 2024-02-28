import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface Book {
  id: number;
  title: string;
  synopsis: string;
}

function Row(props: { row: Book }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.title}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Sinopse
              </Typography>
              <Typography>{row.synopsis}</Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows: Book[] = [
  { id: 1, title: 'O Programador Apaixonado, Chad Fowler', synopsis: 'Nesta obra o autor ensina como trabalhar a carreira de programador do ponto de vista empreendedor, ou seja, como se ela fosse um negócio. É muito importante criar um posicionamento sólido enquanto profissional – não apenas nessa área, mas em todas – para que a sua carreira te leve ao sucesso econômico e à realização pessoal. Chad Fowler é desenvolvedor de softwares, então ele conhece muito bem o meio, e associa as habilidades de um programador à malícia e jogo de cintura de um empreendedor.  Dessa forma, nos proporciona um passo a passo, como se você estivesse criando e vendendo um produto. Afinal de contas, as nossas habilidades e o nosso tempo são o produto que vendemos para as empresas.' },
  { id: 2, title: 'Código limpo, Robert C. Martin', synopsis: 'Mesmo um código ruim pode fazer uma máquina funcionar, mas isso não necessariamente é algo bom. O autor defende que códigos sujos podem acabar com uma empresa de desenvolvimento, porque eles atrapalham os projetos e fazem os softwares perderem recursos e criam outros problemas. A cada ano perdem-se muitas horas e recursos por conta de códigos mal escritos. Mas não precisa ser assim. O autor apresenta, neste livro, um paradigma que pode revolucionar a prática do desenvolvimento, o código limpo.' },
  { id: 3, title: 'Como ser um Programador Melhor, Pete Goodliffe', synopsis: 'Esse é aquele livro que todo programador, seja ele iniciante, experiente ou quem desenvolve apenas por hobby, deveria ler. É o livro dos macetes, sabe? Aqui o autor apresenta um conjunto de técnicas e abordagens úteis para a arte da programação que ajudam tanto a impulsionar a sua carreira quanto a melhorar o bem-estar. Com 15 anos de experiência em programação, Goodliffe reúne conselhos sólidos sobre como lidar com código, conhecer os negócios e melhorar o desempenho – sem fazer juízo de valor sobre alguma linguagem ou mercado. Vale a pena conferir.' },
  { id: 4, title: 'Expressões Regulares: Uma Abordagem Divertida, Aurelio Marinho Jargas', synopsis: 'Leitura praticamente obrigatória para programadores iniciantes, o autor Aurelio Marinho Jargas ensina sobre as expressões regulares, métodos que ajudam muito o desenvolvedor na hora de fazer checagens no código, como corrigir vários termos de uma vez, encontrar todas as palavras repetidas de uma vez, validar endereços etc. ' },
  { id: 5, title: 'Desenvolvendo Websites com PHP, Juliano Niederauer', synopsis: 'Esse livro apresenta técnicas de programação muito importantes para o desenvolvimento de sites dinâmicos e interativos. O PHP é utilizado em mais de 10 milhões de sites ao redor do mundo inteiro, e a obra envolve desde noções básicas até a criação e manutenção de bancos de dados, incluindo as ações mais mecânicas como inclusões, exclusões, alterações e consultas a tabelas de uma base de dados.' },
];

export default function Books() {
  return (
    <>
      
      <TableContainer component={Paper} sx={{ width: '600px' }}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Título</TableCell>             
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>

  );
}
