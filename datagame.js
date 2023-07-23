//Tambahkan kode ini di dalam fungsi create()
const particles = this.add.particles('particle-image');
const emitter = particles.createEmitter({
    frame: 'particle-frame',
    speed: 100,
    lifespan: 1500,
    blendMode: 'ADD'
});

emitter.startFollow(player);

// Tambahkan kode ini setelah membuat pemain (player)
let playerPoints = 0;
let playerLevel = 1;

function collectPoints() {
    playerPoints += 10;
    if (playerPoints >= 100) {
        playerLevel++;
        playerPoints = 0;
        // Tambahkan efek atau suara level up di sini
    }
}

// Tambahkan kode ini di dalam fungsi create() setelah membuat pemain dan boss
function startBossBattle() {
    // Hentikan musik latar saat pertempuran bos dimulai
    this.sound.stopAll();
    // Putar musik boss battle
    this.sound.play('boss-battle-music');

    // Tambahkan logika pertempuran bos di sini, seperti kesehatan bos, serangan bos, dan lain-lain
}

// Tambahkan kode ini di dalam fungsi create()
const missions = [
    { name: 'Misi 1', description: 'Kumpulkan 50 koin', target: 50 },
    { name: 'Misi 2', description: 'Hancurkan 10 musuh', target: 10 },
    // Tambahkan misi lainnya
];

let currentMission = missions[0];

function checkMissionCompletion() {
    if (currentMission === null) return;

    if (currentMission.target <= playerPoints) {
        // Tambahkan efek atau suara ketika misi selesai
        currentMission = missions.shift();
    }
}

// Tambahkan kode ini di dalam fungsi create()
const parties = [];

function joinParty(player, partyLeader) {
    // Bergabunglah dengan pesta yang sudah ada atau buat pesta baru jika belum ada
    let party = parties.find(p => p.leader === partyLeader);
    if (!party) {
        party = { leader: partyLeader, members: [] };
        parties.push(party);
    }
    party.members.push(player);
}
