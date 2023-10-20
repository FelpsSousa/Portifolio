import React from 'react';
import ProjectSection from './ProjectSection';
import exampleImage from '../images/upload-ai-gerando-descricao.png';

const universityProjects = [
  {
    title: "Sistema de Controle de Acesso",
    category: "UnB",
    description: 
    `Este projeto consiste em um sistema de controle de acesso e monitoramento a ser utilizado na entrada dos Laboratórios de Computação (LINF - UnB). O objetivo é monitorar estudantes, professores, pessoal de limpeza, pessoal de segurança (vigilantes), pessoal de suporte técnico do CIC (funcionários, estagiários e professores associados à administração de suporte), bem como pessoas externas (ou pessoal de empresas terceirizadas) que acessam os laboratórios para realizar manutenção na infraestrutura (hardware, cabos, mobília, paredes, ar condicionado, etc.).

    Os dados de registro serão armazenados em um banco de dados, que conterá as seguintes informações:
    Número de usuário, que pode ser a identificação de estudante (para estudantes) ou CPF (pessoal externo).
    Nome completo e sobrenome.
    Identificação de disciplinas ou turmas (para estudantes) e outras reservas (pessoal externo).
    Arquivos de imagem facial de cada usuário, que serão usados para validação de acesso.
    
    Durante a validação de acesso, os seguintes dados são armazenados:
    Autor da reserva.
    Finalidade da reserva e informações adicionais da reserva.
    Número da sala.
    Horário.
    Se será uma reserva recorrente.
    
    Sistemas operacionais utilizados:
    O projeto foi implementado nos sistemas operacionais Linux 16.04 e 17.04.`,

    images: [exampleImage],
    repository: "https://gitlab.com/junio.batista12/Trabalho2_TP1"
  }
];

const UniversityProjects: React.FC = () => {
  return (
    <ProjectSection category="UnB" projects={universityProjects} />
  );
};

export default UniversityProjects;
