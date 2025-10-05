module com.macanas.dgramstudio {
    requires javafx.controls;
    requires javafx.fxml;

    requires org.controlsfx.controls;
    requires org.kordamp.ikonli.javafx;

    opens com.macanas.dgramstudio to javafx.fxml;
    exports com.macanas.dgramstudio;
}