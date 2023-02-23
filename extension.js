(function() {
    var soundStop = function() {
        var audioContext = new (window.AudioContext || window.webkitAudioContext)();
        var masterGain = audioContext.createGain();
        masterGain.gain.setValueAtTime(0, audioContext.currentTime);
        audioContext.suspend();
    };

    ScratchExtensions.register("Stop All Sounds", {
        blocks: [
            {
                opcode: "stopAllSounds",
                blockType: Scratch.BlockType.COMMAND,
                text: "Stop All Sounds",
                arguments: {}
            }
        ],
        stopAllSounds: function() {
            soundStop();
        }
    });
})();
