using UnityEditor;
using UnityEngine;

/**
public class VRLabWindow : EditorWindow
{
    Texture2D headerSectionTexture;
    Texture2D newSceneTexture;
    Texture2D switchPlatformTexture;
    Texture2D settingsTexture;

    string newSceneTextField = "enter name";
    bool assignVIU = false;
    bool assignGvR = false;
    bool assignWaveSDK = false;

    //CreateSceneSection createSceneSection = new CreateSceneSection();

    Color headerSectionColor = new Color(12f / 255f, 32f / 255f, 44f / 255f, 1f);
    Color newSceneSectionColor = new Color(0f, 0f, 255f, 0.3f); //Blue
    Color switchPlatformSectionColor = new Color(0f, 255f, 0f, 0.3f); //Green
    Color settingsSectionColor = new Color(255f,0f,255f,0.3f); // Cerise

    Rect headerSection;
    Rect newSceneSection;
    Rect switchPlatformSection;
    Rect settingsSection;

   [MenuItem("Crossplatform/VRLab")]
    static void OpenWindow()
    {
        VRLabWindow window = (VRLabWindow)GetWindow(typeof(VRLabWindow));
        window.minSize = new Vector2(600, 300);
        window.Show();
    }

    /// <summary>
    /// Similar to Start() or Awake()
    /// </summary>
    void OnEnable()
    {
        InitTextures();
    }


    /// <summary>
    /// Initialize Texture2D values
    /// </summary>
    void InitTextures()
    {
        headerSectionTexture = new Texture2D(1, 1);
        headerSectionTexture.SetPixel(0, 0, headerSectionColor);
        headerSectionTexture.Apply();

        newSceneTexture = new Texture2D(1, 1);
        newSceneTexture.SetPixel(0, 0, newSceneSectionColor);
        newSceneTexture.Apply();

        switchPlatformTexture = new Texture2D(1, 1);
        switchPlatformTexture.SetPixel(0, 0, switchPlatformSectionColor);
        switchPlatformTexture.Apply();

        settingsTexture = new Texture2D(1, 1);
        settingsTexture.SetPixel(0, 0, settingsSectionColor);
        settingsTexture.Apply();
        //best way to do => create your own Textures!
        //newSceneTexture = Resources.Load<Texture2D>("icons/test");

    }

    /// <summary>
    /// Similar to any Update function
    /// Not called once per frame. Called 1 or more times per interaction.
    /// </summary>
    void OnGUI()
    {
        DrawLayouts();
        DrawHeader();
        DrawNewSceneSettings();
        DrawPlatformSettings();
        DrawPluginSettings();
    }

    /// <summary>
    /// Defines Rect value and points textures based on Rects
    /// </summary>
    void DrawLayouts()
    {
        headerSection.x = 0;
        headerSection.y = 0;
        headerSection.width = Screen.width;
        headerSection.height = 50;

        newSceneSection.x = 0;
        newSceneSection.y = 50;
        newSceneSection.width = Screen.width / 3f;
        newSceneSection.height = Screen.width - 50;

        switchPlatformSection.x = Screen.width / 3f;
        switchPlatformSection.y = 50;
        switchPlatformSection.width = Screen.width / 3f;
        switchPlatformSection.height = Screen.width - 50;

        settingsSection.x = (Screen.width / 3f) * 2;
        settingsSection.y = 50;
        settingsSection.width = Screen.width / 3f;
        settingsSection.height = Screen.width - 50;

        GUI.DrawTexture(headerSection, headerSectionTexture);
        GUI.DrawTexture(newSceneSection, newSceneTexture);
        GUI.DrawTexture(switchPlatformSection, switchPlatformTexture);
        GUI.DrawTexture(settingsSection, settingsTexture);
    }

    /// <summary>
    /// Draw contents of header
    /// </summary>
    void DrawHeader()
    {
        //Alle Labels werden an der selben stelle Plaziert und würden sich gegenseitig
        //überschreiben, daher werden BeginArea und EndArea benötigt.
        GUILayout.BeginArea(headerSection);
        GUILayout.Label("VRLab - Plugin");
        GUILayout.EndArea();
    }

    /// <summary>
    /// Draw contents of new scene settings
    /// </summary>
    void DrawNewSceneSettings()
    {
        GUILayout.BeginArea(newSceneSection);
        GUILayout.Label("Create new Scenes");
        GUILayout.BeginHorizontal();
        GUILayout.Label("Scene Name :");
        newSceneTextField = GUILayout.TextField(newSceneTextField, 25);
        GUILayout.EndHorizontal();
        GUILayout.BeginVertical();
        assignVIU = GUILayout.Toggle(assignVIU, "VIU");
        assignGvR = GUILayout.Toggle(assignGvR, "Google VR");
        assignWaveSDK = GUILayout.Toggle(assignWaveSDK, "Wave SDK");
        GUILayout.Button("Create Scene");
        GUILayout.EndVertical();
        GUILayout.EndArea();
    }

    /// <summary>
    /// Draw contents of platform settings
    /// </summary>
    void DrawPlatformSettings()
    {
        GUILayout.BeginArea(switchPlatformSection);
        GUILayout.Label("Switch Platform between Scenes");
        GUILayout.EndArea();
    }

    /// <summary>
    /// Draw contents of plugin settings
    /// </summary>
    void DrawPluginSettings()
    {
        GUILayout.BeginArea(settingsSection);
        GUILayout.Label("Plugin Settings");
        GUILayout.EndArea();
    }

}
    **/