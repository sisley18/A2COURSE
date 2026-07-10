document.addEventListener('DOMContentLoaded', () => {
    console.log('A2 English for Services — App Initialized');
    initAudioEngine();
    renderCurriculum();
    setupNavigation();
    setupProtection();
    initAttendance();
    initPayments();
});

// ─── Content Protection ─────────────────────────────────────────────────────
function setupProtection() {
    document.addEventListener('contextmenu', e => { e.preventDefault(); showProtectionMessage(); });
    document.addEventListener('copy',  e => { e.preventDefault(); showProtectionMessage(); });
    document.addEventListener('cut',   e => { e.preventDefault(); showProtectionMessage(); });
    document.addEventListener('keydown', e => {
        if (e.ctrlKey && ['c','p','s','u'].includes(e.key)) { e.preventDefault(); showProtectionMessage(); }
        if (e.key === 'F12') { e.preventDefault(); showProtectionMessage(); }
    });
    const overlay = document.getElementById('protection-overlay');
    if (overlay) overlay.addEventListener('click', () => overlay.style.display = 'none');
}
function showProtectionMessage() {
    const overlay = document.getElementById('protection-overlay');
    if (overlay) { overlay.style.display = 'flex'; setTimeout(() => overlay.style.display = 'none', 3000); }
}

// ─── Navigation ──────────────────────────────────────────────────────────────
let currentUnitIndex = 0;
function setupNavigation() {
    document.querySelectorAll('.unit-block').forEach((block, index) => {
        block.addEventListener('toggle', () => { if (block.open) currentUnitIndex = index; });
    });
}
window.navigateUnit = function(direction) {
    const units = document.querySelectorAll('.unit-block');
    if (units[currentUnitIndex]) units[currentUnitIndex].open = false;
    currentUnitIndex = (currentUnitIndex + direction + units.length) % units.length;
    if (units[currentUnitIndex]) {
        units[currentUnitIndex].open = true;
        units[currentUnitIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

// ─── Curriculum Renderer ─────────────────────────────────────────────────────

function renderProgressTestHTML(testObj, unitId) {
    return `
    <div class="section-block progress-test-block" style="background: linear-gradient(135deg, rgba(251,191,36,0.1), rgba(245,158,11,0.15)); padding: 25px; border-radius: 20px; border: 2px solid var(--accent-gold); margin-top: 30px; box-shadow: 0 4px 15px rgba(245, 158, 11, 0.15);">
        <h4 style="color: var(--accent-gold); margin-bottom: 20px; display: flex; align-items: center; gap: 10px; font-size: 1.2rem; font-weight: 800;">
            <span style="font-size: 1.5rem;">🏆</span> ${testObj.title}
        </h4>
        
        <!-- 1. Listening Assessment -->
        ${testObj.listening ? `
        <div style="margin-bottom: 20px; background: rgba(0,0,0,0.3); padding: 20px; border-radius: 16px; border: 1px solid rgba(251,191,36,0.25);">
            <h5 style="color: var(--accent-gold); margin-top: 0; margin-bottom: 12px; display: flex; align-items: center; gap: 6px; font-size: 1rem; font-weight: 800;">
                <span>🎧</span> Listening Assessment
            </h5>
            <div class="player-controls" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px; background: rgba(0,0,0,0.25); padding: 10px; border-radius: 8px; border: 1px solid rgba(251,191,36,0.2);">
                <button class="play-btn" style="width: 36px; height: 36px; border-radius: 50%; font-size: 1rem; cursor: pointer; border: none; background: var(--accent-gold); color: black;" onclick="playAudio('${testObj.listening.transcript.replace(/'/g, "\\'")}')">🔊</button>
                <span style="font-size: 0.9rem; color: #fed7aa; font-weight: 600;">Play Audio Track (American Accent)</span>
            </div>
            ${testObj.listening.questions.map((lq, lqi) => `
                <div style="margin-bottom: 12px;">
                    <p style="font-weight: 700; font-size: 0.9rem; margin-bottom: 6px; color: #f3f4f6;">L${lqi+1}. ${lq.q}</p>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                        ${lq.options.map((opt, oi) => `
                            <button class="btn" style="padding: 6px 12px; font-size: 0.8rem;" onclick="selectProgressTestListeningAnswer(this, ${oi === lq.correct}, '${unitId}', ${lqi})">${opt}</button>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
        ` : ''}

        <p style="font-size: 0.95rem; color: #fed7aa; margin-bottom: 20px; font-weight: 700; border-top: 1px dashed rgba(251,191,36,0.3); padding-top: 15px;">
            📝 Core Evaluation Questions:
        </p>
        <div id="progress-test-questions-${unitId}">
            ${testObj.questions.map((q, qi) => `
                <div style="margin-bottom: 18px; background: rgba(0,0,0,0.3); padding: 15px; border-radius: 12px; border: 1px solid rgba(251,191,36,0.25);">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <p style="font-weight: 700; font-size: 0.95rem; margin-bottom: 10px; color: #f3f4f6; flex: 1;">${qi+1}. ${q.q}</p>
                        <button class="play-btn" style="width: 24px; height: 24px; font-size: 0.7rem; margin-left: 10px;" onclick="playAudio('${q.q.replace(/'/g, "\\'")}')">🔊</button>
                    </div>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                        ${q.options.map((opt, oi) => `
                            <button class="btn pt-option-btn" style="padding: 8px 16px; font-size: 0.85rem; border-color: rgba(251,191,36,0.4);" onclick="selectProgressTestAnswer(this, ${oi === q.correct}, '${unitId}', ${qi})">${opt}</button>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>

        <!-- 3. Oral Assessment Situation -->
        ${testObj.speaking ? `
        <div style="margin-top: 20px; background: rgba(239, 68, 68, 0.1); padding: 20px; border-radius: 16px; border: 1px solid rgba(239, 68, 68, 0.3); margin-bottom: 15px;">
            <h5 style="color: #f87171; margin-top: 0; margin-bottom: 10px; display: flex; align-items: center; gap: 6px; font-size: 1rem; font-weight: 800;">
                <span>🗣️</span> Oral Assessment Situation
            </h5>
            <p style="font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; color: #f3f4f6;">${testObj.speaking.prompt}</p>
            <p style="font-size: 0.85rem; color: #9ca3af; font-style: italic; margin-bottom: 12px;">${testObj.speaking.promptEs}</p>
            <div style="margin-top: 10px;">
                <label style="display: block; font-weight: bold; font-size: 0.85rem; color: #f87171; margin-bottom: 5px;">Your Written Response (Tu respuesta escrita):</label>
                <textarea id="pt-speaking-text-${unitId}" rows="3" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid rgba(239, 68, 68, 0.3); background: rgba(0,0,0,0.3); color: #fff; font-family: inherit; font-size: 0.9rem; outline: none; resize: vertical;" placeholder="Type your response here..."></textarea>
            </div>
        </div>
        ` : ''}

        <div style="margin-top: 25px; text-align: center;">
            <button class="btn pt-submit-btn" id="btn-submit-pt-${unitId}" style="background: var(--accent-gold); color: #1e1b4b; padding: 12px 24px; font-size: 1.1rem; border: none; font-weight: bold; width: 100%;" onclick="submitAndScoreProgressTest('${unitId}')">
                ✅ SUBMIT AND SCORE TEST
            </button>
        </div>

        <div id="pt-result-${unitId}" style="margin-top: 20px; display: none; padding: 15px; border-radius: 12px; font-weight: bold; text-align: center;"></div>
        <button class="btn btn-primary" id="btn-send-pt-${unitId}" style="width: 100%; justify-content: center; background: #25D366; margin-top: 15px; display: none; border: none; font-weight: 700;" onclick="sendProgressTestToWhatsApp('${unitId}')">
            SEND TEST RESULTS TO TEACHER 📱
        </button>
    </div>
    `;
}

function renderCurriculum() {
    const container = document.getElementById('curriculum-container');
    if (!container) return;
    container.innerHTML = '';

    courseData.units.forEach(unit => {
        let secLabels = ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1'];
        let secIdx = 0;
        const savedDate = localStorage.getItem('a2_completed_u' + unit.id);
        const isCompleted = !!savedDate;

        const unitBlock = document.createElement('details');
        unitBlock.className = 'unit-block';

        unitBlock.innerHTML = `
            <summary class="unit-header">
                <div style="display:flex; align-items:center; gap:4px;">
                    <span class="unit-emoji">${unit.emoji || '🍽️'}</span>
                    <div>
                        <span class="unit-subtitle">Unit ${unit.id} • A2</span>
                        <span class="unit-title">${unit.title}</span>
                    </div>
                </div>
            </summary>
            <div class="unit-body">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:20px; background:rgba(16, 185, 129, 0.1); border:1px solid rgba(16, 185, 129, 0.3); padding:12px 15px; border-radius:8px;">
                    <label style="font-size:0.95rem; cursor:pointer; display:flex; align-items:center; gap:8px; color:#a7f3d0; font-weight:600;">
                        <input type="checkbox" id="chk_u${unit.id}" onchange="toggleUnitCompletion(${unit.id}, this.checked)" ${isCompleted ? 'checked' : ''} style="width:18px;height:18px;accent-color:#6366f1;"> 
                        <span>✅ Completed in Class</span>
                    </label>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:0.85rem; color:#a7f3d0;">Date:</span>
                        <input type="date" id="date_u${unit.id}" onchange="saveUnitDate(${unit.id}, this.value)" value="${savedDate || ''}" style="background:rgba(0,0,0,0.3); border:1px solid rgba(16, 185, 129, 0.4); color:#fff; padding:4px 8px; border-radius:4px; font-size:0.85rem; outline:none; color-scheme:dark;">
                    </div>
                </div>

                <p style="opacity:0.75; margin-bottom:28px; border-bottom:1px solid rgba(255,255,255,0.15); padding-bottom:14px; font-size:1rem;">
                    🎯 <strong>Topic:</strong> ${unit.topic}
                </p>

                <!-- 0.2 Revision Section -->
                ${unit.revision ? `
                <div class="section-block" style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 16px; border: 1px solid rgba(59, 130, 246, 0.3); margin-bottom: 30px;">
                    <h4 style="color: #60a5fa; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                        <span style="background: #3b82f6; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem;">🔄</span>
                        Fill in the Blanks (Revision)
                    </h4>
                    <div id="revision-container-${unit.id}">
                    ${unit.revision.map((sentence, idx) => `
                        <div style="margin-bottom: 15px; background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);" class="rev-item">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                <span style="font-size: 0.95rem; font-weight: 500; color: #f3f4f6;">
                                    ${idx+1}. ${sentence.template ? sentence.template.replace(/\[([^\]]+)\]/g, '<input type="text" class="rev-input" style="width: 80px; border: none; border-bottom: 2px solid #3b82f6; background: transparent; text-align: center; font-weight: bold; color: #60a5fa; outline: none; margin: 0 4px;" placeholder="?" />') : sentence.eng}
                                </span>
                                <button class="play-btn" style="width: 28px; height: 28px; font-size: 0.8rem; border-radius: 50%;" onclick="playAudio('${sentence.eng.replace(/'/g, "\\'")}')">🔊</button>
                            </div>
                            <div style="font-size: 0.85rem; color: #9ca3af; font-style: italic;">${sentence.esp}</div>
                        </div>
                    `).join('')}
                    </div>
                    <button class="btn btn-primary" style="width: 100%; justify-content: center; background: #25D366; margin-top: 10px; border: none; font-weight: 700;" onclick="sendRevisionToWhatsApp(${unit.id})">
                        SEND TO TEACHER 📱
                    </button>
                </div>
                ` : ''}

                <!-- 1. Vocabulary -->
                <div class="section-block">
                    <span class="section-label vocabulary">${secLabels[secIdx++]}. 📖 Vocabulary</span>
                    <h3 style="margin-bottom:6px;">Key Words & Phrases</h3>
                    <p style="margin-bottom:15px; opacity:0.75; font-size:0.95rem;">🔊 Click the speaker icon to hear each word in American English:</p>
                    <div class="vocab-grid">
                        ${unit.vocabulary.map(v => `
                            <div class="vocab-card">
                                <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
                                    <button class="play-btn" style="width:34px;height:34px;font-size:0.95rem;flex-shrink:0;"
                                        onclick="playAudio('${escQ(v.word)}')">🔊</button>
                                    <strong>${v.word}</strong>
                                </div>
                                ${v.ipa ? `<p style="font-family:'Lucida Sans Unicode',monospace;color:#fed7aa;font-size:0.9rem;margin-bottom:6px;">/${v.ipa}/</p>` : ''}
                                <p style="opacity:0.85;font-size:0.95rem;">${v.def}</p>
                                ${v.def_es ? `<p style="font-size:0.88rem;color:#86efac;margin-top:3px;">🇦🇷 <em>${v.def_es}</em></p>` : ''}
                                ${v.example ? `<p style="margin-top:6px;font-style:italic;opacity:0.7;font-size:0.9rem;">"${v.example}"</p>` : ''}
                            </div>
                        `).join('')}
                    </div>
                    ${compBar(unit.id, 'vocabulary')}
                </div>

                <!-- 2. Listening -->
                <div class="section-block">
                    <span class="section-label listening">${secLabels[secIdx++]}. 🎧 Listening</span>
                    <h3 style="margin-bottom:10px;">${unit.listening.title}</h3>
                    <div class="tip-box" style="margin-bottom:16px;">
                        <strong>💡 Before you listen:</strong> ${unit.listening.preListening}
                    </div>
                    <div class="player-controls">
                        <button class="play-btn" onclick="playAudio('${escQ(unit.listening.transcript)}')">▶</button>
                        <span style="font-size:0.9rem; opacity:0.85;">🔊 Play Audio Track — American English</span>
                    </div>
                    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:12px;">
                        <button class="btn" style="border:1px solid rgba(255,255,255,0.3);font-size:0.8rem;padding:6px 18px;"
                            onclick="toggleTranscript(this)">📄 Show Transcript</button>
                        ${unit.listening.transcriptEs ? `<button class="btn" style="border:1px solid rgba(134,239,172,0.4);font-size:0.8rem;padding:6px 18px;color:#86efac;"
                            onclick="toggleTranslation(this)">🇦🇷 Traducción</button>` : ''}
                    </div>
                    <div class="transcript-box" style="display:none;">
                        ${unit.listening.transcript}
                    </div>
                    ${unit.listening.transcriptEs ? `<div class="transcript-box" style="display:none;border-color:rgba(134,239,172,0.3);background:rgba(134,239,172,0.05);">
                        <p style="font-size:0.8rem;color:#86efac;margin-bottom:8px;font-weight:600;">🇦🇷 Traducción al español:</p>
                        ${unit.listening.transcriptEs}
                    </div>` : ''}
                    <div style="margin-top:20px;">
                        <h4 style="margin-bottom:14px; color:var(--accent-gold);">🧠 Comprehension Questions</h4>
                        ${renderQuiz(unit.listening.questions)}
                    </div>
                    ${compBar(unit.id, 'listening')}
                </div>

                <!-- 3. Dialogue / Speaking Practice -->
                <div class="section-block">
                    <span class="section-label dialogue">${secLabels[secIdx++]}. 🗣️ Dialogue</span>
                    <h3 style="margin-bottom:10px;">${unit.dialogue.title}</h3>
                    <p style="opacity:0.75; margin-bottom:16px; font-size:0.95rem;">${unit.dialogue.situation}</p>
                    <div class="dialogue-box">
                        ${unit.dialogue.lines.map(line => `
                            <div class="dialogue-line">
                                <span class="dialogue-speaker">${line.speaker}</span>
                                <div>
                                    <span class="dialogue-text">${line.text}</span>
                                    <button class="play-btn" style="width:28px;height:28px;font-size:0.8rem;margin-left:10px;display:inline-flex;vertical-align:middle;"
                                        onclick="playAudio('${escQ(line.text)}')">🔊</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="tip-box">
                        <strong>🎤 Now you try!</strong> ${unit.dialogue.practicePrompt}
                    </div>
                    ${compBar(unit.id, 'dialogue')}
                </div>

                <!-- 4. Grammar -->
                <div class="section-block">
                    <span class="section-label grammar">${secLabels[secIdx++]}. 📐 Grammar</span>
                    <h3 style="margin-bottom:10px;">${unit.grammar.title}</h3>
                    <div class="theory-box">
                        <h4>📚 Grammar Point</h4>
                        <p>${unit.grammar.explanation}</p>
                        <p><strong>Examples:</strong></p>
                        <ul>
                            ${unit.grammar.examples.map(ex => `
                                <li style="margin-bottom:6px;">
                                    <span style="color:#fed7aa; font-weight:600;">${ex}</span>
                                    <button class="play-btn" style="width:26px;height:26px;font-size:0.75rem;margin-left:8px;display:inline-flex;vertical-align:middle;"
                                        onclick="playAudio('${escQ(ex)}')">🔊</button>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    <div style="margin-top:18px;">
                        <h4 style="margin-bottom:14px; color:var(--accent-gold);">✏️ Practice Exercises</h4>
                        ${unit.grammar.exercises.map((q, idx) => `
                            <div style="margin-bottom:16px; padding:16px; background:rgba(0,0,0,0.2); border-radius:10px;">
                                <p style="font-weight:600; margin-bottom:10px;">${idx+1}. ${q.question}</p>
                                <div class="options-grid" style="justify-content:flex-start;">
                                    ${q.options.map((opt, i) => `
                                        <button class="btn" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.15);font-size:0.9rem;padding:8px 18px;"
                                            onclick="checkAnswer(this, ${i === q.correct})">${opt}</button>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    ${compBar(unit.id, 'grammar')}
                </div>

                <!-- 5. Oral Practice in Context -->
                ${unit.oralPractice ? renderOralPractice(unit.oralPractice, secLabels[secIdx++], unit.id) : ''}

                <!-- 6. Speaking Tasks -->
                <div class="section-block">
                    <span class="section-label speaking">${secLabels[secIdx++]}. 🎤 Speaking</span>
                    <h3 style="margin-bottom:10px;">Speaking Tasks</h3>
                    ${unit.speaking.map((task, idx) => {
                        const spId = 'sp_' + unit.id + '_' + idx;
                        return `
                        <div style="background:rgba(0,0,0,0.2);padding:20px;border-radius:12px;margin-bottom:16px;border-left:4px solid #fb923c;">
                            <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
                                <span style="font-size:1.8rem;">${task.icon || '🎙️'}</span>
                                <h4 style="margin:0;">Task ${idx + 1}: ${task.type}</h4>
                            </div>
                            <p style="margin-bottom:6px;">${task.prompt}</p>
                            ${task.promptEs ? `
                                <div style="margin-bottom:10px;">
                                    <button class="btn" style="font-size:0.78rem;padding:4px 12px;border:1px solid rgba(134,239,172,0.4);color:#86efac;"
                                        onclick="toggleOralTranslate('${spId}_prompt_tr')">🇦🇷 Traducir consigna</button>
                                    <span id="${spId}_prompt_tr" style="display:none;font-size:0.88rem;color:#86efac;margin-top:5px;font-style:italic;display:none;">→ ${task.promptEs}</span>
                                </div>
                            ` : ''}
                            ${task.model ? `
                                <div class="tip-box" style="margin-bottom:10px;">
                                    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:6px;">
                                        <strong>Model Answer:</strong>
                                        <button class="play-btn" style="width:28px;height:28px;font-size:0.8rem;display:inline-flex;"
                                            onclick="playAudio('${escQ(task.model)}')">🔊</button>
                                        ${task.modelEs ? `
                                            <button class="btn" style="font-size:0.78rem;padding:4px 12px;border:1px solid rgba(134,239,172,0.4);color:#86efac;"
                                                onclick="toggleOralTranslate('${spId}_model_tr')">🇦🇷 Traducir</button>
                                        ` : ''}
                                    </div>
                                    <em style="opacity:0.85;">"${task.model}"</em>
                                    ${task.modelEs ? `
                                        <div id="${spId}_model_tr" style="display:none;margin-top:6px;font-size:0.88rem;color:#86efac;font-style:italic;border-top:1px solid rgba(134,239,172,0.2);padding-top:6px;">
                                            → ${task.modelEs}
                                        </div>
                                    ` : ''}
                                </div>
                            ` : ''}
                            <textarea placeholder="✍️ Write your answer here to practice..." style="margin-top:8px;" rows="3"></textarea>
                        </div>`;}
                    ).join('')}
                    ${compBar(unit.id, 'speaking')}
                </div>

                <!-- 7. Review Fill-in-the-Blanks (previous unit) -->
                ${unit.review ? `
                <div class="section-block">
                    <span class="section-label practice" style="background:rgba(251,191,36,0.2);color:#fed7aa;border:1px solid rgba(251,191,36,0.4);">${secLabels[secIdx++]}. 📝 Review — Fill in the Blanks</span>
                    <h3 style="margin-bottom:6px;">Reviewing Previous Unit Vocabulary</h3>
                    <p style="opacity:0.75;margin-bottom:18px;font-size:0.9rem;">Complete each sentence with the correct word from the previous unit.</p>
                    ${unit.review.map((item, idx) => `
                        <div style="margin-bottom:14px; padding:14px 18px; background:rgba(0,0,0,0.2); border-radius:10px;">
                            <p style="font-weight:600; margin-bottom:10px;">${idx+1}. ${item.sentence}</p>
                            <div class="options-grid" style="justify-content:flex-start;">
                                ${item.options.map((opt, i) => `
                                    <button class="btn" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.15);font-size:0.9rem;padding:8px 18px;"
                                        onclick="checkAnswer(this, ${i === item.correct})">${opt}</button>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                    ${compBar(unit.id, 'review')}
                </div>
                ` : ''}

                <!-- 8. Video Resources -->
                ${unit.videos && unit.videos.length > 0 ? `
                <div class="section-block">
                    <span class="section-label" style="background:rgba(255,0,0,0.2);color:#fca5a5;">${secLabels[secIdx++]}. 📺 Videos</span>
                    <h3 style="margin-bottom:8px;">Recommended Videos</h3>
                    <p style="opacity:0.75;margin-bottom:16px;font-size:0.9rem;">Watch these to hear real American English in workplace contexts:</p>
                    <div style="display:grid;gap:14px;">
                        ${unit.videos.map(v => `
                            <a href="${v.url}" target="_blank" rel="noopener noreferrer"
                               style="display:flex;align-items:center;gap:15px;background:rgba(0,0,0,0.2);padding:14px 18px;border-radius:12px;text-decoration:none;color:#fff;border:1px solid rgba(255,255,255,0.15);transition:all 0.3s ease;"
                               onmouseover="this.style.background='rgba(255,255,255,0.1)';this.style.borderColor='var(--accent-gold)'"
                               onmouseout="this.style.background='rgba(0,0,0,0.2)';this.style.borderColor='rgba(255,255,255,0.15)'">
                                <span style="font-size:1.8rem;">▶️</span>
                                <div>
                                    <h4 style="margin:0 0 4px;color:var(--accent-gold);">${v.title}</h4>
                                    <p style="margin:0;font-size:0.85rem;opacity:0.7;">${v.channel} • ${v.duration}</p>
                                </div>
                            </a>
                        `).join('')}
                    </div>
                    ${compBar(unit.id, 'videos')}
                </div>
                ` : ''}

                <!-- 9. Video Exercise -->
                ${unit.videoExercise ? renderVideoExercise(unit.videoExercise, unit.id, unit.title, secLabels[secIdx++]) : ''}

                <!-- Progress Test (Every 4 units) -->
                ${unit.progressTest ? renderProgressTestHTML(unit.progressTest, unit.id) : ''}
                
                <!-- Progress Test B -->
                ${unit.progressTestB ? renderProgressTestHTML(unit.progressTestB, unit.id + 'B') : ''}

            </div>
        `;
        container.appendChild(unitBlock);
    });
}

window.toggleUnitCompletion = function(unitId, isChecked) {
    const dateInput = document.getElementById('date_u' + unitId);
    if (isChecked) {
        const today = new Date().toISOString().substr(0, 10);
        dateInput.value = today;
        localStorage.setItem('a2_completed_u' + unitId, today);
    } else {
        dateInput.value = '';
        localStorage.removeItem('a2_completed_u' + unitId);
    }
};

window.saveUnitDate = function(unitId, dateStr) {
    const chk = document.getElementById('chk_u' + unitId);
    if (dateStr) {
        chk.checked = true;
        localStorage.setItem('a2_completed_u' + unitId, dateStr);
    } else {
        chk.checked = false;
        localStorage.removeItem('a2_completed_u' + unitId);
    }
};

function escQ(str) {
    return (str || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

// ─── Section Completion Bar ───────────────────────────────────────────────────
function compBar(unitId, sec) {
    const key = 'a2_sec_u' + unitId + '_' + sec;
    const saved = localStorage.getItem(key) || '';
    const checked = saved ? 'checked' : '';
    return `
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;
        margin-top:18px;padding:9px 14px;background:rgba(16,185,129,0.08);
        border:1px solid rgba(16,185,129,0.25);border-radius:8px;">
        <label style="display:flex;align-items:center;gap:7px;cursor:pointer;font-size:0.88rem;color:#a7f3d0;font-weight:600;">
            <input type="checkbox" onchange="saveSecCompletion('${key}',this.checked,'secdate_${key}')"
                ${checked} style="width:16px;height:16px;accent-color:#10b981;cursor:pointer;">
            ✅ Done
        </label>
        <div style="display:flex;align-items:center;gap:6px;">
            <span style="font-size:0.8rem;color:#a7f3d0;">Fecha:</span>
            <input type="date" id="secdate_${key}" value="${saved}"
                onchange="saveSecDate('${key}',this.value)"
                style="background:rgba(0,0,0,0.25);border:1px solid rgba(16,185,129,0.35);
                color:#fff;padding:3px 7px;border-radius:4px;font-size:0.82rem;
                outline:none;color-scheme:dark;">
        </div>
    </div>`;
}

window.saveSecCompletion = function(key, isChecked, dateInputId) {
    const dateInput = document.getElementById(dateInputId);
    if (isChecked) {
        const today = new Date().toISOString().substr(0,10);
        if (dateInput) dateInput.value = today;
        localStorage.setItem(key, today);
    } else {
        if (dateInput) dateInput.value = '';
        localStorage.removeItem(key);
    }
};

window.saveSecDate = function(key, dateStr) {
    if (dateStr) {
        localStorage.setItem(key, dateStr);
    } else {
        localStorage.removeItem(key);
    }
};

// ─── Video Exercise Renderer ─────────────────────────────────────────────────
function renderVideoExercise(ve, unitId, unitTitle, secNum) {
    const veId = 've_u' + unitId;
    // Build the WhatsApp share text (English)
    const waLines = ve.questions.map((q, i) => {
        const opts = q.options.map((o, oi) => String.fromCharCode(65+oi) + ') ' + o).join('  ');
        return (i+1) + '. ' + q.q + '\n   ' + opts;
    }).join('\n\n');
    const waText = encodeURIComponent(
        '🎬 *' + ve.title + '* — ' + unitTitle + '\n\n' + waLines + '\n\n✅ Answer key: ' + ve.questions.map((q,i)=>(i+1)+'. '+q.options[q.correct]).join(' | ')
    );
    const waUrl = 'https://wa.me/?text=' + waText;

    return `
    <div class="section-block" id="${veId}_block"
        data-instr-en="${escQ(ve.instruction)}" data-instr-es="${escQ(ve.instructionEs)}">
        <span class="section-label" style="background:rgba(255,60,0,0.18);color:#fca5a5;border:1px solid rgba(255,100,50,0.35);">${secNum}. 🎬 Video Exercise</span>
        <h3 style="margin-bottom:6px;">${ve.title}</h3>

        <!-- Action buttons row -->
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:18px;align-items:center;">
            <button class="btn" id="${veId}_translate_btn"
                style="font-size:0.82rem;padding:7px 16px;border:1px solid rgba(134,239,172,0.4);color:#86efac;"
                onclick="toggleVELanguage('${veId}')">🇦🇷 Traducir ejercicio</button>
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer"
                style="display:inline-flex;align-items:center;gap:7px;font-size:0.82rem;padding:7px 16px;
                background:rgba(37,211,102,0.15);border:1px solid rgba(37,211,102,0.45);color:#4ade80;
                border-radius:8px;text-decoration:none;font-weight:600;cursor:pointer;"
                >📲 Enviar por WhatsApp</a>
        </div>

        <!-- Language state: 0=EN, 1=ES -->
        <div id="${veId}_lang" data-lang="en"></div>

        <p id="${veId}_instruction" style="opacity:0.75;margin-bottom:18px;font-size:0.95rem;">${ve.instruction}</p>

        <div id="${veId}_questions">
        ${ve.questions.map((q, qi) => {
            const qId = veId + '_q' + qi;
            const optBtns = q.options.map((opt, oi) => `
                <button class="btn ve-opt-btn" id="${qId}_o${oi}"
                    data-en="${escQ(opt)}" data-es="${escQ(q.optionsEs[oi])}"
                    style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.2);
                    font-size:0.88rem;padding:7px 18px;margin:3px;"
                    onclick="checkVEAnswer('${qId}',${oi},${q.correct},'${veId}')"
                    >${String.fromCharCode(65+oi)}) ${opt}</button>
            `).join('');
            return `
            <div style="margin-bottom:16px;padding:15px;background:rgba(0,0,0,0.2);border-radius:12px;">
                <p class="ve-question" id="${qId}_text" data-en="${escQ(q.q)}" data-es="${escQ(q.qEs)}"
                    style="font-weight:600;margin-bottom:10px;">${qi+1}. ${q.q}</p>
                <div style="display:flex;flex-wrap:wrap;gap:3px;" id="${qId}_opts">${optBtns}</div>
                <p id="${qId}_fb" style="font-size:0.85rem;min-height:18px;margin-top:6px;"></p>
            </div>`;
        }).join('')}
        </div>
        ${compBar(unitId, 'videoex')}
    </div>`;
}

window.checkVEAnswer = function(qId, chosen, correct, veId) {
    const opts = document.querySelectorAll('#' + qId + '_opts .ve-opt-btn');
    opts.forEach((b, i) => {
        b.style.background = 'rgba(255,255,255,0.05)';
        b.style.borderColor = 'rgba(255,255,255,0.2)';
    });
    const isCorrect = chosen === correct;
    if (opts[chosen]) {
        opts[chosen].style.background = isCorrect ? 'rgba(16,185,129,0.25)' : 'rgba(239,68,68,0.25)';
        opts[chosen].style.borderColor = isCorrect ? '#10b981' : '#ef4444';
    }
    const fb = document.getElementById(qId + '_fb');
    if (fb) {
        fb.textContent = isCorrect ? '✅ Correct! Great job!' : '❌ Not quite — try again!';
        fb.style.color  = isCorrect ? '#10b981' : '#ef4444';
    }
};

window.toggleVELanguage = function(veId) {
    const langEl = document.getElementById(veId + '_lang');
    if (!langEl) return;
    const isES = langEl.dataset.lang === 'es';
    const newLang = isES ? 'en' : 'es';
    langEl.dataset.lang = newLang;

    // Toggle instruction
    const instr = document.getElementById(veId + '_instruction');
    if (instr) {
        const block = document.getElementById(veId + '_block');
        if (block) {
            const en = block.dataset.instrEn;
            const es = block.dataset.instrEs;
            if (en && es) instr.textContent = newLang === 'es' ? es : en;
        }
    }

    // Toggle questions
    const questions = document.querySelectorAll('#' + veId + '_questions [data-en]');
    questions.forEach(el => {
        el.textContent = newLang === 'es'
            ? (el.classList.contains('ve-opt-btn')
                ? el.id.match(/_o(\d+)$/)
                    ? String.fromCharCode(65 + parseInt(el.id.match(/_o(\d+)$/)[1])) + ') ' + el.dataset.es
                    : el.dataset.es
                : el.dataset.es)
            : (el.classList.contains('ve-opt-btn')
                ? el.id.match(/_o(\d+)$/)
                    ? String.fromCharCode(65 + parseInt(el.id.match(/_o(\d+)$/)[1])) + ') ' + el.dataset.en
                    : el.dataset.en
                : el.dataset.en);
    });

    const translateBtn = document.getElementById(veId + '_translate_btn');
    if (translateBtn) translateBtn.textContent = newLang === 'es' ? '🇬🇧 Ver en inglés' : '🇦🇷 Traducir ejercicio';
};

// ─── Oral Practice in Context Renderer ───────────────────────────────────────
function renderOralPractice(op, secNum, unitId) {
    const uid = 'op_' + Math.random().toString(36).substr(2, 8);
    return `
    <div class="section-block">
        <span class="section-label" style="background:rgba(139,92,246,0.2);color:#c4b5fd;border:1px solid rgba(139,92,246,0.4);">${secNum}. 🗣️ Oral Practice in Context</span>
        <h3 style="margin-bottom:6px;">${op.title}</h3>
        <p style="opacity:0.75;margin-bottom:18px;font-size:0.95rem;">${op.instruction}</p>

        ${op.exercises.map((ex, eIdx) => {
            const exId = uid + '_e' + eIdx;
            if (ex.type === 'fill') {
                // Fill-in-the-blank: sentence has ____ placeholder
                const parts = ex.sentence.split('____');
                const opts  = ex.options.map((opt, oIdx) => `
                    <button class="btn" id="${exId}_opt${oIdx}"
                        style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.2);font-size:0.9rem;padding:7px 18px;margin:3px;"
                        onclick="checkFill('${exId}',${oIdx},${ex.correct},'${escQ(ex.answer)}')">${opt}</button>
                `).join('');
                const translateBtn = ex.translation ? `
                    <button class="btn" style="font-size:0.78rem;padding:4px 12px;border:1px solid rgba(134,239,172,0.4);color:#86efac;margin-left:6px;"
                        onclick="toggleOralTranslate('${exId}_tr')">🇦🇷 Traducir</button>
                    <span id="${exId}_tr" style="display:none;font-size:0.88rem;color:#86efac;margin-top:6px;display:none;font-style:italic;">→ ${ex.translation}</span>
                ` : '';
                return `
                <div style="margin-bottom:18px;padding:16px;background:rgba(0,0,0,0.2);border-radius:12px;">
                    <p style="font-size:0.85rem;color:#c4b5fd;font-weight:600;margin-bottom:8px;">✏️ Exercise ${eIdx + 1}: Complete the sentence</p>
                    <p style="font-size:1rem;line-height:1.7;margin-bottom:10px;">
                        ${parts[0]}<span id="${exId}_blank" style="display:inline-block;min-width:80px;border-bottom:2px solid #c4b5fd;text-align:center;padding:0 6px;color:#fde68a;font-weight:700;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>${parts[1] || ''}
                        <button class="play-btn" style="width:26px;height:26px;font-size:0.75rem;margin-left:8px;display:inline-flex;vertical-align:middle;"
                            onclick="playAudio('${escQ(ex.sentence.replace('____', ex.answer))}')">🔊</button>
                        ${translateBtn}
                    </p>
                    <div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px;">${opts}</div>
                    <p id="${exId}_fb" style="font-size:0.85rem;min-height:18px;margin-top:4px;"></p>
                </div>`;
            } else if (ex.type === 'match') {
                // Match speaker to line
                const shuffled = [...ex.options].sort(() => Math.random() - 0.5);
                const matchOpts = shuffled.map((opt, oIdx) => `
                    <button class="btn" id="${exId}_m${oIdx}"
                        style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.2);font-size:0.88rem;padding:6px 16px;margin:3px;"
                        onclick="checkFill('${exId}',${oIdx === shuffled.indexOf(ex.answer) ? oIdx : oIdx},${shuffled.indexOf(ex.answer)},'${escQ(ex.answer)}')">${opt}</button>
                `).join('');
                const translateBtn2 = ex.translation ? `
                    <button class="btn" style="font-size:0.78rem;padding:4px 12px;border:1px solid rgba(134,239,172,0.4);color:#86efac;margin-left:6px;"
                        onclick="toggleOralTranslate('${exId}_tr')">🇦🇷 Traducir</button>
                    <span id="${exId}_tr" style="display:none;font-size:0.88rem;color:#86efac;margin-top:6px;font-style:italic;">→ ${ex.translation}</span>
                ` : '';
                return `
                <div style="margin-bottom:18px;padding:16px;background:rgba(0,0,0,0.2);border-radius:12px;">
                    <p style="font-size:0.85rem;color:#c4b5fd;font-weight:600;margin-bottom:8px;">🔗 Exercise ${eIdx + 1}: Complete the dialogue line</p>
                    <div style="margin-bottom:10px;padding:10px 14px;background:rgba(139,92,246,0.1);border-left:3px solid #7c3aed;border-radius:8px;">
                        <span style="font-size:0.8rem;color:#c4b5fd;font-weight:700;">${ex.speaker}:</span>
                        <span style="margin-left:8px;font-size:0.95rem;">${ex.prompt}</span>
                        <button class="play-btn" style="width:24px;height:24px;font-size:0.7rem;margin-left:8px;display:inline-flex;vertical-align:middle;"
                            onclick="playAudio('${escQ(ex.prompt)}')">🔊</button>
                        ${translateBtn2}
                    </div>
                    <p style="font-size:0.88rem;opacity:0.75;margin-bottom:8px;">👉 Choose the best response:</p>
                    <div style="display:flex;flex-wrap:wrap;gap:4px;" id="${exId}_opts">${matchOpts}</div>
                    <p id="${exId}_fb" style="font-size:0.85rem;min-height:18px;margin-top:6px;"></p>
                </div>`;
            }
            return '';
        }).join('')}
        ${compBar(unitId, 'oral')}
    </div>`;
}

window.checkFill = function(exId, chosenIdx, correctIdx, answer) {
    const fb = document.getElementById(exId + '_fb');
    const blank = document.getElementById(exId + '_blank');
    // Highlight all buttons in this exercise
    const container = fb ? fb.parentElement : null;
    if (container) {
        container.querySelectorAll('.btn').forEach((b, i) => {
            b.style.background = 'rgba(255,255,255,0.05)';
            b.style.borderColor = 'rgba(255,255,255,0.2)';
        });
    }
    const isCorrect = chosenIdx === correctIdx;
    // Find the clicked button (by index among .btn siblings in parent)
    if (container) {
        const btns = container.querySelectorAll('div > .btn, div[id$="_opts"] .btn');
        if (btns[chosenIdx]) {
            btns[chosenIdx].style.background = isCorrect ? 'rgba(16,185,129,0.25)' : 'rgba(239,68,68,0.25)';
            btns[chosenIdx].style.borderColor = isCorrect ? '#10b981' : '#ef4444';
        }
    }
    if (blank) blank.textContent = answer;
    if (fb) {
        fb.textContent = isCorrect ? '✅ Correct! Well done.' : '❌ Not quite. Try again!';
        fb.style.color  = isCorrect ? '#10b981' : '#ef4444';
    }
};

window.toggleOralTranslate = function(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.display = el.style.display === 'none' || el.style.display === '' ? 'inline' : 'none';
};

function renderQuiz(questions) {
    return `<div>${questions.map((q, i) => `
        <div style="margin-bottom:14px; padding:14px; background:rgba(0,0,0,0.15); border-radius:10px;">
            <p style="margin-bottom:8px; font-weight:600;">Q${i+1}: ${q.q}</p>
            <div class="options-grid" style="justify-content:flex-start;">
                ${q.options.map((opt, oIdx) => `
                    <button class="btn" style="padding:6px 16px;font-size:0.85rem;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.15);"
                        onclick="checkAnswer(this, ${oIdx === q.correct})">${opt}</button>
                `).join('')}
            </div>
        </div>
    `).join('')}</div>`;
}

window.toggleTranscript = function(btn) {
    // Find the first transcript-box sibling after the button container
    const btnContainer = btn.parentElement;
    const box = btnContainer.nextElementSibling;
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
    btn.textContent = box.style.display === 'none' ? '📄 Show Transcript' : '📄 Hide Transcript';
};

window.toggleTranslation = function(btn) {
    // Translation box is the second sibling after the button container
    const btnContainer = btn.parentElement;
    const transcriptBox = btnContainer.nextElementSibling;       // transcript box
    const translationBox = transcriptBox ? transcriptBox.nextElementSibling : null; // translation box
    if (!translationBox) return;
    translationBox.style.display = translationBox.style.display === 'none' ? 'block' : 'none';
    btn.textContent = translationBox.style.display === 'none' ? '🇦🇷 Traducción' : '🇦🇷 Ocultar';
};

window.checkAnswer = function(btn, isCorrect) {
    const container = btn.parentElement;
    Array.from(container.children).forEach(b => {
        b.style.background = 'rgba(255,255,255,0.05)';
        b.style.borderColor = 'rgba(255,255,255,0.15)';
        b.style.color = 'inherit';
    });
    if (isCorrect) {
        btn.style.background = 'rgba(16,185,129,0.25)';
        btn.style.borderColor = '#10b981';
    } else {
        btn.style.background = 'rgba(239,68,68,0.25)';
        btn.style.borderColor = '#ef4444';
    }
};

// ─── Universal High-Quality Audio Engine ─────────────────────────────────────
// SpeechSynthesis engine optimized for clear American English on ALL devices
// (phones, tablets, computers) regardless of system language settings.
let audioQueue = [];
let isPlaying = false;
let isPaused = false;
let cachedVoices = [];

function initAudioEngine() {
    if ('speechSynthesis' in window) {
        const loadVoices = () => { cachedVoices = window.speechSynthesis.getVoices(); };
        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }
}

function getBestVoice() {
    if (!cachedVoices.length) cachedVoices = window.speechSynthesis.getVoices();
    const pool = cachedVoices.filter(v => v.lang.startsWith('en'));
    const pref = ['Google US English', 'Microsoft Jenny', 'Microsoft Aria', 'Samantha', 'Alex', 'Zira'];
    for (const kw of pref) { 
        const match = pool.find(v => v.name.includes(kw)); 
        if (match) return match; 
    }
    return pool.find(v => v.lang === 'en-US') || pool[0] || null;
}

function splitTextForTTS(text, maxLen) {
    const chunks = [];
    let rem = text;
    while (rem.length > 0) {
        if (rem.length <= maxLen) { chunks.push(rem); break; }
        let idx = rem.lastIndexOf('. ', maxLen);
        if (idx === -1) idx = rem.lastIndexOf('? ', maxLen);
        if (idx === -1) idx = rem.lastIndexOf('! ', maxLen);
        if (idx === -1) idx = rem.lastIndexOf(', ', maxLen);
        if (idx === -1) idx = rem.lastIndexOf(' ', maxLen);
        if (idx === -1) idx = maxLen;
        chunks.push(rem.substring(0, idx + 1).trim());
        rem = rem.substring(idx + 1).trim();
    }
    return chunks;
}

window.playAudio = function(text) {
    window.stopAudio();
    if (!text || !('speechSynthesis' in window)) return;
    const cleanText = text.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (!cleanText) return;
    audioQueue = splitTextForTTS(cleanText, 180);
    isPaused = false;
    processAudioQueue();
};

function processAudioQueue() {
    if (isPaused || audioQueue.length === 0) {
        isPlaying = audioQueue.length > 0;
        if (audioQueue.length === 0) isPlaying = false;
        return;
    }
    isPlaying = true;
    const text = audioQueue.shift();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'en-US';
    utt.rate = 0.90; // Slower rate to sound more natural and less robotic
    utt.pitch = 1.0;
    
    const voice = getBestVoice();
    if (voice) utt.voice = voice;
    
    utt.onend = () => {
        if (isPlaying && !isPaused) setTimeout(processAudioQueue, 300);
    };
    utt.onerror = () => {
        if (isPlaying && !isPaused) setTimeout(processAudioQueue, 300);
    };
    window.speechSynthesis.speak(utt);
}

window.stopAudio = function() {
    audioQueue = [];
    isPlaying = false;
    isPaused = false;
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    updatePauseBtn(false);
};

window.pauseAudio = function() {
    if (isPlaying && !isPaused) {
        if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
            window.speechSynthesis.pause();
        }
        isPaused = true;
        updatePauseBtn(true);
    }
};

window.resumeAudio = function() {
    if (isPaused) {
        isPaused = false;
        updatePauseBtn(false);
        if ('speechSynthesis' in window) {
            window.speechSynthesis.resume();
        } else {
            processAudioQueue();
        }
    }
};

window.togglePauseAudio = function() {
    if (isPaused) window.resumeAudio();
    else if (isPlaying) window.pauseAudio();
};

function updatePauseBtn(paused) {
    const btn = document.getElementById('pause-audio-btn');
    if (btn) btn.innerHTML = paused ? '▶️ Resume' : '⏸️ Pause';
}

// ─── Attendance ───────────────────────────────────────────────────────────────
function initAttendance() {
    const di = document.getElementById('att-date');
    if (di) di.value = new Date().toISOString().substr(0, 10);
    loadAttendance();
}

window.saveAttendance = function() {
    const date = document.getElementById('att-date').value;
    const user = document.getElementById('att-user').value;
    if (!date || !user) return;
    const records = JSON.parse(localStorage.getItem('a2_attendance') || '[]');
    if (records.some(r => r.date === date && r.user === user)) {
        alert('Attendance already marked for this student on this date.'); return;
    }
    records.push({ date, user, id: Date.now() });
    localStorage.setItem('a2_attendance', JSON.stringify(records));
    loadAttendance();
};

function loadAttendance() {
    const container = document.getElementById('attendance-list');
    if (!container) return;
    const records = JSON.parse(localStorage.getItem('a2_attendance') || '[]');
    records.sort((a, b) => new Date(b.date) - new Date(a.date));
    container.innerHTML = records.length === 0
        ? '<p style="grid-column:1/-1;opacity:0.5;text-align:center;padding:20px;">No attendance records.</p>'
        : records.map(r => `
            <div class="att-record">
                <div><span>${r.user}</span><span style="display:block;font-size:0.75rem;">${r.date}</span></div>
                <span class="att-delete" onclick="deleteAttendance(${r.id})">🗑️</span>
            </div>
        `).join('');
}

window.deleteAttendance = function(id) {
    if (!confirm('Delete this record?')) return;
    let records = JSON.parse(localStorage.getItem('a2_attendance') || '[]');
    records = records.filter(r => r.id !== id);
    localStorage.setItem('a2_attendance', JSON.stringify(records));
    loadAttendance();
};

// ─── Payments ─────────────────────────────────────────────────────────────────
function initPayments() {
    const di = document.getElementById('pay-date');
    if (di) di.value = new Date().toISOString().substr(0, 10);
    loadPayments();
}

window.savePayment = function() {
    const date    = document.getElementById('pay-date').value;
    const user    = document.getElementById('pay-user').value;
    const concept = document.getElementById('pay-concept').value;
    const amount  = document.getElementById('pay-amount').value;
    if (!date || !user || !amount) return;
    const records = JSON.parse(localStorage.getItem('a2_payments') || '[]');
    records.push({ date, user, concept, amount: parseFloat(amount).toFixed(2), id: Date.now() });
    localStorage.setItem('a2_payments', JSON.stringify(records));
    document.getElementById('pay-amount').value = '';
    loadPayments();
};

function loadPayments() {
    const container = document.getElementById('payments-list');
    if (!container) return;
    const records = JSON.parse(localStorage.getItem('a2_payments') || '[]');
    records.sort((a, b) => new Date(b.date) - new Date(a.date));
    container.innerHTML = records.length === 0
        ? '<p style="grid-column:1/-1;opacity:0.5;text-align:center;padding:20px;">No payment records.</p>'
        : records.map(r => `
            <div class="pay-record">
                <div class="pay-record-header">
                    <span class="pay-student">${r.user}</span>
                    <span class="pay-amount">$${r.amount}</span>
                </div>
                <span class="pay-concept">${r.concept}</span>
                <span class="pay-date">${r.date}</span>
                <span class="pay-delete" onclick="deletePayment(${r.id})">🗑️ Delete</span>
            </div>
        `).join('');
}

window.deletePayment = function(id) {
    if (!confirm('Delete this payment record?')) return;
    let records = JSON.parse(localStorage.getItem('a2_payments') || '[]');
    records = records.filter(r => r.id !== id);
    localStorage.setItem('a2_payments', JSON.stringify(records));
    loadPayments();
};

window.progressTestScores = {};
window.progressTestListeningScores = {};

window.selectProgressTestListeningAnswer = function (btn, isCorrect, unitId, questionIndex) {
    const parent = btn.parentElement;
    Array.from(parent.children).forEach(b => {
        b.style.background = 'rgba(255,255,255,0.05)';
        b.style.borderColor = 'rgba(251,191,36,0.4)';
    });
    
    btn.style.background = 'rgba(251,191,36,0.3)';
    btn.style.borderColor = 'var(--accent-gold)';
    
    if (!window.progressTestListeningScores[unitId]) window.progressTestListeningScores[unitId] = {};
    window.progressTestListeningScores[unitId][questionIndex] = { isCorrect, btn };
};

window.selectProgressTestAnswer = function (btn, isCorrect, unitId, questionIndex) {
    const parent = btn.parentElement;
    Array.from(parent.children).forEach(b => {
        b.style.background = 'rgba(255,255,255,0.05)';
        b.style.borderColor = 'rgba(251,191,36,0.4)';
    });
    
    btn.style.background = 'rgba(251,191,36,0.3)';
    btn.style.borderColor = 'var(--accent-gold)';
    
    if (!window.progressTestScores[unitId]) window.progressTestScores[unitId] = {};
    window.progressTestScores[unitId][questionIndex] = { isCorrect, btn };
};

window.submitAndScoreProgressTest = function(unitId) {
    const isVersionB = String(unitId).endsWith('B');
    const realUnitId = isVersionB ? parseInt(String(unitId).replace('B', '')) : unitId;
    const unit = courseData.units.find(u => u.id === realUnitId);
    const testObj = isVersionB ? unit.progressTestB : unit.progressTest;
    if (!unit || !testObj) return;

    // Check if all answered
    const coreMap = window.progressTestScores[unitId] || {};
    const listenMap = window.progressTestListeningScores[unitId] || {};
    
    const coreTotal = testObj.questions.length;
    const listenTotal = testObj.listening ? testObj.listening.questions.length : 0;
    
    if (Object.keys(coreMap).length < coreTotal || Object.keys(listenMap).length < listenTotal) {
        alert('Please answer all questions before submitting. / Por favor contestá todas las preguntas antes de enviar.');
        return;
    }
    
    // Calculate and style
    let coreCorrect = 0;
    let listenCorrect = 0;
    
    for (let qi in listenMap) {
        let ans = listenMap[qi];
        if (ans.isCorrect) {
            listenCorrect++;
            ans.btn.style.background = 'rgba(16,185,129,0.25)';
            ans.btn.style.borderColor = '#10b981';
        } else {
            ans.btn.style.background = 'rgba(239,68,68,0.25)';
            ans.btn.style.borderColor = '#ef4444';
        }
        ans.btn.parentElement.style.pointerEvents = 'none';
        ans.btn.parentElement.style.opacity = '0.8';
    }
    
    for (let qi in coreMap) {
        let ans = coreMap[qi];
        if (ans.isCorrect) {
            coreCorrect++;
            ans.btn.style.background = 'rgba(16,185,129,0.25)';
            ans.btn.style.borderColor = '#10b981';
        } else {
            ans.btn.style.background = 'rgba(239,68,68,0.25)';
            ans.btn.style.borderColor = '#ef4444';
        }
        ans.btn.parentElement.style.pointerEvents = 'none';
        ans.btn.parentElement.style.opacity = '0.8';
    }
    
    // Show results
    const totalCorrect = coreCorrect + listenCorrect;
    const totalQuestions = coreTotal + listenTotal;
    const percentage = Math.round((totalCorrect / totalQuestions) * 100);
    
    const resultBox = document.getElementById(`pt-result-${unitId}`);
    if (resultBox) {
        resultBox.style.display = 'block';
        resultBox.style.background = percentage >= 70 ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)';
        resultBox.style.color = percentage >= 70 ? '#4ade80' : '#f87171';
        resultBox.style.border = percentage >= 70 ? '1px solid #10b981' : '1px solid #ef4444';
        resultBox.innerHTML = `Test Completed! Score: ${totalCorrect}/${totalQuestions} (${percentage}%)<br>` + 
            `Listening: ${listenCorrect}/${listenTotal} | Core Quiz: ${coreCorrect}/${coreTotal}<br>` + 
            `${percentage >= 70 ? '🎉 Excellent job! You passed!' : '📚 Review the material and try again!'}`;
    }
    
    const sendBtn = document.getElementById(`btn-send-pt-${unitId}`);
    if (sendBtn) sendBtn.style.display = 'flex';
    
    const submitBtn = document.getElementById(`btn-submit-pt-${unitId}`);
    if (submitBtn) submitBtn.style.display = 'none';
};

window.sendProgressTestToWhatsApp = function(unitId) {
    const isVersionB = String(unitId).endsWith('B');
    const realUnitId = isVersionB ? parseInt(String(unitId).replace('B', '')) : unitId;
    const unit = courseData.units.find(u => u.id === realUnitId);
    const testObj = isVersionB ? unit.progressTestB : unit.progressTest;
    if (!unit || !testObj) return;
    
    const coreMap = window.progressTestScores[unitId] || {};
    const coreCorrect = Object.values(coreMap).filter(v => v).length;
    const coreTotal = testObj.questions.length;
    
    const listenMap = window.progressTestListeningScores[unitId] || {};
    const listenCorrect = Object.values(listenMap).filter(v => v).length;
    const listenTotal = testObj.listening ? testObj.listening.questions.length : 0;
    
    const totalCorrect = coreCorrect + listenCorrect;
    const totalQuestions = coreTotal + listenTotal;
    const percentage = Math.round((totalCorrect / totalQuestions) * 100);
    
    let report = `*A2 Hospitality English - ${testObj.title} Results*\n\n`;
    report += `*Final Score:* ${totalCorrect}/${totalQuestions} (${percentage}%)\n`;
    report += `*Result:* ${percentage >= 70 ? 'PASSED ✅' : 'NEEDS REVIEW ❌'}\n\n`;
    
    if (listenTotal > 0) {
        report += `*Listening Score:* ${listenCorrect}/${listenTotal}\n`;
    }
    report += `*Core Questions Score:* ${coreCorrect}/${coreTotal}\n\n`;
    
    if (testObj.speaking) {
        report += `*Speaking Task:* ${testObj.speaking.prompt}\n`;
        const textAnsEl = document.getElementById(`pt-speaking-text-${unitId}`);
        const textAns = textAnsEl ? textAnsEl.value.trim() : "";
        if (textAns) {
            report += `*My Written Response:* "${textAns}"\n`;
        }
        report += `🎙️ _[Student: I am recording the voice note for this oral situation right now! / ¡Estoy grabando el mensaje de voz para esta situación oral ahora mismo!]_`;
    }
    
    window.open(`https://wa.me/5493517017850?text=${encodeURIComponent(report)}`, '_blank');
};

window.sendRevisionToWhatsApp = function(unitId) {
    const unit = courseData.units.find(u => u.id === unitId);
    if (!unit || !unit.revision) return;
    
    const container = document.getElementById(`revision-container-${unitId}`);
    const inputs = Array.from(container.querySelectorAll('.rev-input'));
    let inputIdx = 0;
    
    let report = `*A2 Hospitality English - Revision Unit ${unitId}*\n\n`;
    
    unit.revision.forEach((sentence, idx) => {
        if (sentence.template) {
            let filledSentence = sentence.template.replace(/\[([^\]]+)\]/g, () => {
                const val = inputs[inputIdx] ? inputs[inputIdx].value.trim() : "";
                inputIdx++;
                return val ? `*${val}*` : `___`;
            });
            report += `${idx + 1}. ${filledSentence}\n`;
        } else {
            report += `${idx + 1}. ${sentence.eng}\n`;
        }
    });
    
    window.open(`https://wa.me/5493517017850?text=${encodeURIComponent(report)}`, '_blank');
};
