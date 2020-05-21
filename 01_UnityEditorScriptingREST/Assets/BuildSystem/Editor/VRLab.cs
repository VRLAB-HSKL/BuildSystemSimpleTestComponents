using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;
using UnityEngine.SceneManagement;
using UnityEditor.SceneManagement;
using Unity.EditorCoroutines.Editor;
using UnityEngine.Networking;

public class VRLab : EditorWindow
{
    Texture2D headerSectionTexture;
    Texture2D newSceneTexture;
    Texture2D switchPlatformTexture;
    Texture2D settingsTexture;

    string newSceneTextField = "enter name";
    bool assignVIU = false;
    bool assignGvR = false;
    bool assignWaveSDK = false;

    Color headerSectionColor = new Color(12f / 255f, 32f / 255f, 44f / 255f, 1f);
    Color newSceneSectionColor = new Color(0f, 0f, 255f, 0.3f); //Blue
    Color switchPlatformSectionColor = new Color(0f, 255f, 0f, 0.3f); //Green
    Color settingsSectionColor = new Color(255f, 0f, 255f, 0.3f); // Cerise

    Rect headerSection;
    Rect newSceneSection;
    Rect switchPlatformSection;
    Rect settingsSection;

    CreateSceneSection createSceneSection = new CreateSceneSection();
    RestClient restClient = new RestClient();

    [MenuItem("Crossplatform/VRLab")]
    static void OpenWindow()
    {
        VRLab window = (VRLab)GetWindow(typeof(VRLab));
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
        if(GUILayout.Button("Create Scene"))
        {
            createSceneSection.createSceneWithAssets(newSceneTextField, false, false, false);
            Scene test = EditorSceneManager.NewScene(NewSceneSetup.DefaultGameObjects, NewSceneMode.Single);
            test.name = newSceneTextField;
            //string test = EditorSceneManager.GetActiveScene().path;
            //Debug.Log(test);
            EditorSceneManager.MarkSceneDirty(test);
            EditorSceneManager.SaveScene(test, "Assets/Scenes/"+newSceneTextField+".unity");
        }
        if (GUILayout.Button("Test GET"))
        {
            EditorCoroutineUtility.StartCoroutine(restClient.GetRequest("http://localhost:8080/greeting", (UnityWebRequest req) =>
            {
                if(req.isNetworkError || req.isHttpError)
                {
                    Debug.Log($"{req.error}: {req.downloadHandler.text}");
                }
                else
                {
                    Debug.Log(req.downloadHandler.text);
                }
            }), this);
        }
        if(GUILayout.Button("Test Post"))
        {
            EditorCoroutineUtility.StartCoroutine(restClient.PostRequest("http://localhost:8080/greeting", "Peter", (UnityWebRequest req) =>
            {

            }), this);
        }
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