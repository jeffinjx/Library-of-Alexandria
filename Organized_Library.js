const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Current Library - Items I Own
const currentLibrary = {
  Philosophy: [
    "Plato_Republic",
    "Plato_Protagoras",
    "Plato_Apology",
    "Plato_Gorgias",
    "Aristotle_Nicomachean Ethics",
    "Immanuel Kant_Critique of Pure Reason",
    "René Descartes_Meditations on First Philosophy",
    "David Hume_An Enquiry Concerning Human Understanding",
    "David Hume_Dialogues Concerning Natural Religion",
    "Georg Wilhelm Friedrich Hegel_The Logic of Hegel",
    "Titus Lucretius Carus_Of The Nature of Things",
    "Boethius_The Consolation of Philosophy",
    "Introduction to Philosophy: Ethics Rebus Community",
    "John Stuart Mill_On Liberty",
    "Seneca_The Epistles of Lucius Annaeus Seneca_Volume 1",
    "Fyodor Dostoyevsky_Notes from the Underground",
    "Friedrich Wilhelm Nietzsche_Beyond Good and Evil",
    "Friedrich Wilhelm Nietzsche_Thus Spake Zarathustra",
    "Nicolo Machiavelli_The Prince",
    "John Locke_The Two Treatises of Civil Government",
    "Étienne De La Boétie_Slaves By Choice",
    "ForallxCalgary",
    "Classical Logic (Stanford Encyclopedia of Philosophy)",
    "Informal Logic (Stanford Encyclopedia of Philosophy)",
    "Epistemology (Stanford Encyclopedia of Philosophy)",
    "Inductive Logic (Stanford Encyclopedia of Philosophy)",
    "The Analysis of Knowledge (Stanford Encyclopedia of Philosophy)",
    "A Priori Justification and Knowledge (Stanford Encyclopedia of Philosophy)",
    "The Metaphysics of Causation (Stanford Encyclopedia of Philosophy)",
    "Metaphysics (Stanford Encyclopedia of Philosophy)",
    "Free Will (Stanford Encyclopedia of Philosophy)",
    "Ancient Theories of Freedom and Determinism (Stanford Encyclopedia of Philosophy)",
    "Personal Identity (Stanford Encyclopedia of Philosophy)",
    "Time (Stanford Encyclopedia of Philosophy)",
    "Principle of Sufficient Reason (Stanford Encyclopedia of Philosophy)",
    "Stoicism (Stanford Encyclopedia of Philosophy)",
    "Critical Theory (Frankfurt School) (Stanford Encyclopedia of Philosophy)",
    "Reasons for Action: Justification, Motivation, Explanation (Stanford Encyclopedia of Philosophy)",
    "Aristotle (Stanford Encyclopedia of Philosophy)",
    "Marcus Tullius Cicero_Orations (Volumes 1-4) [361 + 370 + 343 + 424 pages]",
  ],

  "Religion & Theology": [
    "David Hume_The Natural History of Religion",
    "Ludwig Feuerbach_The Essence of Christianity",
    "Philosophy of Religion (Stanford Encyclopedia of Philosophy)",
    "John Bunyan_The Pilgrim’s progress [252 pages]",
  ],

  "Self-Development": [
    "Marcus Aurelius_Meditations",
    "Musashi Miyamoto_The Book of Five Rings",
    "Sun Tzu_The Art of War",
    "Baltasar Gracián_The Art of Worldly Wisdom",
    "Epictetus_The Enchiridion",
    "Samuel Smiles_Self-Help [209 pages]",
    "Personal Autonomy (Stanford Encyclopedia of Philosophy)",
    "Agency (Stanford Encyclopedia of Philosophy)",
    "Michel de Montaigne_Essays of Michel de Montaigne—Complete [1267 pages]",
    "Epictetus_Discourses [383 pages]",
  ],

  "Literature & Poetry": [
    "The Works of Ralph Waldo Emerson Volume 2",
    "Emily Dickinson_Complete Poems",
    "Voltaire_Candide",
    "Herman Melville_Moby Dick",
    "Johann Wolfgang von Goethe_Faust 1 and 2-Egmont-Natural Daughter-Sorrows of Young Werther",
    "Alexandre Dumas_The Count of Monte Cristo_Volume 1 [345 pages]",
    "Alexandre Dumas_The Count of Monte Cristo_Volume 2 [336 pages]",
    "Alexandre Dumas_The Count of Monte Cristo_Volume 3 [347 pages]",
    "Alexandre Dumas_The Count of Monte Cristo_Volume 4 [295 pages]",
    "Alexandre Dumas_The Count of Monte Cristo_Volume 5 [292 pages]",
    "Joseph Conrad_Heart of Darkness [96 pages]",
    "Harvard Classics Vol. 17. Folk-Lore and Fable, Aesop, Grimm, Andersen [369 pages]",
    "Frederick Douglass_Narrative of the Life of Frederick Douglass, an American Slave [126 pages]",
    "Frederick Douglass_My Bondage and My Freedom [340 pages]",
  ],

  "Science & History": [
    "Charles Darwin_The Origin of Species Volume 1",
    "Charles Darwin_The Origin of Species Volume 2",
    "Franz Boas_The Mind of Primitive Man [295 pages]",
    "The Constitution of The Unted States of America [19 pages]",
    "United States Declaration of Independence [5 pages]",
  ],

  "Practical Skills": [
    "Allen Downey_Think Python [244 pages]",
    "Marijn Haverbeke_Eloquent JavaScript [435 pages]",
    "Katherine Jewell Everts_Vocal Expression A Class-book of Voice Training and Interpretation [208 pages]",
  ],

  Collections: [
    "The Works of Benjamin Franklin Volume I Autobiography Letters and Misc Writings [311 pages]",
    "Henry David Thoreau_Walden",
  ],
};

// Next List - Items To Acquire
const nextList = {
  Philosophy: [
    "Giulia Girlando_Panopticon and surveillance an ethical approach to social control [53 pages]",
    "Francis Bacon_Novum Organum [270 pages]",
    "René Descartes_Discourse on the Method [294 pages]",
    "David Hume_A Treatise of Human Nature [600 pages]",
    "George Berkeley_The Principles of Human Knowledge [63 pages]",
    "Plato_Phaedo [60 pages]",
    "Baruch Spinoza_Ethics [145 pages]",
    "Arthur Schopenhauer_The Basis of Morality",
    "Friedrich Wilhelm Nietzsche_Human All Too Human",
    "Søren Kierkegaard_Selections from the Writings of Kierkegaard",
    "William James Pragmatism",
    "The Law by Frédéric Bastiat",
    "Sin in Christian Thought (Stanford Encyclopedia of Philosophy)",
    "Treating Persons as Means (Stanford Encyclopedia of Philosophy)",
    "Trust (Stanford Encyclopedia of Philosophy)",
    "Egoism (Stanford Encyclopedia of Philosophy)",
    "Egalitarianism (Stanford Encyclopedia of Philosophy)",
    "Respect (Stanford Encyclopedia of Philosophy)",
    "Morality and Evolutionary Biology (Stanford Encyclopedia of Philosophy)",
    "Desire (Stanford Encyclopedia of Philosophy)",
    "Happiness (Stanford Encyclopedia of Philosophy)",
    "Self-Knowledge (Stanford Encyclopedia of Philosophy)",
    "Epistemic Self-Doubt (Stanford Encyclopedia of Philosophy)",
    "Critical Thinking (Stanford Encyclopedia of Philosophy)",
    "Self-Deception (Stanford Encyclopedia of Philosophy)",
    "Intuition (Stanford Encyclopedia of Philosophy)",
    "Rationalism vs. Empiricism (Stanford Encyclopedia of Philosophy)",
    "The Meaning of Life (Stanford Encyclopedia of Philosophy)",
    "Social Ontology (Stanford Encyclopedia of Philosophy)",
    "Naturalism (Stanford Encyclopedia of Philosophy)",
    "Progress (Stanford Encyclopedia of Philosophy)",
    "Social Norms (Stanford Encyclopedia of Philosophy)",
    "Anarchism (Stanford Encyclopedia of Philosophy)",
    "Freedom of Speech (Stanford Encyclopedia of Philosophy)",
    "Liberalism (Stanford Encyclopedia of Philosophy)",
    "Libertarianism (Stanford Encyclopedia of Philosophy)",
    "Neoliberalism (Stanford Encyclopedia of Philosophy)",
    "Race (Stanford Encyclopedia of Philosophy)",
    "Privacy (Stanford Encyclopedia of Philosophy)",
    "Meritocracy (Stanford Encyclopedia of Philosophy)",
    "Self-Consciousness (Stanford Encyclopedia of Philosophy)",
    "Inner Speech (Stanford Encyclopedia of Philosophy)",
    "Imagination (Stanford Encyclopedia of Philosophy)",
    "Imaginative Resistance (Stanford Encyclopedia of Philosophy)",
    "Preferences (Stanford Encyclopedia of Philosophy)",
    "Theories of Meaning (Stanford Encyclopedia of Philosophy)",
    "Religious Language (Stanford Encyclopedia of Philosophy)",
    "Aesthetic Experience (Stanford Encyclopedia of Philosophy)",
    "Beauty (Stanford Encyclopedia of Philosophy)",
    "Transcendentalism (Stanford Encyclopedia of Philosophy)",
    "Enlightenment (Stanford Encyclopedia of Philosophy)",
    "Idealism (Stanford Encyclopedia of Philosophy)",
    "Pragmatism (Stanford Encyclopedia of Philosophy)",
    "Phenomenology (Stanford Encyclopedia of Philosophy)",
    "Daoism (Stanford Encyclopedia of Philosophy)",
    "Methodological Individualism (Stanford Encyclopedia of Philosophy)",
    "Assertion (Stanford Encyclopedia of Philosophy) [36 pages]",
    "Domination (Stanford Encyclopedia of Philosophy) [18 pages]",
    "Modesty and Humility (Stanford Encyclopedia of Philosophy) [13 pages]",
    "Friendship (Stanford Encyclopedia of Philosophy) [17 pagees]",
    "Aristotle’s Rhetoric (Stanford Encyclopedia of Philosophy) [21 pages]",
    "Jean-Jacques Rousseau_The Social Contract & Discourses [312 pages]",
    "Charles W. Eliot_The Conflict Between Individualism and Collectivism in a Democracy [136 pages]",
    "Arthur Schopenhauer_The Art of Controversy [41 pages]",
    "William James_The Will to Believe and Other Essays in Popular Philosophy [272 pages]",
    "John Locke_A Letter concerning Toleration [24 pages]",
    "Baruch Spinoza_On the Improvement of the Understanding [27 pages]",
    "Wilhelm Friedrich Hegel_The Phenomenology of Spirit [802 pages]",
    "John Dewey_Human nature and conduct [37 pages]",
    "Lysander Spooner_No Treason. No. VI. The Constitution of No Authority [47 pages]",
    "Emma Goldman_Anarchism and Other Essays [91 pages]",
    "William Godwin_An Enquiry Concerning Political Justice_Volume 1 [198 pages]",
    "William Godwin_An Enquiry Concerning Political Justice_Volume 1 [258 pages]"
  ],

  "Religion & Theology": [
    "Friedrich Schleiermacher_On Religion: Speeches to Its Cultured Despisers",
    "Blaise Pascal_Pensées",
    "Augustine of Hippo_Confessions [351 pages]",
    "Annie Besant and Charles Bradlaugh_The Freethinker’s Text-Book [480 pages]",
    "Jean Meslier_Superstition In All Ages [99 pages]",
    "Watson Heston_The Freethinkers' Pictorial Text-Book [368 pages]",
    "baron d' Paul Henri Thiry Holbach_The System of Nature [194+150 pages]",
    "Percy Bysshe Shelley_Necessity Of Atheism [11 pages]",
    "Desiderius Erasmus_In Praise of Folly [116 pages]",
    "Laozi_The Tao Teh King or the Tao and its Characteristics",
    "Annie Besant and Charles Bradlaugh_The Freethinker’s Text-Book [480 pages]",
  ],

  "Self-Development": [
    "Edward Carpenter_Civilisation Its Cause and Cure",
    "Seneca_The Epistles of Lucius Annaeus Seneca_Volume 2 [374 pages]",
    "Epictetus_Fragments",
    "William James_The Varieties of Religious Experience [522 pages]",
    "William James_The Principles of Psychology [701 + 742 pages]",
    "Sigmund Freud_The Interpretation of Dreams",
    "Sigmund Freud_A General Introduction to Psychoanalysis [426 pages]",
    "OpenStax_Psychology 2e [751 pages]",
    "Robert G. Ingersoll_Individuality From 'The Gods and Other Lectures' [11 pages]"
  ],

  "Literature & Poetry": [
    "Gilbert K. Chesterton_The Napoleon of Notting Hill [111 pages]",
    "Jack London_The Iron Heel [190 pages]",
    "George Orwell_1984 [182 pages]",
    "Harriet Beecher Stowe_Uncle Tom’s Cabin [292 pages]",
    "Mary Wollstonecraft Shelley_Frankenstein",
    "Robert Louis Stevenson_The Strange Case of Dr Jekyll and Mr Hyde",
    "Shakespeare: The Tempest, Much Ado, Merchant of Venice, Twelfth-Night, Julius Caesar, Macbeth, Hamlet, King Lear, Othello",
    "Fyodor Dostoyevsky_Crime and Punishment [554 pages]",
    "Fyodor Dostoyevsky_The Brothers Karamazov [941 pages]",
    "Leo Tolstoy_War and Peace [1733 pages]",
    "Charles Dickens_David Copperfield [989 pages]",
    "Stephen Crane_The Red Badge of Courage [84 pages]",
    "Edith Wharton_The Age of Innocence [315 pages]",
    "Thomas Hardy_Jude the Obscure [424 pages]",
    "Victor Hugo_Les Misérables [1805 pages]",
    "George Orwell_1984 [182 pages]",
    "Miguel de Cervantes Saavedra_Don Quixote [1513 pages]",
    "Nathaniel Hawthorne_The Scarlet Letter [206 pages]",
    "Giovanni Boccaccio_The Decameron",
    "Homer_Iliad and Odyssey [585 pages]",
    "Harvard Classics Vol. 40. English Poetry 1 [472 pages]",
    "Harvard Classics Vol. 41. English Poetry 2 [502 pages]",
    "Harvard Classics Vol. 42. English Poetry 3 [472 pages]",
    "Harvard Classics Vol. 46. Elizabethan Drama 1 [472 pages]",
    "Harvard Classics Vol. 47. Elizabethan Drama 2 [487 pages]",
    "Harvard Classics Vol. 49. Epic and Saga [446 pages]",
    "Harvard Classics Vol. 8. Nine Greek Dramas [495 pages]",
  ],

  "Science & History": [
    "Alexis Henri C M Clerel Tocqueville_Democracy in America [583 + 513 pages]",
    "Charles Mackay - Extraordinary Popular Delusions",
    "Mary Wollstonecraft_A Vindication of the Rights of Woman",
    "Soren Kierkegaard_The Crowd is Untruth [11 pages]",
    "Edward Gibbon_The History of the Decline and Fall of the Roman Empire [3261 pages]",
    "OpenStax_U.S. History [975 pages]",
    "OpenStax_Introduction to Sociology 3e [669 pages]",
    "OpenStax_Introduction to Anthropology [651 pages]",
    "Adam Smith_An Inquiry Into the Nature and Causes of the Wealth of Nations [400 + 462 pages]",
    "Mary Antin_The Promised Land [324 pages]",
  ],

  "Practical Skills": [
    "William Strunk Jr_The Elements of Style [51 pages]",
    "Josephine Turck Baker_The Art of Conversation [25 pages]",
    "Arthur Martine_Martine’s Hand-Book of Etiquette [79 pages]",
    "Aristotle_Rhetoric [91 pages]",
    "OpenStax_College Algebra 2e [1111 pages]",
    "Al Sweigart_Automate the Boring Stuff with Python [594 pages]",
    "Brad Miller and David Ranum_Problem Solving with Algorithms and Data Structures [240 pages]",
    "Kyle Simpson_Deep Language Mechanics You Don’t Know JS (YDKJS) [960 pages]",
    "Lydia Hallie and Addy Osmani_Learning JavaScript Design Patterns [436 pages]",
    "Brian Lonsdorf_Mostly Adequate Guide to FP [79 pages]",
    "Genevieve Stebbins_Delsarte system of expression [310 pages]",
    "Irvah Lester Winter_Public Speaking Principles and Practice [419 pages]",
    "J.H. McIlvaine_Elocution The Sources and Elements of Its Power [412 pages]",
    "Rollo Anson Tallcott_The Art of Acting and Public Reading Dramatic Interpretation [250 pages]",
    "Alexander Melville Bell_The Principles of Elocution [256 pages]",
  ],

  Collections: [
    "Arthur Schopenhauer_The World As Will And Idea [550 + 506 + 408 pages]",
  ],
};

// Display functions for both libraries
//function displayLibrary(lib, title) {
//  console.log(`\n${title}\n${'='.repeat(50)}`);
//  Object.keys(lib).forEach(category => {
//    console.log(`\n📚 ${category.toUpperCase()}`);
//    lib[category].forEach(item => console.log(` • ${item}`));
//  });
// }

console.log("Hello from Hyper!");

const promptQuestion =
  "What matters most now?\n1. History Focused\n2. Programming Focused\n3. Philosophy Focused\n4. Anti-Slavery Focused\n5. Mix Focused\n6. Check Current Prints\n";

r1.question(promptQuestion, function printingDecision(printingChoice) {
  let programmingFocused = ["Nill."];
  let antislaveryFocused = ["Nill."];
  let historyFocused = [
    "Edward Gibbon_The History of the Decline and Fall of the Roman Empire [3261 pages]",
  ];
  let philosophyFocused = [
    "John Locke_A Letter concerning Toleration [24 pages]",
    "Francis Bacon_Novum Organum [164 pages]",
    "René Descartes_Discourse on the Method [51 pages]",
    "Arthur Schopenhauer_The Art of Controversy [41 pages]",
    "Baruch Spinoza_On the Improvement of the Understanding [27 pages]",
    "Baruch Spinoza_Ethics [145 pages]",
    "Lysander Spooner_No Treason. No. VI. The Constitution of No Authority [47 pages]",
    "Emma Goldman_Anarchism and Other Essays [91 pages]",
    "William Godwin_An Enquiry Concerning Political Justice_Volume 1 [198 pages]",
    "William Godwin_An Enquiry Concerning Political Justice_Volume 1 [258 pages]"
  ];
  let mixFocused = [
    philosophyFocused,
    "William Strunk Jr_The Elements of Style [51 pages]",
    "Robert G. Ingersoll_Individuality From 'The Gods and Other Lectures' [11 pages]",
    "John Dewey_Human nature and conduct [37 pages]"
  ];
  let done = [
    "Allen Downey_Think Python [244 pages]",
    "Marijn Haverbeke_Eloquent JavaScript [435 pages]",
    "The Constitution of The Unted States of America [19 pages]",
    "United States Declaration of Independence [5 pages]",
    "Frederick Douglass_Narrative of the Life of Frederick Douglass, an American Slave [126 pages]",
    "Frederick Douglass_My Bondage and My Freedom [340 pages]",
    "Marcus Tullius Cicero_Orations (Volumes 1-4) [361 + 370 + 343 + 424 pages]",
    "Katherine Jewell Everts_Vocal Expression A Class-book of Voice Training and Interpretation [208 pages]",
    "Epictetus_Discourses [383 pages]",
  ];

  function extractPageCounts(bookList) {
    return bookList.map((entry) => {
      const match = entry.match(/\[(.+?)\s*pages\]/);
      if (match) {
        const parts = match[1].split("+").map((s) => parseInt(s.trim(), 10));
        const sum = parts.reduce((acc, val) => acc + (isNaN(val) ? 0 : val), 0);
        return sum;
      }
      return 0;
    });
  }

  let programmingPageCounts = extractPageCounts(programmingFocused);
  const programmingTotalPages = programmingPageCounts.reduce(
    (sum, pages) => sum + pages,
    0
  );

  let historyPageCounts = extractPageCounts(historyFocused);
  const historyTotalPages = historyPageCounts.reduce(
    (sum, pages) => sum + pages,
    0
  );

  let philosophyPageCounts = extractPageCounts(philosophyFocused);
  const philosophyTotalPages = philosophyPageCounts.reduce(
    (sum, pages) => sum + pages,
    0
  );

  let antislaveryPageCounts = extractPageCounts(antislaveryFocused);
  const antislaveryTotalPages = antislaveryPageCounts.reduce(
    (sum, pages) => sum + pages,
    0
  );

  let donePageCounts = extractPageCounts(done);
  const doneTotalPages = donePageCounts.reduce((sum, pages) => sum + pages, 0);

  let flatMixFocused = mixFocused.flat();
  let mixPageCounts = extractPageCounts(flatMixFocused);
  const mixTotalPages = mixPageCounts.reduce((sum, pages) => sum + pages, 0);

  if (printingChoice === "1") {
    console.log(historyFocused);
    console.log("History List Totals:", historyPageCounts);
    console.log("Total pages in History List:", historyTotalPages);
  }
  if (printingChoice === "2") {
    console.log(programmingFocused);
    console.log("Programming List Totals:", programmingPageCounts);
    console.log("Total pages in Programming List:", programmingTotalPages);
  }
  if (printingChoice === "3") {
    console.log(philosophyFocused);
    console.log("Philosophy List Totals:", philosophyPageCounts);
    console.log("Total pages in Philosophy List:", philosophyTotalPages);
  }
  if (printingChoice === "4") {
    console.log(antislaveryFocused);
    console.log("Anti-Slavery List Totals:", antislaveryPageCounts);
    console.log("Total pages in Anti-Slavery List:", antislaveryTotalPages);
  }
  if (printingChoice === "5") {
    console.log(mixFocused);
    console.log("Mix List Totals:", mixPageCounts);
    console.log("Total pages in Mix List:", mixTotalPages);
  }
  if (printingChoice === "6") {
    console.log(done);
    console.log("Done Totals:", donePageCounts);
    console.log("Total pages done:", doneTotalPages);
  }
  r1.close();
});
