VERSION 5.00
Object = "{5E9E78A0-531B-11CF-91F6-C2863C385E30}#1.0#0"; "MSFLXGRD.OCX"
Begin VB.Form Comida 
   Caption         =   "Comida"
   ClientHeight    =   9390
   ClientLeft      =   120
   ClientTop       =   465
   ClientWidth     =   17775
   LinkTopic       =   "Form1"
   ScaleHeight     =   9390
   ScaleWidth      =   17775
   StartUpPosition =   3  'Windows Default
   Begin VB.CommandButton cmdgra 
      Caption         =   "Grabar venta"
      Height          =   615
      Left            =   15720
      TabIndex        =   27
      Top             =   3960
      Width           =   1335
   End
   Begin VB.CommandButton cmdsal 
      Caption         =   "Salir"
      Height          =   735
      Left            =   15720
      TabIndex        =   26
      Top             =   2880
      Width           =   1335
   End
   Begin VB.CommandButton cmdlim 
      Caption         =   "Limpiar"
      Height          =   735
      Left            =   15720
      TabIndex        =   25
      Top             =   1920
      Width           =   1335
   End
   Begin VB.TextBox txtpizz 
      Height          =   405
      Left            =   2880
      TabIndex        =   24
      Top             =   240
      Width           =   855
   End
   Begin VB.TextBox txtpap 
      Height          =   285
      Left            =   2880
      TabIndex        =   23
      Top             =   1320
      Width           =   855
   End
   Begin VB.TextBox txtcoc 
      Height          =   375
      Left            =   2760
      TabIndex        =   22
      Top             =   7320
      Width           =   855
   End
   Begin VB.TextBox txtlimo 
      Height          =   375
      Left            =   2760
      TabIndex        =   21
      Top             =   6120
      Width           =   975
   End
   Begin VB.TextBox txtcaf 
      Height          =   405
      Left            =   2760
      TabIndex        =   20
      Top             =   5040
      Width           =   855
   End
   Begin VB.TextBox txtte 
      Height          =   375
      Left            =   2760
      TabIndex        =   19
      Top             =   3840
      Width           =   975
   End
   Begin VB.TextBox txtham 
      Height          =   495
      Left            =   2760
      TabIndex        =   18
      Top             =   2280
      Width           =   1095
   End
   Begin VB.TextBox txttot 
      Height          =   375
      Left            =   15360
      TabIndex        =   17
      Top             =   8280
      Width           =   1095
   End
   Begin VB.TextBox txtimp 
      Height          =   495
      Left            =   15240
      TabIndex        =   14
      Top             =   7440
      Width           =   1335
   End
   Begin VB.TextBox txtpag 
      Height          =   495
      Left            =   15240
      TabIndex        =   12
      Top             =   6600
      Width           =   1335
   End
   Begin VB.TextBox txthora 
      Appearance      =   0  'Flat
      BorderStyle     =   0  'None
      ForeColor       =   &H80000001&
      Height          =   405
      Left            =   11160
      TabIndex        =   2
      Top             =   6600
      Width           =   1215
   End
   Begin VB.TextBox txtfecha 
      Appearance      =   0  'Flat
      BorderStyle     =   0  'None
      Height          =   405
      Left            =   9600
      TabIndex        =   1
      Top             =   6600
      Width           =   1215
   End
   Begin VB.CommandButton acpcmd 
      Caption         =   "Aceptar"
      Height          =   975
      Left            =   15720
      TabIndex        =   0
      Top             =   720
      Width           =   1215
   End
   Begin MSFlexGridLib.MSFlexGrid MSFlexGrid1 
      Height          =   2535
      Left            =   6840
      TabIndex        =   3
      TabStop         =   0   'False
      Top             =   120
      Width           =   2175
      _ExtentX        =   3836
      _ExtentY        =   4471
      _Version        =   393216
      Rows            =   8
      WordWrap        =   -1  'True
      AllowBigSelection=   0   'False
      GridLinesFixed  =   1
      Appearance      =   0
      FormatString    =   "Producto         |  Precio"
   End
   Begin VB.Label lbltot 
      Caption         =   "Total a pagar "
      Height          =   375
      Left            =   13800
      TabIndex        =   16
      Top             =   8280
      Width           =   1215
   End
   Begin VB.Label lblimp 
      Caption         =   "Impuesto"
      Height          =   375
      Left            =   13800
      TabIndex        =   15
      Top             =   7560
      Width           =   1095
   End
   Begin VB.Label lblpag 
      Caption         =   "Venta a pagar"
      Height          =   375
      Left            =   13800
      TabIndex        =   13
      Top             =   6720
      Width           =   1215
   End
   Begin VB.Image imgpap 
      Height          =   975
      Left            =   120
      Picture         =   "Form1.frx":0000
      Stretch         =   -1  'True
      Top             =   1080
      Width           =   1095
   End
   Begin VB.Image imgham 
      Height          =   975
      Left            =   120
      Picture         =   "Form1.frx":95C3
      Stretch         =   -1  'True
      Top             =   2280
      Width           =   1095
   End
   Begin VB.Image imgte 
      Height          =   975
      Left            =   120
      Picture         =   "Form1.frx":13149
      Stretch         =   -1  'True
      Top             =   3480
      Width           =   1095
   End
   Begin VB.Image imgcaf 
      Height          =   975
      Left            =   120
      Picture         =   "Form1.frx":20063
      Stretch         =   -1  'True
      Top             =   4680
      Width           =   1095
   End
   Begin VB.Image imglimo 
      Height          =   975
      Left            =   120
      Picture         =   "Form1.frx":3FDAC
      Stretch         =   -1  'True
      Top             =   5880
      Width           =   1095
   End
   Begin VB.Image imgcoc 
      Height          =   975
      Left            =   120
      Picture         =   "Form1.frx":464E4
      Stretch         =   -1  'True
      Top             =   7080
      Width           =   1095
   End
   Begin VB.Label lblpizz 
      Caption         =   "Pizza"
      Height          =   495
      Index           =   0
      Left            =   1440
      TabIndex        =   11
      Top             =   120
      Width           =   975
   End
   Begin VB.Label lbllimo 
      Caption         =   "Limonada "
      Height          =   495
      Index           =   1
      Left            =   1440
      TabIndex        =   10
      Top             =   6120
      Width           =   975
   End
   Begin VB.Label lblcaf 
      Caption         =   "Café"
      Height          =   495
      Index           =   2
      Left            =   1440
      TabIndex        =   9
      Top             =   4920
      Width           =   975
   End
   Begin VB.Label lblte 
      Caption         =   "Té"
      Height          =   495
      Index           =   3
      Left            =   1440
      TabIndex        =   8
      Top             =   3720
      Width           =   975
   End
   Begin VB.Label lblham 
      Caption         =   "Hamburgresa"
      Height          =   495
      Index           =   4
      Left            =   1440
      TabIndex        =   7
      Top             =   2520
      Width           =   975
   End
   Begin VB.Label lblpap 
      Caption         =   "Papa Frita"
      Height          =   495
      Index           =   5
      Left            =   1440
      TabIndex        =   6
      Top             =   1320
      Width           =   975
   End
   Begin VB.Label lblcoc 
      Caption         =   "Agua de Coco"
      Height          =   495
      Index           =   6
      Left            =   1440
      TabIndex        =   5
      Top             =   7320
      Width           =   975
   End
   Begin VB.Label Label2 
      Caption         =   "Label2"
      Height          =   15
      Left            =   0
      TabIndex        =   4
      Top             =   0
      Width           =   375
   End
   Begin VB.Image imgpizz 
      Height          =   855
      Left            =   120
      Picture         =   "Form1.frx":48864
      Stretch         =   -1  'True
      Top             =   0
      Width           =   1095
   End
   Begin VB.Image imglog 
      Height          =   6135
      Left            =   9360
      Picture         =   "Form1.frx":67C5E
      Stretch         =   -1  'True
      Top             =   120
      Width           =   6015
   End
End
Attribute VB_Name = "Comida"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False



Private Sub acpcmd_Click()
txtpag.Text = CCur(Val(txtpizz) * 1# + Val(txtpap.Text) * 1.5 + Val(txtham.Text) * 2# + Val(txtte.Text) * 75 + Val(txtcaf.Text) * 50 + Val(txtlimo.Text) * 50 + Val(txtcoc.Text) * 2#)
txtimp.Text = CCur(txtpag.Text * 0.15)
txttot.Text = CCur(txtpag.Text) + CCur(txtimp.Text)
End Sub



Private Sub cmdlim_Click()
txtpizz.Text = ""
txtpap.Text = ""
txtham.Text = ""
txtte.Text = ""
txtcaf.Text = ""
txtlimo.Text = ""
txtcoc.Text = ""
txtpizz.SetFocus
End Sub

Private Sub cmdsal_Click()
End
End Sub

Private Sub Form_Load()
txtfecha = Format$(Now, "ddd - mmm - yyyy")
txthora = Format$(Now, "hh:mm:ss AM/PM")
Dim f$
MSFlexGrid1.ColSel = 0: MSFlexGrid1.RowSel = 7
f$ = "Pizza" + vbTab + Str$(1) + vbCr + "Papa Fritas" + vbTab + Str$(1.5) + vbCr + "Hamburgresa" + vbTab + Str$(2#) + vbCr + "Te frio" + vbTab + Str$(75) + vbCr + "Café" + vbTab + Str$(50) + vbCr + "Limonada" + vbTab + Str$(50) + vbCr + "Agua de coco" + vbTab + Str$(2#) + vbCr
MSFlexGrid1.Clip = f$
End Sub



