const STORAGE_KEY = "gf_passkey_enabled";

export async function registerPasskey() {
  try {
    const publicKey = {
      challenge: crypto.getRandomValues(new Uint8Array(32)),
      rp: {
        name: "Gastos Familiares"
      },
      user: {
        id: crypto.getRandomValues(new Uint8Array(16)),
        name: "usuario@gastosfamiliares.app",
        displayName: "Usuario"
      },
      pubKeyCredParams: [
        {
          type: "public-key",
          alg: -7
        }
      ],
      authenticatorSelection: {
        authenticatorAttachment: "platform",
        userVerification: "required",
        residentKey: "required"
      },
      timeout: 60000,
      attestation: "none"
    };

    const credential = await navigator.credentials.create({
      publicKey
    });

    if (credential) {
      localStorage.setItem(STORAGE_KEY, "true");
      alert("✅ Face ID activado correctamente");
    }
  } catch (err) {
    console.error(err);
    alert("No se pudo activar Face ID");
  }
}

export async function authenticatePasskey() {
  try {
    const enabled = localStorage.getItem(STORAGE_KEY);

    if (!enabled) return true;

    const publicKey = {
      challenge: crypto.getRandomValues(new Uint8Array(32)),
      userVerification: "required",
      timeout: 60000
    };

    const credential = await navigator.credentials.get({
      publicKey
    });

    return !!credential;
  } catch (err) {
    console.error(err);
    return false;
  }
}
