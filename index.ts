import "frida-il2cpp-bridge";

Il2Cpp.perform(() => {
    console.log("[KidsMod] Among Us initialized via Frida & IL2Cpp!");

    try {
        const AmongUsClient = Il2Cpp.domain.assembly("Assembly-CSharp").image.class("AmongUsClient");
        
        AmongUsClient.method("Awake").implementation = function () {
            console.log("[KidsMod] AmongUsClient.Awake hooked!");
            return this.method("Awake").invoke();
        };
    } catch (e) {
        console.log("[KidsMod] Hook error: " + e);
    }
});
