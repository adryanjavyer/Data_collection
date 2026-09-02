(() => {
  "use strict";

  const OTHER_RELEVANT = "Outros dados estatísticos que a instituição considere relevantes para compor o diagnóstico educacional do município";

  const institutions = [
    {
      id: "saude",
      name: "Secretaria Municipal de Saúde",
      shortName: "Saúde",
      category: "Secretaria Municipal",
      fields: [
        { id: "populacao_total", label: "Total da população do município atendida pela saúde", compact: true, placeholder: "Informe o total" },
        { id: "faixa_etaria", label: "Quantitativo da população discriminado por faixa etária (idade) atendida pela saúde", placeholder: "Ex.: 0–5 anos: 320\n6–14 anos: 610\n15–17 anos: 205" },
        { id: "outros", label: OTHER_RELEVANT, placeholder: "Inclua informações complementares, fontes e observações" }
      ]
    },
    {
      id: "assistencia-social",
      name: "Secretaria Municipal de Assistência Social",
      shortName: "Assistência Social",
      category: "Secretaria Municipal",
      fields: [
        { id: "familias_baixa_renda", label: "Total de famílias no perfil de Baixa Renda, cadastradas no Cadastro Único", compact: true, placeholder: "Informe o total" },
        { id: "criancas_faixa_etaria", label: "Quantitativo de crianças e adolescentes, discriminado por faixa etária (idade), no perfil de baixa renda cadastrado no Cadastro Único", placeholder: "Informe as faixas etárias e seus quantitativos" },
        { id: "escolarizacao", label: "Quantitativo de escolarização das pessoas no perfil de baixa renda cadastrado no Cadastro Único", placeholder: "Informe níveis de escolarização e quantitativos" },
        { id: "outros", label: OTHER_RELEVANT, placeholder: "Inclua informações complementares, fontes e observações" }
      ]
    },
    {
      id: "fazenda",
      name: "Secretaria Municipal de Fazenda",
      shortName: "Fazenda",
      category: "Secretaria Municipal",
      fields: [
        { id: "aplicacao_minima", group: "Financiamento da Educação Municipal — últimos 3 anos", label: "Aplicação mínima e orçamento da educação", placeholder: "Informe os dados de cada um dos três anos" },
        { id: "valor_total_educacao", group: "Financiamento da Educação Municipal — últimos 3 anos", label: "Valor total aplicado em educação", placeholder: "Ano / valor aplicado" },
        { id: "percentual_25", group: "Financiamento da Educação Municipal — últimos 3 anos", label: "Percentual de aplicação dos 25% constitucionais", placeholder: "Ano / percentual" },
        { id: "fundeb_recebido", group: "Fundeb — últimos 3 anos", label: "Valor total recebido do Fundeb", placeholder: "Ano / valor recebido" },
        { id: "fundeb_remuneracao", group: "Fundeb — últimos 3 anos", label: "Percentual destinado à remuneração dos profissionais da educação básica (mínimo 70%)", placeholder: "Ano / percentual" },
        { id: "fundeb_manutencao", group: "Fundeb — últimos 3 anos", label: "Percentual destinado às demais despesas de manutenção e desenvolvimento do ensino (até 30%)", placeholder: "Ano / percentual" },
        { id: "valor_aluno_ano", group: "Fundeb — últimos 3 anos", label: "Valor aluno/ano recebido", placeholder: "Ano / valor por aluno" },
        { id: "complementacoes", group: "Fundeb — últimos 3 anos", label: "Recebimento de complementações da União (VAAT ou VAAR). Quanto?", placeholder: "Informe o tipo, o ano e o valor" },
        { id: "salario_educacao", group: "Programas Federais Complementares", label: "Salário-Educação: valor recebido, aplicação e contrapartida", placeholder: "Detalhe valores e aplicação" },
        { id: "pnae", group: "Programas Federais Complementares", label: "PNAE (Merenda Escolar): valor por aluno, número de atendidos e contrapartida municipal", placeholder: "Detalhe valores, atendidos e contrapartida" },
        { id: "pnate", group: "Programas Federais Complementares", label: "PNATE (Transporte Escolar): valor recebido, número de alunos atendidos, veículos e rotas", placeholder: "Detalhe valor, alunos, veículos e rotas" },
        { id: "outros", group: "Programas Federais Complementares", label: OTHER_RELEVANT, placeholder: "Inclua informações complementares, fontes e observações" }
      ]
    },
    {
      id: "coronel-coimbra",
      name: "Escola Estadual Coronel Coimbra",
      shortName: "Coronel Coimbra",
      category: "Ensino Médio",
      fields: [
        { id: "identificacao", group: "Ensino Médio", label: "Nome completo da escola, INEP e endereço completo", placeholder: "Informe a identificação completa" },
        { id: "matriculas", group: "Ensino Médio", label: "Número de alunos matriculados por ano de escolaridade", placeholder: "Ano de escolaridade / número de alunos" },
        { id: "professores", group: "Ensino Médio", label: "Número de professores, nomes e suas formações", placeholder: "Nome / formação" },
        { id: "rendimento", group: "Ensino Médio", label: "Indicadores de rendimento (aprovação, abandono etc.)", placeholder: "Indicador / índice" },
        { id: "distorcao", group: "Ensino Médio", label: "Distorção idade-série", compact: true, placeholder: "Informe o índice" },
        { id: "aprovacao", group: "Ensino Médio", label: "Índice de aprovação", compact: true, placeholder: "Informe o índice" },
        { id: "abandono", group: "Ensino Médio", label: "Índice de abandono", compact: true, placeholder: "Informe o índice" },
        { id: "ee_forma", group: "Educação Especial", label: "Forma de atendimento aos alunos público-alvo da educação especial (inclusão em classes comuns, salas de AEE, salas multifuncionais etc.)", placeholder: "Descreva as formas de atendimento" },
        { id: "ee_alunos", group: "Educação Especial", label: "Número de alunos atendidos por tipo de atendimento", placeholder: "Tipo de atendimento / número de alunos" },
        { id: "ee_profissionais", group: "Educação Especial", label: "Profissionais envolvidos no atendimento educacional especializado: número e formação", placeholder: "Profissional / quantidade / formação" },
        { id: "transporte", group: "Atendimento", label: "Número de alunos atendidos por transporte escolar", compact: true, placeholder: "Informe o total" },
        { id: "merenda", group: "Atendimento", label: "Número de alunos atendidos pela merenda escolar", compact: true, placeholder: "Informe o total" },
        { id: "outros", group: "Informações complementares", label: OTHER_RELEVANT, placeholder: "Inclua informações complementares, fontes e observações" }
      ]
    },
    {
      id: "mestra-aurora",
      name: "Escola Estadual Mestra Aurora",
      shortName: "Mestra Aurora",
      category: "Ensino Fundamental",
      fields: [
        { id: "identificacao", group: "Ensino Fundamental", label: "Nome completo das escolas, endereço, INEP, dentre outros dados", placeholder: "Informe a identificação completa" },
        { id: "matriculas", group: "Ensino Fundamental", label: "Número de alunos matriculados por ano", placeholder: "Ano / número de alunos" },
        { id: "professores", group: "Ensino Fundamental", label: "Número de professores por rede e sua formação", placeholder: "Rede / quantidade / formação" },
        { id: "distorcao", group: "Ensino Fundamental", label: "Distorção idade-série", compact: true, placeholder: "Informe o índice" },
        { id: "aprovacao", group: "Ensino Fundamental", label: "Índice de aprovação", compact: true, placeholder: "Informe o índice" },
        { id: "abandono", group: "Ensino Fundamental", label: "Índice de abandono", compact: true, placeholder: "Informe o índice" },
        { id: "media_turma", group: "Ensino Fundamental", label: "Número médio de alunos por turma", compact: true, placeholder: "Informe a média" },
        { id: "ee_forma", group: "Educação Especial", label: "Forma de atendimento aos alunos público-alvo da educação especial (inclusão em classes comuns, salas de AEE, salas multifuncionais etc.)", placeholder: "Descreva as formas de atendimento" },
        { id: "ee_alunos", group: "Educação Especial", label: "Número de alunos atendidos por tipo de atendimento", placeholder: "Tipo de atendimento / número de alunos" },
        { id: "ee_profissionais", group: "Educação Especial", label: "Profissionais envolvidos no atendimento educacional especializado: número e formação", placeholder: "Profissional / quantidade / formação" },
        { id: "transporte", group: "Atendimento", label: "Número de alunos atendidos por transporte escolar (dados da secretaria, prestação de contas, programa de informações e dados do transporte escolar e contratos de terceirização)", placeholder: "Informe o total e as fontes utilizadas" },
        { id: "merenda", group: "Atendimento", label: "Número de alunos atendidos pela merenda escolar (dados da secretaria e prestação de contas PNAE)", placeholder: "Informe o total e as fontes utilizadas" },
        { id: "nove_anos", group: "Organização do ensino", label: "O ensino fundamental de 9 anos já está implantado? Desde quando? (legislação de organização e funcionamento do ensino fundamental, estadual ou municipal)", placeholder: "Informe a situação, a data e a legislação" },
        { id: "municipalizacao", group: "Organização do ensino", label: "Municipalização: quando ocorreu? Quais etapas foram absorvidas?", placeholder: "Informe a data e as etapas" },
        { id: "outros", group: "Informações complementares", label: "Outros dados estatísticos que a instituição considere", placeholder: "Inclua informações complementares, fontes e observações" }
      ]
    },
    {
      id: "ifnmg",
      name: "Instituto Federal Norte de Minas Gerais – Polo Avançado – Polo Carbonita/MG",
      shortName: "IFNMG",
      category: "Educação Técnica e Profissional",
      fields: [
        { id: "matriculas", label: "Número de matrículas por curso e por turma", placeholder: "Curso / turma / matrículas" },
        { id: "faixa_etaria", label: "Quantitativo de estudantes por faixa etária", placeholder: "Faixa etária / quantitativo" },
        { id: "concluintes_evasoes", label: "Número de concluintes e de evasões, quando disponível", placeholder: "Curso / concluintes / evasões" },
        { id: "equipe", label: "Quantitativo de docentes e técnicos administrativos", placeholder: "Função / quantitativo" },
        { id: "educacao_especial", label: "Informações sobre atendimento a estudantes público-alvo da educação especial, quando houver", placeholder: "Descreva o atendimento e os quantitativos" },
        { id: "cursos_tecnicos", label: "Cursos técnicos e profissionalizantes existentes", placeholder: "Liste os cursos" },
        { id: "instituicoes", label: "Nome completo das instituições que ofertam esses cursos", placeholder: "Liste as instituições" },
        { id: "expansao", label: "Intenção de expansão: há previsão de novos cursos, convênios ou parcerias?", placeholder: "Descreva as previsões existentes" },
        { id: "outros", label: OTHER_RELEVANT, placeholder: "Inclua informações complementares, fontes e observações" }
      ]
    },
    {
      id: "cruzeiro-do-sul",
      name: "Faculdade Cruzeiro do Sul – Educação a Distância (EAD) Virtual – Polo Carbonita/MG",
      shortName: "Cruzeiro do Sul",
      category: "Educação Superior",
      fields: [
        { id: "identificacao", group: "Educação Superior", label: "Nome da instituição de nível superior, endereço, contato, dentre outros dados", placeholder: "Informe a identificação e os contatos" },
        { id: "cursos", group: "Educação Superior", label: "Cursos oferecidos, turmas e número de alunos atendidos", placeholder: "Curso / turma / alunos atendidos" },
        { id: "outros", group: "Educação Superior", label: OTHER_RELEVANT, placeholder: "Inclua informações complementares, fontes e observações" }
      ]
    }
  ];

  const elements = {
    editorTab: document.querySelector("#editor-tab"),
    archiveTab: document.querySelector("#archive-tab"),
    editorView: document.querySelector("#editor-view"),
    archiveView: document.querySelector("#archive-view"),
    institutionSelect: document.querySelector("#institution-select"),
    institutionCategory: document.querySelector("#institution-category"),
    institutionShortName: document.querySelector("#institution-short-name"),
    paperInstitution: document.querySelector("#paper-institution"),
    paperCategory: document.querySelector("#paper-category"),
    printInstitution: document.querySelector("#print-institution"),
    printDate: document.querySelector("#print-date"),
    dynamicFields: document.querySelector("#dynamic-fields"),
    reportTitle: document.querySelector("#report-title"),
    referenceDate: document.querySelector("#reference-date"),
    responsible: document.querySelector("#responsible"),
    progressText: document.querySelector("#progress-text"),
    progressTrack: document.querySelector("#progress-track"),
    progressBar: document.querySelector("#progress-bar"),
    reportStatusBadge: document.querySelector("#report-status-badge"),
    saveStatus: document.querySelector("#save-status"),
    saveReport: document.querySelector("#save-report"),
    reportCount: document.querySelector("#report-count"),
    reportSearch: document.querySelector("#report-search"),
    archiveContent: document.querySelector("#archive-content"),
    deleteDialog: document.querySelector("#delete-dialog"),
    deleteDescription: document.querySelector("#delete-description"),
    confirmDelete: document.querySelector("#confirm-delete"),
    toastRegion: document.querySelector("#toast-region")
  };

  let db;
  let reports = [];
  let editingId = null;
  let deleteId = null;

  function getInstitution(id = elements.institutionSelect.value) {
    return institutions.find((institution) => institution.id === id) || institutions[0];
  }

  function today() {
    const now = new Date();
    const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    return local.toISOString().slice(0, 10);
  }

  function formatDate(value) {
    if (!value) return "Sem data";
    const [year, month, day] = value.slice(0, 10).split("-");
    return `${day}/${month}/${year}`;
  }

  function escapeHtml(value = "") {
    return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character]));
  }

  function openDatabase() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("diagnosticoEducacionalDB", 1);
      request.onupgradeneeded = () => {
        const database = request.result;
        if (!database.objectStoreNames.contains("reports")) {
          const store = database.createObjectStore("reports", { keyPath: "id", autoIncrement: true });
          store.createIndex("updatedAt", "updatedAt");
          store.createIndex("institution", "institution");
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  function databaseOperation(mode, action) {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction("reports", mode);
      const store = transaction.objectStore("reports");
      const request = action(store);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async function loadReports() {
    reports = await databaseOperation("readonly", (store) => store.getAll());
    reports.sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
    elements.reportCount.textContent = reports.length;
    renderArchive();
  }

  function populateInstitutions() {
    elements.institutionSelect.innerHTML = institutions.map((institution) => `<option value="${institution.id}">${escapeHtml(institution.name)}</option>`).join("");
  }

  function renderInstitution(fields = {}) {
    const institution = getInstitution();
    elements.institutionCategory.textContent = institution.category;
    elements.institutionShortName.textContent = institution.shortName;
    elements.paperInstitution.textContent = institution.name;
    elements.paperCategory.textContent = institution.category;
    elements.printInstitution.textContent = institution.name;

    let lastGroup = "";
    elements.dynamicFields.innerHTML = institution.fields.map((field, index) => {
      const showGroup = Boolean(field.group && field.group !== lastGroup);
      if (field.group) lastGroup = field.group;
      const control = field.compact
        ? `<input type="text" data-field-id="${field.id}" value="${escapeHtml(fields[field.id] || "")}" placeholder="${escapeHtml(field.placeholder || "")}">`
        : `<textarea data-field-id="${field.id}" rows="3" placeholder="${escapeHtml(field.placeholder || "")}">${escapeHtml(fields[field.id] || "")}</textarea>`;
      return `${showGroup ? `<div class="field-group"><span>${escapeHtml(field.group)}</span></div>` : ""}<div class="field-wrap"><label class="report-field"><span class="field-index">${String(index + 1).padStart(2, "0")}</span><span class="field-content"><strong>${escapeHtml(field.label)}</strong>${control}</span></label></div>`;
    }).join("");
    updateProgress();
  }

  function collectFields() {
    return [...elements.dynamicFields.querySelectorAll("[data-field-id]")].reduce((result, field) => {
      result[field.dataset.fieldId] = field.value;
      return result;
    }, {});
  }

  function collectForm() {
    return {
      institution: elements.institutionSelect.value,
      title: elements.reportTitle.value.trim(),
      referenceDate: elements.referenceDate.value,
      responsible: elements.responsible.value.trim(),
      fields: collectFields()
    };
  }

  function updateProgress() {
    const institution = getInstitution();
    const fields = collectFields();
    const completed = institution.fields.filter((field) => fields[field.id] && fields[field.id].trim()).length;
    const percentage = institution.fields.length ? Math.round(completed / institution.fields.length * 100) : 0;
    elements.progressText.textContent = `${completed} de ${institution.fields.length}`;
    elements.progressBar.style.width = `${percentage}%`;
    elements.progressTrack.setAttribute("aria-valuenow", String(percentage));
  }

  function setSaveState(text, busy = false) {
    elements.saveStatus.textContent = text;
    elements.saveReport.disabled = busy;
  }

  function resetForm(keepInstitution = true) {
    const selected = keepInstitution ? elements.institutionSelect.value : institutions[0].id;
    editingId = null;
    elements.institutionSelect.value = selected;
    elements.reportTitle.value = "Memorando para diagnóstico educacional";
    elements.referenceDate.value = today();
    elements.responsible.value = "";
    elements.reportStatusBadge.textContent = "Novo relatório";
    elements.saveReport.innerHTML = "<span aria-hidden=\"true\">✓</span> Salvar relatório";
    setSaveState("Ainda não salvo");
    renderInstitution();
    updatePrintDate();
    showView("editor");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showView(view) {
    const editor = view === "editor";
    elements.editorView.hidden = !editor;
    elements.archiveView.hidden = editor;
    elements.editorView.classList.toggle("hidden", !editor);
    elements.archiveView.classList.toggle("hidden", editor);
    elements.editorTab.classList.toggle("active", editor);
    elements.archiveTab.classList.toggle("active", !editor);
    elements.editorTab.toggleAttribute("aria-current", editor);
    elements.archiveTab.toggleAttribute("aria-current", !editor);
    if (!editor) renderArchive();
  }

  function updatePrintDate() {
    elements.printDate.textContent = `Data de referência: ${formatDate(elements.referenceDate.value)}`;
  }

  async function saveCurrentReport() {
    const data = collectForm();
    if (!data.title || !data.referenceDate) {
      toast("Preencha o título e a data de referência.", "error");
      return;
    }

    setSaveState("Salvando…", true);
    const now = new Date().toISOString();
    try {
      if (editingId) {
        const current = reports.find((report) => report.id === editingId);
        const updated = { ...current, ...data, id: editingId, updatedAt: now };
        await databaseOperation("readwrite", (store) => store.put(updated));
        toast("Alterações salvas.");
      } else {
        const created = { ...data, createdAt: now, updatedAt: now };
        editingId = await databaseOperation("readwrite", (store) => store.add(created));
        toast("Relatório salvo.");
      }
      elements.reportStatusBadge.textContent = `Relatório #${editingId}`;
      elements.saveReport.innerHTML = "<span aria-hidden=\"true\">✓</span> Salvar alterações";
      setSaveState("Alterações armazenadas");
      await loadReports();
    } catch (error) {
      console.error(error);
      setSaveState("Não foi possível salvar");
      toast("Não foi possível salvar o relatório neste navegador.", "error");
    }
  }

  function editReport(id, printAfter = false) {
    const report = reports.find((item) => item.id === id);
    if (!report) return;
    editingId = report.id;
    elements.institutionSelect.value = report.institution;
    elements.reportTitle.value = report.title;
    elements.referenceDate.value = report.referenceDate;
    elements.responsible.value = report.responsible || "";
    elements.reportStatusBadge.textContent = `Relatório #${report.id}`;
    elements.saveReport.innerHTML = "<span aria-hidden=\"true\">✓</span> Salvar alterações";
    setSaveState("Pronto para atualizar");
    renderInstitution(report.fields || {});
    updatePrintDate();
    showView("editor");
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (printAfter) window.setTimeout(() => window.print(), 120);
  }

  function requestDelete(id) {
    const report = reports.find((item) => item.id === id);
    if (!report) return;
    deleteId = id;
    elements.deleteDescription.textContent = `“${report.title}” será removido permanentemente. Esta ação não pode ser desfeita.`;
    if (typeof elements.deleteDialog.showModal === "function") elements.deleteDialog.showModal();
    else if (window.confirm(elements.deleteDescription.textContent)) deleteReport(id);
  }

  async function deleteReport(id) {
    try {
      await databaseOperation("readwrite", (store) => store.delete(id));
      if (editingId === id) resetForm();
      await loadReports();
      toast("Relatório excluído.");
    } catch (error) {
      console.error(error);
      toast("Não foi possível excluir o relatório.", "error");
    }
  }

  function renderArchive() {
    const query = elements.reportSearch.value.trim().toLocaleLowerCase("pt-BR");
    const filtered = reports.filter((report) => {
      const institution = getInstitution(report.institution);
      return `${report.title} ${report.responsible || ""} ${institution.name}`.toLocaleLowerCase("pt-BR").includes(query);
    });

    if (!filtered.length) {
      elements.archiveContent.innerHTML = `<div class="archive-state"><div class="empty-icon">▤</div><h2>${query ? "Nenhum resultado encontrado" : "Nenhum relatório salvo"}</h2><p>${query ? "Tente buscar usando outro termo." : "Comece preenchendo o primeiro memorando institucional."}</p>${query ? "" : '<button class="button primary" data-action="new">＋ Criar relatório</button>'}</div>`;
      return;
    }

    elements.archiveContent.innerHTML = `<div class="report-list">${filtered.map((report) => {
      const institution = getInstitution(report.institution);
      const completed = institution.fields.filter((field) => report.fields && report.fields[field.id] && report.fields[field.id].trim()).length;
      return `<article class="report-card"><div class="report-card-icon" aria-hidden="true">▤</div><div class="report-card-main"><div class="report-card-title"><h2>${escapeHtml(report.title)}</h2><span class="badge">${completed}/${institution.fields.length} campos</span></div><p>${escapeHtml(institution.name)}</p><div class="report-card-meta"><span>▣ ${formatDate(report.referenceDate)}</span>${report.responsible ? `<span>● ${escapeHtml(report.responsible)}</span>` : ""}</div></div><div class="report-card-actions"><button class="button secondary" data-action="edit" data-id="${report.id}">Editar</button><button class="button ghost" data-action="print" data-id="${report.id}" aria-label="Imprimir ${escapeHtml(report.title)}">⎙</button><button class="button ghost danger-ghost" data-action="delete" data-id="${report.id}" aria-label="Excluir ${escapeHtml(report.title)}">⌫</button></div></article>`;
    }).join("")}</div>`;
  }

  function toast(message, type = "success") {
    const item = document.createElement("div");
    item.className = `toast ${type}`;
    item.textContent = message;
    elements.toastRegion.appendChild(item);
    window.setTimeout(() => item.remove(), 3500);
  }

  function bindEvents() {
    elements.editorTab.addEventListener("click", () => showView("editor"));
    elements.archiveTab.addEventListener("click", () => showView("archive"));
    document.querySelector("#new-report-top").addEventListener("click", () => resetForm());
    document.querySelector("#new-report-archive").addEventListener("click", () => resetForm());
    document.querySelector("#print-report").addEventListener("click", () => window.print());
    elements.saveReport.addEventListener("click", saveCurrentReport);
    elements.referenceDate.addEventListener("change", updatePrintDate);
    elements.dynamicFields.addEventListener("input", updateProgress);
    elements.reportSearch.addEventListener("input", renderArchive);

    elements.institutionSelect.addEventListener("change", () => {
      editingId = null;
      elements.reportStatusBadge.textContent = "Novo relatório";
      elements.saveReport.innerHTML = "<span aria-hidden=\"true\">✓</span> Salvar relatório";
      setSaveState("Ainda não salvo");
      renderInstitution();
    });

    elements.archiveContent.addEventListener("click", (event) => {
      const button = event.target.closest("[data-action]");
      if (!button) return;
      const id = Number(button.dataset.id);
      if (button.dataset.action === "new") resetForm();
      if (button.dataset.action === "edit") editReport(id);
      if (button.dataset.action === "print") editReport(id, true);
      if (button.dataset.action === "delete") requestDelete(id);
    });

    elements.confirmDelete.addEventListener("click", () => {
      if (deleteId) deleteReport(deleteId);
      deleteId = null;
    });

    window.addEventListener("beforeprint", () => {
      document.querySelectorAll("#report-paper textarea").forEach((textarea) => {
        textarea.dataset.previousHeight = textarea.style.height;
        textarea.style.height = `${textarea.scrollHeight}px`;
      });
    });

    window.addEventListener("afterprint", () => {
      document.querySelectorAll("#report-paper textarea").forEach((textarea) => {
        textarea.style.height = textarea.dataset.previousHeight || "";
        delete textarea.dataset.previousHeight;
      });
    });
  }

  async function initialize() {
    populateInstitutions();
    elements.referenceDate.value = today();
    renderInstitution();
    updatePrintDate();
    bindEvents();
    try {
      db = await openDatabase();
      await loadReports();
    } catch (error) {
      console.error(error);
      toast("O banco de dados do navegador não pôde ser iniciado.", "error");
      elements.saveReport.disabled = true;
    }
  }

  initialize();
})();
