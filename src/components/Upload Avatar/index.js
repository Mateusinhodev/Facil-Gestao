import React, { useState } from "react";
import "./style.css";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function UploadAvatar({ atualizarDadosForm, avatarUrl }) {
  const [imageUrl, setImageUrl] = useState(avatarUrl || "https://i.im.ge/2025/03/09/pFSNCz.image.png");
  const [uploading, setUploading] = useState(false);
  const CLIENT_ID = "a303687760d48f0"; // Certifique-se de que este Client-ID está correto

  const onFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    setUploading(true);

    try {
      console.log("Enviando imagem para o Imgur...");

      const response = await fetch("https://api.imgur.com/3/upload", {
        method: "POST",
        headers: {
          Authorization: `Client-ID ${CLIENT_ID}`,
        },
        body: formData,
      });

      const result = await response.json();
      console.log("Resposta do Imgur:", result);

      if (result.success) {
        const imageUrl = result.data.link; // URL da imagem

        setImageUrl(imageUrl); // Atualiza a visualização da imagem no componente
        atualizarDadosForm({ avatarUrl: imageUrl }); // Atualiza o estado `formDados` com a URL da imagem
      } else {
        alert("Erro no upload: " + (result.data?.error || "Desconhecido"));
      }
    } catch (error) {
      alert("Falha ao conectar com o Imgur.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <MDBRow>
      <MDBCol md="12" className="mb-4">
        <div className="box box-primary">
          <div className="box-body box-profile">
            <div className="avatar-upload">
              <div className="avatar-edit">
                <input
                  name="avatarUrl"
                  type="file"
                  id="imageUpload"
                  accept=".png, .jpg, .jpeg"
                  onChange={onFileChange}
                />
                <label htmlFor="imageUpload"></label>
              </div>
              <div className="avatar-preview">
                <img
                  className="profile-user-img img-responsive img-circle"
                  id="imagePreview"
                  src={imageUrl}
                  alt="User profile"
                />
              </div>
            </div>
            {/* {uploading && <p>Fazendo upload...</p>} */}
            {/* <p className="text-center">{imageUrl}</p> */}
          </div>
        </div>
      </MDBCol>
    </MDBRow>
  );
}