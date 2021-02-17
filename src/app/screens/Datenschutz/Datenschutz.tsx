import React from 'react';
import {Parallax} from "react-scroll-parallax";
import Blob1 from "~style/blobs/Blob1";
import {Background} from "~app/screens/Home/HomeStyling";
import {Container, InternalLink, LinkButton} from "~style/GlobalStyles";
import {Link} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Datenschutz = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  return (
    <div>
      <Background>
        <Parallax y={['-1400px', '0px']}>
          <Blob1 />
        </Parallax>
      </Background>

      <Container>
        <br /><br />
        <InternalLink>
          <Link to={'/'}><ArrowBackIcon /> Zurück</Link>
        </InternalLink>
        <br /><br />
        <h1>Datenschutz</h1>
        <br />

        <h3>1. Verantwortlicher, Personenbezogene Daten</h3>

        Verantwortlicher im Sinne von Art. 4, Ziffer 7 Datenschutzgrundverordnung („DSGVO“) für die Erhebung,
        Verarbeitung und Nutzung deiner personenbezogenen Daten ist:<br /><br />

        Markus Vogel<br />
        Rugestr. 13<br />
        01069 Dresden<br /><br />

        Per E-Mail: markus@vogelvlug.de<br /><br />

        -im Folgenden auch „wir“ oder „uns“ genannt-<br /><br />

        Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare
        natürliche Person (im Folgenden „betroffene Person“) beziehen; als identifizierbar wird eine natürliche Person
        angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu
        einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen
        identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen, psychischen,
        wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind (Art. 4, Ziffer 1 DSGVO).

        <h3>2. Datenerhebung, -verarbeitung und -nutzung</h3>

        Wir erheben keine personenbezogene Daten. Wirklich nicht.<br /><br />

        Darüber hinaus speichern wir zum Schutz unserer Systeme bei jedem Zugriff auf unsere Website und bei jedem
        Abruf einer Datei Zugriffsdaten in Form von Protokolldateien, die aus den folgenden Informationen bestehen:<br /><br />

        Deine dabei genutzte IP-Adresse,<br />
        Das Zugriffsdatum und -uhrzeit,<br />
        Die Information über den von dir genutzten Browser und dein Betriebssystem.<br />

        <h3>3. Cookies und deren Verwendung</h3>

        Cookies sind kleine Dateien, die es ermöglichen, auf dem Zugriffsgerät der Nutzer (PC, Smartphone o.ä.)
        spezifische, auf das Gerät bezogene Informationen zu speichern. Sie dienen der Benutzerfreundlichkeit
        von Webseiten und damit den Nutzern (z.B. Speicherung deines Grids). Du kannst grundsätzlich den
        Einsatz der Cookies unterbinden, da die meisten Browser über eine Option verfügen, mit der das Setzen und
        Speichern von Cookies eingeschränkt oder komplett verhindert wird. Allerdings weisen wir darauf hin, dass
        die Nutzung und insbesondere der Nutzungskomfort unseres Angebots ohne Cookies eingeschränkt sein könnte.

        <h3>4. Google Fonts</h3>

        Auf unserer Website verwenden wir Google Fonts. Das sind die “Google-Schriften” der Firma Google Inc. Für den
        europäischen Raum ist das Unternehmen Google Ireland Limited (Gordon House, Barrow Street Dublin 4, Irland)
        für alle Google-Dienste verantwortlich.<br /><br />

        Für die Verwendung von Google-Schriftarten müssen Sie sich nicht anmelden bzw. ein Passwort hinterlegen.
        Weiters werden auch keine Cookies in Ihrem Browser gespeichert. Die Dateien (CSS, Schriftarten/Fonts) werden
        über die Google-Domains fonts.googleapis.com und fonts.gstatic.com angefordert. Laut Google sind die Anfragen
        nach CSS und Schriften vollkommen getrennt von allen anderen Google-Diensten. Wenn Sie ein Google-Konto haben,
        brauchen Sie keine Sorge haben, dass Ihre Google-Kontodaten, während der Verwendung von Google Fonts, an Google
        übermittelt werden. Google erfasst die Nutzung von CSS (Cascading Style Sheets) und der verwendeten
        Schriftarten und speichert diese Daten sicher.

        <h3>5. Du hast die folgenden Rechte!</h3>

        Du hast das Recht,<br /><br />

        auf Antrag unentgeltlich Auskunft zu erhalten über die personenbezogenen Daten, die wir über dich gespeichert haben<br />
        zum Widerspruch gegen die Nutzung und/oder Übermittlung deiner Daten.<br />
        auf Berichtigung unrichtiger Daten, Sperrung und Löschung deiner personenbezogenen Daten, soweit dem keine gesetzliche Aufbewahrungspflicht entgegensteht.<br /><br />

        Diese Rechte kannst du jederzeit wahrnehmen, indem du uns unter den unter Ziffer 1 genannten Kontaktdaten kontaktierst.<br />

      </Container>
    </div>
  );
};

export default Datenschutz;